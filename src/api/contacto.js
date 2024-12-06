import fs from 'fs';
import path from "path";
import { fileURLToPath } from 'url';


// Define manualmente __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.resolve(__dirname, '../db/contacts.json');
console.log("Ruta a contacts.json:", filePath);

export const handleContact = (req, res) => {
    if (req.method === 'POST') {
        const { nombre, email, telefono, mensaje } = req.body;
        if (!nombre || !email || !telefono) {
            return res.status(400).json({ error: 'Los campos son obligatorios' });
        }
        const newContact = { nombre, email, telefono, mensaje, fecha: new Date().toISOString() };
        let contacts = [];
        if (fs.existsSync(filePath)) {
            contacts = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        }
        contacts.push(newContact);
        fs.writeFileSync(filePath, JSON.stringify(contacts, null, 2));
        res.status(201).json({ message: 'Contaco guardado exitosamente' });
    }
    else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Metodo ${req.method} no permitido`);
    }
};