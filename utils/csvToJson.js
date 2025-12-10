import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const csvPath = path.join(__dirname, "../src/data/restaurants.csv");
const jsonPath = path.join(__dirname, "../src/data/restaurants.json");

// CSV parser that handles quoted multiline fields
function parseCSV(text) {
    const rows = [];
    let row = [];
    let field = "";
    let insideQuotes = false;

    for (let i = 0; i < text.length; i++) {
        const ch = text[i];

        if (ch === '"') {
            // Handle escaped quotes
            if (insideQuotes && text[i + 1] === '"') {
                field += '"';
                i++;
            } else {
                // Toggle quote state
                insideQuotes = !insideQuotes;
            }
            continue;
        }

        // Comma separates fields only if not inside quotes
        if (ch === "," && !insideQuotes) {
            row.push(field.trim());
            field = "";
            continue;
        }

        // Newline ends a row only if not inside quotes
        if ((ch === "\n" || ch === "\r") && !insideQuotes) {
            // Handle CRLF line endings (Windows-style Carriage Return + Line Feed)
            if (ch === "\r" && text[i + 1] === "\n") i++;
            row.push(field.trim());
            rows.push(row);
            row = [];
            field = "";
            continue;
        }

        // Regular character
        field += ch;
    }

    // Push any remaining field/row
    if (field || row.length) {
        row.push(field.trim());
        rows.push(row);
    }

    return rows;
}

// Convert CSV to JSON
function csvToJson() {
    try {
        const text = fs.readFileSync(csvPath, "utf8");
        const rows = parseCSV(text);
        const header = rows.shift();

        // Remove trailing empty header caused by final comma
        const cleanHeader = header.filter(h => h !== "");

        const data = rows
            // Skip fully empty rows
            .filter(r => r.some(x => x !== ""))
            .map(r => {
                const obj = {};
                const trimmedRow = r.slice(0, cleanHeader.length);

                // Map each header to its field value
                cleanHeader.forEach((h, i) => {
                    obj[h] = trimmedRow[i] ?? "";
                });

                // Recommended dishes: split by newlines, trim, remove trailing commas, filter empty
                obj.recommended = (obj.recommended || "")
                    .split(/\r?\n/)
                    .map(s => s.trim())
                    .map(s => s.replace(/,+$/, ""))
                    .filter(Boolean);

                return obj;
            });

        // Write JSON file
        fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
        console.log("✅ Generated JSON file successfully! ✅");
    } catch (err) {
        console.error("Error converting CSV to JSON:", err);
    }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
    csvToJson();
}

export default csvToJson;