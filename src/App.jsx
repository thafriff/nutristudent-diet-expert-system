import React, { useState, useMemo, useEffect, useRef } from 'react'; // Added useRef
import { 
    Scale, TrendingUp, TrendingDown, Clock, Dumbbell, Zap, 
    Salad, ShieldOff, HeartPulse, CheckCircle, Smile, Frown, 
    Wallet, Utensils, Home, ArrowLeft, ArrowRight, User, 
    Zap as ActiveIcon, LayoutDashboard, UtensilsCrossed, Users,
    ChevronDown, Sparkles, Info, Award, ChefHat, AlertCircle,
    Download, Database, X, Pencil, Trash2, Plus, Upload // Added Upload
} from 'lucide-react';

// --- DATA MANAGEMENT (ADMIN LOGIC) ---
const STORAGE_KEY = 'nutristudent_data';

const saveSessionData = (userName, userEmail, inputs, results, recipe) => {
    try {
        const currentData = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
        const newEntry = {
            id: Date.now(),
            date: new Date().toLocaleString(),
            name: userName || "Anonymous",
            email: userEmail || "Not Provided", // NEW FIELD
            ...inputs,
            bmi: results.BMI,
            bmi_category: results.BMI_Category,
            diet_plan: results.Diet_Plan,
            generated_recipe: recipe || "Not Generated"
        };
        currentData.push(newEntry);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
    } catch (e) {
        console.error("Failed to save session", e);
    }
};

const getSessionData = () => {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
    } catch (e) {
        return [];
    }
};

const downloadCSV = () => {
    const data = getSessionData();
    if (data.length === 0) {
        alert("No data collected yet.");
        return;
    }
    const headers = Object.keys(data[0]).join(',');
    const rows = data.map(obj => 
        Object.values(obj).map(val => 
            `"${String(val).replace(/"/g, '""')}"` 
        ).join(',')
    );
    const csvContent = [headers, ...rows].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `nutristudent_data_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

// --- UPDATED COMPONENT: NAME & EMAIL INPUT MODAL ---
const NameModal = ({ isOpen, onSubmit, onCancel }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-[2rem] p-8 w-full max-w-md shadow-2xl relative">
                <button onClick={onCancel} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600"><X className="w-6 h-6" /></button>
                <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-600"><User className="w-8 h-8" /></div>
                    <h3 className="text-2xl font-black text-slate-900">Welcome!</h3>
                    <p className="text-slate-500 mt-2 text-sm">Enter your details to start your personalized plan.</p>
                </div>
                <div className="space-y-4 mb-6">
                    <input type="text" placeholder="Your Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-slate-50 p-4 rounded-xl border border-slate-200 focus:border-brand-500 outline-none text-slate-900 font-bold" autoFocus />
                    <input type="email" placeholder="Your Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-slate-50 p-4 rounded-xl border border-slate-200 focus:border-brand-500 outline-none text-slate-900 font-bold" />
                </div>
                <button onClick={() => name.trim() && email.trim() && onSubmit(name, email)} disabled={!name.trim() || !email.trim()} className="w-full bg-brand-600 text-white py-4 rounded-xl font-bold shadow-lg hover:bg-brand-700 transition active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">Start Consultation</button>
            </div>
        </div>
    );
};
// --- NEW COMPONENT: EDIT/ADD MODAL ---
const EditModal = ({ isOpen, entry, onSave, onCancel }) => {
    const [formData, setFormData] = useState(entry || {});

    // Update form data when entry changes
    useEffect(() => {
        setFormData(entry || {
            name: '', email: '', age: '', height: '', weight: '', 
            goal: 'Maintain', bmi: '', diet_plan: 'Balanced'
        });
    }, [entry]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => {
            const newData = { ...prev, [name]: value };
            // Auto-calc BMI if height/weight change
            if (name === 'height' || name === 'weight') {
                const h = newData.height / 100;
                const w = newData.weight;
                if (h > 0 && w > 0) newData.bmi = (w / (h * h)).toFixed(2);
            }
            return newData;
        });
    };

    return (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[70] flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl p-6 w-full max-w-lg shadow-2xl border border-slate-200 max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-black text-slate-900">{entry ? 'Edit User Data' : 'Add New User'}</h3>
                    <button onClick={onCancel}><X className="w-5 h-5 text-slate-400" /></button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className="text-xs font-bold text-slate-400 uppercase">Name</label>
                        <input name="name" value={formData.name} onChange={handleChange} className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold" />
                    </div>
                    <div className="col-span-2">
                        <label className="text-xs font-bold text-slate-400 uppercase">Email</label>
                        <input name="email" value={formData.email} onChange={handleChange} className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-400 uppercase">Height (cm)</label>
                        <input type="number" name="height" value={formData.height} onChange={handleChange} className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-400 uppercase">Weight (kg)</label>
                        <input type="number" name="weight" value={formData.weight} onChange={handleChange} className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold" />
                    </div>
                    <div>
                        <label className="text-xs font-bold text-slate-400 uppercase">Age</label>
                        <input type="number" name="age" value={formData.age} onChange={handleChange} className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold" />
                    </div>
                     <div>
                        <label className="text-xs font-bold text-slate-400 uppercase">Goal</label>
                        <select name="goal" value={formData.goal} onChange={handleChange} className="w-full p-3 bg-slate-50 rounded-lg border border-slate-200 font-bold">
                            <option value="Maintain">Maintain</option>
                            <option value="Gain">Gain</option>
                            <option value="Lose">Lose</option>
                        </select>
                    </div>
                </div>

                <div className="mt-6 flex gap-3">
                    <button onClick={onCancel} className="flex-1 py-3 rounded-lg border border-slate-200 font-bold text-slate-500 hover:bg-slate-50">Cancel</button>
                    <button onClick={() => onSave(formData)} className="flex-1 py-3 rounded-lg bg-brand-600 text-white font-bold hover:bg-brand-700">Save Changes</button>
                </div>
            </div>
        </div>
    );
};
// --- NEW COMPONENT: ADMIN DASHBOARD ---

// --- UPDATED COMPONENT: ADMIN DASHBOARD (With Import Logic) ---
const AdminDashboard = ({ onExit }) => {
    const [data, setData] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [currentEntry, setCurrentEntry] = useState(null);
    const fileInputRef = useRef(null); // Reference for the hidden file input

    useEffect(() => { setData(getSessionData()); }, []);

    // 1. DELETE FUNCTION
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this record?")) {
            const newData = data.filter(item => item.id !== id);
            setData(newData);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
        }
    };

    // 2. OPEN EDIT MODAL
    const handleEditClick = (entry) => {
        setCurrentEntry(entry);
        setIsEditModalOpen(true);
    };

    // 3. OPEN ADD MODAL
    const handleAddClick = () => {
        setCurrentEntry(null);
        setIsEditModalOpen(true);
    };

    // 4. SAVE FUNCTION
    const handleSaveEntry = (formData) => {
        let newData;
        if (currentEntry) {
            newData = data.map(item => item.id === currentEntry.id ? { ...formData, id: currentEntry.id } : item);
        } else {
            const newEntry = { ...formData, id: Date.now(), date: new Date().toLocaleString() };
            newData = [...data, newEntry];
        }
        setData(newData);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
        setIsEditModalOpen(false);
    };

    // 5. IMPORT CSV FUNCTION (The New Feature)
    const handleImportClick = () => {
        fileInputRef.current.click();
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const text = e.target.result;
                const rows = text.split('\n').filter(row => row.trim() !== '');
                if (rows.length < 2) throw new Error("File empty");

                const headers = rows[0].split(','); // Assuming simple CSV structure
                
                const newEntries = rows.slice(1).map(row => {
                    // Smart regex to handle commas inside quotes (like in recipes)
                    const matches = row.match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
                    if (!matches) return null;
                    
                    const cleanValues = matches.map(val => val.replace(/^"|"$/g, '').replace(/""/g, '"'));
                    
                    // Reconstruct object based on header order
                    // Note: This is a basic mapping, it assumes the CSV format matches the Export format exactly
                    return {
                        id: Date.now() + Math.random(), // Generate new ID to avoid collisions
                        date: cleanValues[0] || new Date().toLocaleString(),
                        name: cleanValues[1] || "",
                        email: cleanValues[2] || "",
                        height: cleanValues[3] || "",
                        weight: cleanValues[4] || "",
                        age: cleanValues[5] || "",
                        goal: cleanValues[6] || "",
                        bmi: cleanValues[7] || "",
                        bmi_category: cleanValues[8] || "",
                        diet_plan: cleanValues[9] || "",
                        generated_recipe: cleanValues[10] || "Imported"
                    };
                }).filter(Boolean);

                // Merge with existing data
                const combinedData = [...data, ...newEntries];
                setData(combinedData);
                localStorage.setItem(STORAGE_KEY, JSON.stringify(combinedData));
                alert(`Successfully imported ${newEntries.length} records!`);
            } catch (err) {
                console.error(err);
                alert("Failed to import CSV. Please ensure it was exported from this app.");
            }
        };
        reader.readAsText(file);
        event.target.value = null; // Reset input
    };

    const stats = useMemo(() => {
        return {
            total: data.length,
            lose: data.filter(d => d.goal === 'Lose').length,
            gain: data.filter(d => d.goal === 'Gain').length,
            vegan: data.filter(d => d.diet_restriction === 'Vegan').length
        };
    }, [data]);

    return (
        <div className="min-h-screen bg-slate-50 font-sans relative">
            <EditModal 
                isOpen={isEditModalOpen} 
                entry={currentEntry} 
                onSave={handleSaveEntry} 
                onCancel={() => setIsEditModalOpen(false)} 
            />

            {/* Hidden File Input for Import */}
            <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                accept=".csv" 
                className="hidden" 
            />

            <nav className="bg-slate-900 text-white p-6 sticky top-0 z-50 shadow-lg">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center"><LayoutDashboard className="w-5 h-5 text-white" /></div>
                        <div><h1 className="font-black text-xl uppercase tracking-tighter">Admin Dashboard</h1></div>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={handleAddClick} className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-lg font-bold text-sm transition text-white"><Plus className="w-4 h-4" /> Add</button>
                        {/* IMPORT BUTTON ADDED HERE */}
                        <button onClick={handleImportClick} className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-4 py-2 rounded-lg font-bold text-sm transition text-white"><Upload className="w-4 h-4" /> Import</button>
                        <button onClick={downloadCSV} className="flex items-center gap-2 bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded-lg font-bold text-sm transition"><Download className="w-4 h-4" /> Export</button>
                        <button onClick={onExit} className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg font-bold text-sm transition">Logout</button>
                    </div>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto p-6 space-y-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><Users className="w-6 h-6" /></div>
                        <div><p className="text-xs text-slate-400 font-bold uppercase">Total Users</p><p className="text-2xl font-black text-slate-900">{stats.total}</p></div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-red-50 text-red-600 rounded-xl"><TrendingDown className="w-6 h-6" /></div>
                        <div><p className="text-xs text-slate-400 font-bold uppercase">Weight Loss</p><p className="text-2xl font-black text-slate-900">{stats.lose}</p></div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-green-50 text-green-600 rounded-xl"><TrendingUp className="w-6 h-6" /></div>
                        <div><p className="text-xs text-slate-400 font-bold uppercase">Weight Gain</p><p className="text-2xl font-black text-slate-900">{stats.gain}</p></div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                        <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl"><Salad className="w-6 h-6" /></div>
                        <div><p className="text-xs text-slate-400 font-bold uppercase">Vegan</p><p className="text-2xl font-black text-slate-900">{stats.vegan}</p></div>
                    </div>
                </div>

                <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-100 border-b border-slate-200">
                                    {['Actions', 'Date', 'Name', 'Email', 'Age', 'Goal', 'BMI', 'Plan'].map(h => <th key={h} className="p-4 text-xs font-black uppercase text-slate-500 tracking-wider whitespace-nowrap">{h}</th>)}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100">
                                {data.length > 0 ? data.map((row, i) => (
                                    <tr key={row.id || i} className="hover:bg-slate-50 transition group">
                                        <td className="p-4 flex gap-2">
                                            <button onClick={() => handleEditClick(row)} className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-brand-50 hover:text-brand-600 transition"><Pencil className="w-4 h-4" /></button>
                                            <button onClick={() => handleDelete(row.id)} className="p-2 bg-slate-100 rounded-lg text-slate-600 hover:bg-red-50 hover:text-red-600 transition"><Trash2 className="w-4 h-4" /></button>
                                        </td>
                                        <td className="p-4 text-xs font-medium text-slate-500 whitespace-nowrap">{row.date}</td>
                                        <td className="p-4 text-sm font-bold text-slate-900">{row.name}</td>
                                        <td className="p-4 text-sm text-slate-600">{row.email}</td>
                                        <td className="p-4 text-sm text-slate-600">{row.age}</td>
                                        <td className="p-4 text-sm"><span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-bold">{row.goal}</span></td>
                                        <td className="p-4 text-sm font-bold text-slate-800">{row.bmi}</td>
                                        <td className="p-4 text-sm text-slate-600"><span className="bg-brand-50 text-brand-700 px-2 py-1 rounded text-xs font-bold">{row.diet_plan}</span></td>
                                    </tr>
                                )) : (<tr><td colSpan="9" className="p-12 text-center text-slate-400 italic">No data found.</td></tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
};


// Import generated rules (programmatically produced set)
import GENERATED_RULES from './rules/rules.generated';

// --- Utility Functions for Gemini API Calls ---

const base64ToArrayBuffer = (base64) => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
};

const pcmToWav = (pcmData, sampleRate) => {
    const buffer = new ArrayBuffer(44 + pcmData.length * 2); 
    const view = new DataView(buffer);
    
    // WAV Header
    view.setUint32(0, 0x46464952, false); 
    view.setUint32(4, 36 + pcmData.length * 2, true);
    view.setUint32(8, 0x45564157, false); 
    view.setUint32(12, 0x20746d66, false); 
    view.setUint32(16, 16, true);
    view.setUint16(20, 1, true);
    view.setUint16(22, 1, true); 
    view.setUint32(24, sampleRate, true); 
    view.setUint32(28, sampleRate * 2, true);
    view.setUint16(32, 2, true);
    view.setUint16(34, 16, true);
    view.setUint32(36, 0x61746164, false); 
    view.setUint32(40, pcmData.length * 2, true);

    let offset = 44;
    for (let i = 0; i < pcmData.length; i++) {
        view.setInt16(offset, pcmData[i], true);
        offset += 2;
    }
    
    return new Blob([buffer], { type: 'audio/wav' });
};

const withBackoff = async (fn, maxRetries = 3) => {
    for (let attempt = 0; attempt < maxRetries; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxRetries - 1) throw error;
            const delay = Math.pow(2, attempt) * 1000 + Math.random() * 1000;
            await new Promise(resolve => setTimeout(resolve, delay));
        }
    }
};

// ==============================================================================
// ⚠️ PASTE YOUR KEY HERE ⚠️
// ==============================================================================
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

// ==============================================================================

// We define a list of valid models from your PDF. 
// If the first one is "Overloaded", the code will automatically try the next.
const MODELS_TO_TRY = [
    'gemini-2.5-flash',       // Source [cite: 19] - Preferred
    'gemini-2.5-flash-lite',  // Source [cite: 417] - Often less busy
    'gemini-2.0-flash'        // Source [cite: 78] - Very stable backup
];

const fetchGeminiText = async (prompt, systemPrompt) => {
    if (!apiKey) throw new Error("Missing API Key.");

    let lastError = null;

    // Loop through the models until one works
    for (const model of MODELS_TO_TRY) {
        try {
            console.log(`Attempting to generate with model: ${model}...`);
            
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
            const fullPrompt = `SYSTEM INSTRUCTION: ${systemPrompt}\n\nUSER REQUEST: ${prompt}`;
            
            const payload = {
                contents: [{ parts: [{ text: fullPrompt }] }]
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            // If the model is overloaded (503) or not found (404), this will throw
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error?.message || `Status ${response.status}`);
            }

            const result = await response.json();
            const text = result.candidates?.[0]?.content?.parts?.[0]?.text;
            
            if (text) {
                return text; // Success! Return immediately.
            }
            
        } catch (error) {
            console.warn(`Model ${model} failed:`, error.message);
            lastError = error;
            // The loop continues to the next model automatically...
        }
    }
    
    // If we run out of models to try:
    throw new Error(`All models failed. Last error: ${lastError?.message}`);
};

// Audio disabled as requested
const fetchGeminiTTS = async () => { return null; };
// --- Configuration Data ---
const STEP_CONFIG = [
    { title: "Profile", icon: User },
    { title: "Goal", icon: ActiveIcon },
    { title: "Exercise", icon: Dumbbell },
    { title: "Restriction", icon: Salad },
    { title: "Condition", icon: HeartPulse },
    { title: "Stress", icon: Frown },
    { title: "Budget", icon: Wallet },
    { title: "Facilities", icon: Home },
    { title: "Strategy", icon: CheckCircle }
];

const CARD_OPTIONS = {
    goal: [
        { value: 'Maintain', label: 'Maintain Weight', icon: Scale },
        { value: 'Gain', label: 'Gain Muscle/Weight', icon: TrendingUp },
        { value: 'Lose', label: 'Lose Weight', icon: TrendingDown },
    ],
    exercise_level: [
        { value: 'Rarely', label: 'Rarely (Sedentary)', icon: Clock },
        { value: 'Moderate', label: 'Moderate (3-5x/week)', icon: Dumbbell },
        { value: 'Active', label: 'Active (Daily/Vigorous)', icon: Zap },
    ],
    diet_restriction: [
        { value: 'None', label: 'No Restrictions', icon: Smile },
        { value: 'Vegan', label: 'Vegan', icon: Salad },
        { value: 'Vegetarian', label: 'Vegetarian', icon: Utensils },
        { value: 'Allergy', label: 'Specific Allergies', icon: ShieldOff },
    ],
    health_condition: [
        { value: 'None', label: 'None', icon: CheckCircle },
        { value: 'High BP', label: 'High BP', icon: HeartPulse },
        { value: 'High Cholesterol', label: 'High Cholesterol', icon: HeartPulse },
    ],
    stress_level: [
        { value: 'Low', label: 'Low Stress', icon: Smile },
        { value: 'Medium', label: 'Medium Stress', icon: Smile },
        { value: 'High', label: 'High Stress', icon: Frown },
    ],
    budget_level: [
        { value: 'Low', label: 'Low Budget', icon: Wallet },
        { value: 'Medium', label: 'Medium Budget', icon: Wallet },
        { value: 'High', label: 'High Budget', icon: Wallet },
    ],
    cooking_facility: [
        { value: 'No Kitchen', label: 'No Kitchen (Dorm)', icon: UtensilsCrossed },
        { value: 'Shared Kitchen', label: 'Shared Kitchen', icon: Users }, 
        { value: 'Full Kitchen', label: 'Full Kitchen', icon: Home },
    ],
};

const ADVICE = {
    Diet_Plan: {
        'Calorie-Surplus': { 
            title: "Calorie-Surplus", 
            reason: "Based on your Underweight BMI and Gain Goal, your plan focuses on eating more calories than you burn.", 
            content: "Focus on nutrient-dense foods: whole grains, healthy fats (avocados, nuts), lean proteins. Eat frequent, slightly larger meals.", 
            priority: 1 
        },
        'Calorie-Deficit': { 
            title: "Calorie-Deficit", 
            reason: "Since your BMI is categorized as Overweight/Obese and your Goal is to Lose, we create a sustainable energy deficit.", 
            content: "Prioritize high-volume, low-calorie foods: vegetables, fruits, and lean protein. Drink plenty of water.", 
            priority: 1 
        },
        'Balanced': { 
            title: "Balanced Diet", 
            reason: "Your profile suggests maintenance is the priority. This plan focuses on balance to sustain energy.", 
            content: "Aim for roughly 40% Carbohydrates, 30% Protein, and 30% Healthy Fats. Maintain consistent meal timings.", 
            priority: 2 
        },
        'Plant-Based': { 
            title: "Plant-Based Mastery", 
            reason: "Your dietary restriction is a plant-based diet.", 
            content: "Key focus areas: Vitamin B12, Iron, and Protein (beans, soy, nuts). Ensure sufficient caloric intake.", 
            priority: 1 
        },
        'Allergy-Safe': { 
            title: "Allergy-Safe", 
            reason: "Your Allergy Restriction is the primary focus. Safety first!", 
            content: "Strict label reading is mandatory. Focus on naturally safe, single-ingredient foods.", 
            priority: 1 
        },
        'Stress-Control': { 
            title: "Stress-Control", 
            reason: "Your High Stress Level requires nutritional support to stabilize mood.", 
            content: "Focus on Omega-3 fatty acids, complex carbohydrates, and B vitamins. Avoid excessive caffeine.", 
            priority: 3 
        },
        'Budget-Friendly': { 
            title: "Budget-Friendly", 
            reason: "Your Low Budget means maximizing nutritional value per dollar.", 
            content: "Emphasize affordable staples: rice, pasta, eggs, legumes. Meal prep is essential.", 
            priority: 3 
        }
    },
    Food_Type: {
        'No-Cook Meals': { 
            title: "No-Cook Meals", 
            reason: "Selected because you have no access to a kitchen.",
            content: "Focus on pre-cut salads, canned tuna, whole fruits, bread, nut butter, and shelf-stable milk." 
        },
        'Low-Budget Meals': { 
            title: "Low-Budget Staples", 
            reason: "Optimized for a low budget to ensure affordability.",
            content: "Prioritize eggs, oats, potatoes, rice, and frozen mixed vegetables. Buy in bulk." 
        },
        'Plant-Based': { 
            title: "Plant-Based Protein", 
            reason: " aligned with your vegan/vegetarian requirement.",
            content: "Excellent sources: Tofu, Tempeh, Lentils, Chickpeas. Look for fortified plant milk." 
        },
        'Variety of Healthy Meals': { 
            title: "Optimal Variety", 
            reason: "No major restrictions detected; aim for maximum nutrient diversity.",
            content: "Aim for maximum variety across all food groups: diverse vegetables, whole grains, lean proteins." 
        }
    },
    Meal_Portion: {
        'Larger Meals': { 
            title: "Larger Meals", 
            reason: "Necessary to achieve a calorie surplus for weight gain.",
            content: "Consume larger portions during standard mealtimes. If uncomfortable, add liquid calories (smoothies) between meals." 
        },
        'Small Frequent Meals': { 
            title: "Small Frequent Meals", 
            reason: "Helps manage hunger during a calorie deficit or stabilize blood pressure.",
            content: "Eat 5-6 smaller meals to stabilize blood sugar. Never skip breakfast to avoid overeating later." 
        },
        'Normal Meals': { 
            title: "Standard Portions", 
            reason: "Standard portion sizes are recommended for your balanced profile.",
            content: "Use the 'My Plate' method: half plate vegetables/fruit, one-quarter whole grains, one-quarter protein." 
        }
    }
};

const INLINE_FEEDBACK = {
    age: (value) => `Age ${value}. Nutritional needs change significantly with age! It's great you are planning ahead.`,
    bmi: (category, bmi) => `BMI Calculated (${bmi}): Your category is **${category}**. Remember, this is just a starting point!`,
    goal: {
        'Maintain': "Maintaining requires consistency—focus on nutrient timing around study sessions!",
        'Gain': "For muscle gain, prioritizing protein and healthy carbohydrates is key right now.",
        'Lose': "Weight loss success depends heavily on a slight, consistent calorie deficit.",
    },
    exercise_level: {
        'Rarely': "Being sedentary means your metabolic rate is lower. Focus on quality, nutrient-dense calories.",
        'Moderate': "Moderate activity is fantastic! Ensure your diet gives you enough energy for those workouts.",
        'Active': "High activity means higher energy needs. Don't forget post-workout refueling!",
    },
    diet_restriction: {
        'None': "No restrictions simplifies things! Focus on variety across all food groups.",
        'Vegan': "Ensure you get essential nutrients like B12, Iron, and Omega-3s on a vegan diet.",
        'Vegetarian': "Lacto-ovo vegetarian diets are great sources of protein and calcium.",
        'Allergy': "Strict avoidance of allergens is the highest priority. Always double-check labels!",
    },
    health_condition: {
        'None': "Excellent! Maintaining good health is easier than repairing it.",
        'High BP': "Diet is critical for blood pressure! Reducing sodium and increasing potassium helps.",
        'High Cholesterol': "Focus on soluble fiber (oats, beans) and reducing saturated and trans fats.",
    },
    stress_level: {
        'Low': "Great! Low stress helps maintain healthy digestion and cortisol levels.",
        'Medium': "Medium stress? Use food as fuel, not comfort. Stay hydrated!",
        'High': "High stress can deplete B vitamins. Focus on calm, regular eating habits.",
    },
    budget_level: {
        'Low': "Low budget requires smart shopping! Canned/frozen produce and bulk staples are your friends.",
        'Medium': "Medium budget allows for some variety—consider seasonal fruits and vegetables.",
        'High': "Higher budget allows for specialty items, but value nutrition over cost!",
    },
    cooking_facility: {
        'No Kitchen': "No-cook challenge accepted! Focus on pre-prepared or shelf-stable whole foods.",
        'Shared Kitchen': "Shared kitchen means quick meals! Prep ingredients ahead of time to save space and time.",
        'Full Kitchen': "Full kitchen is a major advantage! Use it for meal prepping big batches.",
    },
};

// --- Utility Components ---

const FeedbackBanner = ({ message }) => {
    if (!message) return null;
    return (
        <div 
            key={message} 
            className="mb-6 p-4 bg-brand-50 border-l-4 border-brand-500 text-brand-900 rounded-lg flex items-start animate-fade-in shadow-sm"
        >
            <Info className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
            <p className="text-sm font-medium leading-relaxed">{message}</p>
        </div>
    );
};

// Updated CardSelector to use "Green/White" design instead of "Blue"
const CardSelector = ({ id, label, options, selectedValue, onChange, feedbackMessage }) => (
    <div className="mb-8">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 block">{label}</label>
        <FeedbackBanner message={feedbackMessage} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {options.map((option) => (
                <button
                    key={option.value}
                    type="button"
                    onClick={() => onChange(id, option.value)}
                    className={`
                        p-4 flex flex-col items-center justify-center text-center rounded-xl border-2 transition-all duration-300 h-full
                        ${selectedValue === option.value
                            ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-lg transform scale-[1.02]'
                            : 'bg-white border-slate-100 text-slate-500 hover:border-brand-200 hover:bg-slate-50'
                        }
                    `}
                >
                    <div className={`mb-2 p-2 rounded-full ${selectedValue === option.value ? 'bg-brand-200 text-brand-800' : 'bg-slate-100 text-slate-400'}`}>
                        <option.icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-bold">{option.label}</span>
                </button>
            ))}
        </div>
    </div>
);

// New Result Card for the Strategy page
const ResultCard = ({ title, value, sub, icon: Icon, colorClass }) => (
    <div className={`p-8 rounded-[2rem] relative overflow-hidden text-white ${colorClass} shadow-lg`}>
        <p className="text-[10px] font-black uppercase tracking-widest mb-2 opacity-70">{title}</p>
        <p className="text-3xl font-black leading-tight tracking-tight">{value}</p>
        <p className="text-sm font-medium mt-2 opacity-90 border-t border-white/20 pt-2 inline-block">{sub}</p>
        <Icon className="absolute -bottom-4 -right-4 w-24 h-24 opacity-10" />
    </div>
);

const ResultDetailBox = ({ title, value, detailKey, category, icon: Icon, accentColor }) => {
    const adviceData = ADVICE[category] ? ADVICE[category][detailKey] : null;
    const valueDisplay = value || '--';

    return (
        <div className={`rounded-3xl shadow-sm bg-white border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-md mb-4`}>
            <details className="group">
                <summary className={`p-6 flex items-center justify-between cursor-pointer ${accentColor} text-white`}>
                    <div className="flex items-center">
                        <Icon className="w-5 h-5 mr-4" />
                        <span className="text-lg font-bold">{title}: {valueDisplay}</span>
                    </div>
                    <ChevronDown className="w-5 h-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="p-6 bg-slate-50 text-slate-600 border-t border-slate-100 leading-relaxed">
                    {adviceData ? (
                        <div className="space-y-4">
                            <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                                Logic: {adviceData.reason}
                            </p>
                            <h4 className="font-bold text-slate-900 text-lg">{adviceData.title}</h4>
                            <p>{adviceData.content}</p>
                        </div>
                    ) : (
                        <p>Detailed advice is loading or unavailable for this combination.</p>
                    )}
                </div>
            </details>
        </div>
    );
};

const Footer = () => (
    <footer className="py-24 bg-transparent text-center">
        <div className="flex items-center justify-center gap-2 mb-10">
            <Salad className="w-10 h-10 text-brand-600" />
            <span className="text-2xl font-black tracking-tighter uppercase text-slate-900">Nutri<span className="text-slate-400">Student</span></span>
        </div>
        <div className="flex justify-center gap-12 text-[11px] font-black text-slate-400 uppercase tracking-widest mb-12">
            <a href="#" className="hover:text-brand-600 transition">Terms</a>
            <a href="#" className="hover:text-brand-600 transition">Privacy</a>
            <a href="#" className="hover:text-brand-600 transition">Contact</a>
        </div>
        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">&copy; 2026 NutriStudent Systems</p>
    </footer>
);

// --- Core Logic: Knowledge Base ---

const BASE_RULES = [
    {
        id: 'R6',
        description: 'Major health condition requires professional consultation',
        priority: 100,
        condition: (inputs, results) => ['High BP', 'High Cholesterol'].includes(inputs.health_condition),
        conditionString: "health_condition == 'High BP' OR health_condition == 'High Cholesterol'",
        effects: { Health_Advisory: 'Consult Doctor' }
    },
    {
        id: 'R7',
        description: 'Obese BMI or older than 40 triggers caution advisory',
        priority: 80,
        condition: (inputs, results) => results.BMI_Category === 'Obese' || inputs.age > 40,
        conditionString: "BMI_Category == 'Obese' OR age > 40",
        effects: { Health_Advisory: 'Caution' }
    },
    {
        id: 'R13',
        description: 'High stress overrides to stress-control diet',
        priority: 90,
        condition: (inputs, results) => inputs.stress_level === 'High',
        conditionString: "stress_level == 'High'",
        effects: { Diet_Plan: 'Stress-Control' }
    },
    {
        id: 'R8',
        description: 'Underweight AND goal=Gain -> Calorie-Surplus',
        priority: 50,
        condition: (inputs, results) => results.BMI_Category === 'Underweight' && inputs.goal === 'Gain',
        conditionString: "BMI_Category == 'Underweight' AND goal == 'Gain'",
        effects: { Diet_Plan: 'Calorie-Surplus' }
    },
    {
        id: 'R8b',
        description: 'Goal Gain OR (Underweight and young) -> Calorie-Surplus (softer match)',
        priority: 40,
        condition: (inputs, results) => inputs.goal === 'Gain' || (results.BMI_Category === 'Underweight' && inputs.age < 30),
        conditionString: "goal == 'Gain' OR (BMI_Category == 'Underweight' AND age < 30)",
        effects: { Diet_Plan: 'Calorie-Surplus' }
    },
    {
        id: 'R9',
        description: 'Overweight/Obese AND goal=Lose -> Calorie-Deficit',
        priority: 50,
        condition: (inputs, results) => (results.BMI_Category === 'Overweight' || results.BMI_Category === 'Obese') && inputs.goal === 'Lose',
        conditionString: "(BMI_Category == 'Overweight' OR BMI_Category == 'Obese') AND goal == 'Lose'",
        effects: { Diet_Plan: 'Calorie-Deficit' }
    },
    {
        id: 'R9b',
        description: 'Goal Lose OR high-cholesterol -> Calorie-Deficit (softer match)',
        priority: 35,
        condition: (inputs, results) => inputs.goal === 'Lose' || inputs.health_condition === 'High Cholesterol',
        conditionString: "goal == 'Lose' OR health_condition == 'High Cholesterol'",
        effects: { Diet_Plan: 'Calorie-Deficit' }
    },
    {
        id: 'R10',
        description: 'Maintain + Rarely active and young -> Balanced',
        priority: 30,
        condition: (inputs, results) => inputs.goal === 'Maintain' && inputs.exercise_level === 'Rarely' && inputs.age < 30,
        conditionString: "goal == 'Maintain' AND exercise_level == 'Rarely' AND age < 30",
        effects: { Diet_Plan: 'Balanced' }
    },
    {
        id: 'R11',
        description: 'Vegan or Vegetarian -> Plant-Based',
        priority: 70,
        condition: (inputs, results) => ['Vegan', 'Vegetarian'].includes(inputs.diet_restriction),
        conditionString: "diet_restriction == 'Vegan' OR diet_restriction == 'Vegetarian'",
        effects: { Diet_Plan: 'Plant-Based' }
    },
    {
        id: 'R12',
        description: 'Allergy restriction -> Allergy-Safe plan',
        priority: 85,
        condition: (inputs, results) => inputs.diet_restriction === 'Allergy',
        conditionString: "diet_restriction == 'Allergy'",
        effects: { Diet_Plan: 'Allergy-Safe' }
    },
    {
        id: 'R14',
        description: 'Low budget -> Budget-Friendly plan',
        priority: 60,
        condition: (inputs, results) => inputs.budget_level === 'Low',
        conditionString: "budget_level == 'Low'",
        effects: { Diet_Plan: 'Budget-Friendly' }
    },
    {
        id: 'R15',
        description: 'No kitchen -> No-Cook Meals',
        priority: 90,
        condition: (inputs, results) => inputs.cooking_facility === 'No Kitchen',
        conditionString: "cooking_facility == 'No Kitchen'",
        effects: { Food_Type: 'No-Cook Meals' }
    },
    {
        id: 'R16',
        description: 'Diet restriction vegan -> Plant-Based food type',
        priority: 70,
        condition: (inputs, results) => inputs.diet_restriction === 'Vegan',
        conditionString: "diet_restriction == 'Vegan'",
        effects: { Food_Type: 'Plant-Based' }
    },
    {
        id: 'R17',
        description: 'Low budget -> Low-Budget Meals',
        priority: 50,
        condition: (inputs, results) => inputs.budget_level === 'Low',
        conditionString: "budget_level == 'Low'",
        effects: { Food_Type: 'Low-Budget Meals' }
    },
    {
        id: 'R16b',
        description: 'Vegan/Vegetarian AND low budget -> Plant-Based + Low-Budget specialized',
        priority: 80,
        condition: (inputs, results) => (['Vegan','Vegetarian'].includes(inputs.diet_restriction) && inputs.budget_level === 'Low'),
        conditionString: "(diet_restriction == 'Vegan' OR diet_restriction == 'Vegetarian') AND budget_level == 'Low'",
        effects: { Food_Type: 'Plant-Based' }
    },
    {
        id: 'R19',
        description: 'Calorie-Surplus -> Larger Meals',
        priority: 50,
        condition: (inputs, results) => results.Diet_Plan === 'Calorie-Surplus',
        conditionString: "Diet_Plan == 'Calorie-Surplus'",
        effects: { Meal_Portion: 'Larger Meals' }
    },
    {
        id: 'R20',
        description: 'Calorie-Deficit OR High BP -> Small Frequent Meals',
        priority: 60,
        condition: (inputs, results) => results.Diet_Plan === 'Calorie-Deficit' || inputs.health_condition === 'High BP',
        conditionString: "Diet_Plan == 'Calorie-Deficit' OR health_condition == 'High BP'",
        effects: { Meal_Portion: 'Small Frequent Meals' }
    },
    {
        id: 'R21',
        description: 'Balanced diet -> Normal Meals',
        priority: 40,
        condition: (inputs, results) => results.Diet_Plan === 'Balanced',
        conditionString: "Diet_Plan == 'Balanced'",
        effects: { Meal_Portion: 'Normal Meals' }
    },
    {
        id: 'R22',
        description: 'Normal BMI + Low stress -> Normal Meals',
        priority: 30,
        condition: (inputs, results) => results.BMI_Category === 'Normal' && inputs.stress_level === 'Low',
        conditionString: "BMI_Category == 'Normal' AND stress_level == 'Low'",
        effects: { Meal_Portion: 'Normal Meals' }
    }
];

const RULES = [ ...BASE_RULES, ...(GENERATED_RULES || []) ];

const consultSystem = (inputs) => {
    const { height, weight, age, goal, exercise_level, diet_restriction, health_condition, stress_level, budget_level, cooking_facility } = inputs;

    let results = {
        BMI: null,
        BMI_Category: 'Awaiting Input',
        Diet_Plan: null,
        Meal_Portion: null,
        Food_Type: null,
        Health_Advisory: null,
        _appliedRules: []
    };

    if (!height || !weight || !age) {
        results.Diet_Plan = 'Awaiting Input';
        results.Meal_Portion = 'Awaiting Input';
        results.Food_Type = 'Awaiting Input';
        results.Health_Advisory = 'Awaiting Input';
        return results;
    }

    const heightM = height / 100;
    const BMI = weight / (heightM * heightM);
    results.BMI = BMI.toFixed(2);

    if (BMI < 18.5) { results.BMI_Category = 'Underweight'; } 
    else if (BMI >= 18.5 && BMI < 25) { results.BMI_Category = 'Normal'; } 
    else if (BMI >= 25 && BMI < 30) { results.BMI_Category = 'Overweight'; } 
    else if (BMI >= 30) { results.BMI_Category = 'Obese'; }

    results.Diet_Plan = null;
    results.Meal_Portion = null;
    results.Food_Type = null;
    results.Health_Advisory = null;

    const applied = [];
    const sorted = [...RULES].sort((a,b) => a.priority - b.priority);
    const lastSetBy = {};

    const referencedResults = (s) => {
      if (!s) return [];
      const re = /results\.([A-Za-z0-9_]+)/g;
      const out = new Set(); let m;
      while ((m = re.exec(s)) !== null) out.add(m[1]);
      return Array.from(out);
    };

    for (const rule of sorted) {
        try {
            const condTrue = (typeof rule.condition === 'function') ? rule.condition(inputs, results) : (new Function('inputs','results', `return (${rule.conditionString});`))(inputs, results);
            if (condTrue) {
                const refs = referencedResults(rule.conditionString || '');
                const causedBy = [...new Set(refs.map(k => lastSetBy[k]).filter(Boolean))];
                const changed = [];
                Object.keys(rule.effects || {}).forEach(k => {
                    const prev = results[k];
                    const next = rule.effects[k];
                    if (prev !== next) {
                        results[k] = next;
                        lastSetBy[k] = rule.id;
                        changed.push(k);
                    }
                });

                applied.push({
                    id: rule.id,
                    description: rule.description,
                    conditionString: rule.conditionString || (typeof rule.condition === 'function' ? rule.condition.toString() : String(rule.condition)),
                    conditionHuman: rule.conditionHuman,
                    effects: rule.effects,
                    changed,
                    causedBy,
                    priority: rule.priority
                });
            }
        } catch (e) {
            console.warn(`Rule ${rule.id} failed:`, e);
        }
    }

    if (!results.Diet_Plan) results.Diet_Plan = 'Balanced';
    if (!results.Food_Type) results.Food_Type = 'Variety of Healthy Meals';
    if (!results.Meal_Portion) results.Meal_Portion = 'Normal Meals';
    if (!results.Health_Advisory) results.Health_Advisory = 'Safe';

    results._appliedRules = applied;
    return results;
};

// --- THE CONSULTATION APP (With Logic + New Design) ---

const ConsultationApp = ({ onExit, userName, userEmail }) => {
    // 1. STATE & LOGIC (Unchanged)
    const initialInputs = {
        height: '', weight: '', age: '',
        exercise_level: '', goal: '', 
        diet_restriction: '', health_condition: '', 
        stress_level: '', budget_level: '', 
        cooking_facility: ''
    };
    const [step, setStep] = useState(0);
    const [inputs, setInputs] = useState(initialInputs);
    const [error, setError] = useState('');
    const [feedbackMap, setFeedbackMap] = useState({}); 
    const [recipe, setRecipe] = useState(null);
    const [recipeLoading, setRecipeLoading] = useState(false);
    
    // Debug state kept for integrity
    const [showRuleDebug, setShowRuleDebug] = useState(false);

    const results = useMemo(() => consultSystem(inputs), [inputs]);

    const updateFeedback = (key, value) => {
        let feedback = '';
        if (key === 'height' || key === 'weight' || key === 'age') {
            const tempInputs = { ...inputs, [key]: value };
            const tempResults = consultSystem(tempInputs);
            if (key === 'age' && value) {
                feedback = INLINE_FEEDBACK.age(value);
            }
            if (tempResults.BMI && tempResults.BMI_Category && tempInputs.height > 0 && tempInputs.weight > 0 && tempInputs.age > 0) {
                 feedback = INLINE_FEEDBACK.bmi(tempResults.BMI_Category, tempResults.BMI);
            }
        } else if (INLINE_FEEDBACK[key] && INLINE_FEEDBACK[key][value]) {
            feedback = INLINE_FEEDBACK[key][value];
        }
        setFeedbackMap(prev => ({ ...prev, [key]: feedback }));
    };

    const handleInput = (key, val) => {
        setInputs(prev => ({ ...prev, [key]: val }));
        updateFeedback(key, val);
    };

    // Helper to check if current step is valid
    const isStepValid = () => {
        switch(step) {
            case 0: return inputs.height && inputs.weight && inputs.age;
            case 1: return inputs.goal;
            case 2: return inputs.exercise_level;
            case 3: return inputs.diet_restriction;
            case 4: return inputs.health_condition;
            case 5: return inputs.stress_level;
            case 6: return inputs.budget_level;
            case 7: return inputs.cooking_facility;
            default: return true;
        }
    };

    const nextStep = () => {
        setError('');
        if (!isStepValid()) {
            setError('Please complete all fields to continue.');
            return;
        }
        if (step < STEP_CONFIG.length - 1) {
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        setError('');
        setFeedbackMap({}); 
        if (step > 0) {
            setStep(step - 1);
        }
    };
    
    const goToStep = (index) => {
        if (index > step && !isStepValid()) {
             setError('Please complete this step first.');
             return;
        }
        setError('');
        setFeedbackMap({}); 
        setStep(index);
    }

    const generateRecipe = async () => {
        if (recipeLoading) return;
        setRecipeLoading(true);
        setRecipe(null);
        setError('');

        const systemPrompt = "You are a student nutritionist focused on practical, low-budget, fast recipes. You respond with kindness and empathy. Provide detailed, personalized nutrition advice based on the consultation data. Do not mention any rule numbers or internal logic references in your explanations - focus on natural, helpful advice.";

        const userPrompt = `Based on this consultation, provide a comprehensive nutrition plan:

        Consultation Details:
        * Diet Plan Focus: ${results.Diet_Plan}
        * Food Type Constraint: ${results.Food_Type}
        * Meal Portion Strategy: ${results.Meal_Portion}
        * Dietary Restrictions: ${inputs.diet_restriction}
        * Budget Level: ${inputs.budget_level}
        * Health Conditions: ${inputs.health_condition}
        * Stress Level: ${inputs.stress_level}
        * Cooking Facilities: ${inputs.cooking_facility}

        Please provide:
        1. Detailed explanation of the Diet Plan Focus (why this plan was chosen and how it benefits the user)
        2. Detailed explanation of the Meal Portion Strategy (why this approach and how to implement it)
        3. Detailed explanation of the Recommended Food Type (specific foods to focus on and why)
        4. ONE specific, easy-to-make student meal recipe (breakfast, lunch, or dinner) that fits all the above criteria

        Format the response clearly with headings for each section. For the recipe, include: Meal Name, 3-5 simple ingredients, and 3 steps for preparation.`;

        try {
            const text = await fetchGeminiText(userPrompt, systemPrompt);
            setRecipe(text);
        } catch (e) {
            console.error("Recipe generation failed:", e);
            setError(`Failed to generate recipe. ${e.message}`);
        } finally {
            setRecipeLoading(false);
        }
    };

    const finishSession = () => {
        saveSessionData(userName, userEmail, inputs, results, recipe);
        onExit();
    };

    const renderStep = (currentStep) => {
        switch (currentStep) {
            case 0:
                return (
                    <div className="space-y-6 animate-fade-in">
                        <div>
                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Your Baseline.</h3>
                        </div>
                        <div className="space-y-4">
                            <FeedbackBanner message={feedbackMap['age'] || feedbackMap['bmi']} />
                            <div className="grid sm:grid-cols-2 gap-4">
                                {['height', 'weight'].map(k => (
                                    <div key={k}>
                                        <label htmlFor={k} className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">
                                            {k} {k === 'height' ? '(cm)' : '(kg)'}
                                        </label>
                                        <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-100 transition-all">
                                            <input
                                                type="number"
                                                id={k}
                                                value={inputs[k]}
                                                onChange={(e) => handleInput(k, e.target.value)}
                                                onBlur={(e) => updateFeedback(k, e.target.value)}
                                                min="1"
                                                placeholder={k === 'height' ? "e.g. 175" : "e.g. 70"}
                                                className="w-full bg-transparent outline-none font-black text-2xl text-slate-800 placeholder-slate-200"
                                                required
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="max-w-sm">
                                <label htmlFor="age" className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">AGE</label>
                                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 focus-within:border-brand-500 focus-within:ring-4 focus-within:ring-brand-100 transition-all">
                                    <input
                                        type="number"
                                        id="age"
                                        value={inputs.age}
                                        onChange={(e) => handleInput('age', e.target.value)}
                                        onBlur={(e) => updateFeedback('age', e.target.value)}
                                        min="1"
                                        placeholder="e.g. 21"
                                        className="w-full bg-transparent outline-none font-black text-3xl text-slate-800 placeholder-slate-200"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 1:
                return (
                    <div className="space-y-4 animate-fade-in">
                        <CardSelector id="goal" label="What is your main goal?" options={CARD_OPTIONS.goal} selectedValue={inputs.goal} onChange={(k, v) => handleInput(k, v)} feedbackMessage={feedbackMap['goal']} />
                    </div>
                );
            case 2:
                return (
                    <div className="space-y-4 animate-fade-in">
                        <CardSelector id="exercise_level" label="How often do you exercise?" options={CARD_OPTIONS.exercise_level} selectedValue={inputs.exercise_level} onChange={(k, v) => handleInput(k, v)} feedbackMessage={feedbackMap['exercise_level']} />
                    </div>
                );
            case 3:
                return (
                    <div className="space-y-4 animate-fade-in">
                        <CardSelector id="diet_restriction" label="Do you have any dietary restrictions?" options={CARD_OPTIONS.diet_restriction} selectedValue={inputs.diet_restriction} onChange={(k, v) => handleInput(k, v)} feedbackMessage={feedbackMap['diet_restriction']} />
                    </div>
                );
            case 4:
                return (
                    <div className="space-y-4 animate-fade-in">
                        <CardSelector id="health_condition" label="Do you have any major health conditions?" options={CARD_OPTIONS.health_condition} selectedValue={inputs.health_condition} onChange={(k, v) => handleInput(k, v)} feedbackMessage={feedbackMap['health_condition']} />
                    </div>
                );
            case 5:
                return (
                    <div className="space-y-4 animate-fade-in">
                        <CardSelector id="stress_level" label="What is your current stress level?" options={CARD_OPTIONS.stress_level} selectedValue={inputs.stress_level} onChange={(k, v) => handleInput(k, v)} feedbackMessage={feedbackMap['stress_level']} />
                    </div>
                );
            case 6:
                return (
                    <div className="space-y-4 animate-fade-in">
                        <CardSelector id="budget_level" label="What is your average food budget?" options={CARD_OPTIONS.budget_level} selectedValue={inputs.budget_level} onChange={(k, v) => handleInput(k, v)} feedbackMessage={feedbackMap['budget_level']} />
                    </div>
                );
            case 7:
                return (
                    <div className="space-y-4 animate-fade-in">
                        <CardSelector id="cooking_facility" label="What is your access to cooking facilities?" options={CARD_OPTIONS.cooking_facility} selectedValue={inputs.cooking_facility} onChange={(k, v) => handleInput(k, v)} feedbackMessage={feedbackMap['cooking_facility']} />
                    </div>
                );
            case 8:
                const advisoryColorClass = results.Health_Advisory === 'Consult Doctor' ? 'bg-red-500' : results.Health_Advisory === 'Caution' ? 'bg-amber-500' : 'bg-brand-600'; 
                return (
                    <div className="space-y-8 animate-fade-in">
                        <div className="text-center mb-4">
                            <h3 className="text-3xl font-black text-slate-900 tracking-tighter">Your Strategy.</h3>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <ResultCard title="BMI Index" value={results.BMI || '--'} sub={results.BMI_Category} icon={Scale} colorClass="bg-slate-900" />
                            <ResultCard title="Plan Focus" value={results.Diet_Plan} sub={results.Food_Type} icon={Zap} colorClass="bg-brand-600" />
                            <ResultCard title="Advisory" value={results.Health_Advisory} sub={results.Meal_Portion} icon={HeartPulse} colorClass="bg-slate-800" />
                        </div>

                        <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-200">
                            <div className="flex flex-col items-center justify-center mb-8">
                                <h4 className="font-black text-xl flex items-center gap-2 tracking-tight text-slate-800 mb-6">
                                    <Sparkles className="w-5 h-5 text-brand-600" /> Digital Expert Logic
                                </h4>
                                <button 
                                    onClick={generateRecipe} 
                                    disabled={recipeLoading} 
                                    className={`
                                        w-full md:w-auto px-10 py-5 rounded-full font-bold text-lg shadow-xl shadow-brand-500/30 transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-3
                                        ${recipeLoading 
                                            ? 'bg-slate-300 text-slate-500 cursor-not-allowed' 
                                            : 'bg-gradient-to-r from-brand-600 to-brand-500 text-white hover:shadow-brand-500/50 hover:scale-[1.02] ring-4 ring-brand-100'
                                        }
                                    `}
                                >
                                    {recipeLoading ? (
                                        <>Thinking... <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white ml-2"></div></>
                                    ) : (
                                        <>Generate Meal Plan <ChefHat className="w-6 h-6" /></>
                                    )}
                                </button>
                            </div>
                            
                            {recipe && (
                                <div className="p-6 bg-white border border-slate-100 rounded-[1.5rem] shadow-sm mb-4 animate-fade-in">
                                    <pre className="whitespace-pre-wrap text-sm text-slate-600 font-medium font-sans leading-relaxed">{recipe}</pre>
                                </div>
                            )}

                            <h4 className="text-lg font-bold text-slate-900 mt-8 mb-4">Detailed Recommendations</h4>
                            <div className="space-y-3">
                                <ResultDetailBox title="Diet Plan Focus" value={results.Diet_Plan} category="Diet_Plan" detailKey={results.Diet_Plan} icon={Salad} accentColor="bg-brand-600" />
                                <ResultDetailBox title="Meal Portion Strategy" value={results.Meal_Portion} category="Meal_Portion" detailKey={results.Meal_Portion} icon={Clock} accentColor="bg-slate-800" />
                                <ResultDetailBox title="Recommended Food Type" value={results.Food_Type} category="Food_Type" detailKey={results.Food_Type} icon={Utensils} accentColor="bg-slate-900" />
                            </div>
                        </div>

                        {/* Debug Section */}
                        <div className="mt-4">
                            <div className="flex items-center justify-between">
                                <h5 className="font-semibold text-xs text-slate-400 uppercase tracking-widest">Applied Logic Rules ({results._appliedRules?.length || 0})</h5>
                                <div className="flex items-center space-x-2">
                                    <button onClick={() => setShowRuleDebug(prev => !prev)} className="px-3 py-1 rounded-md bg-gray-100 text-xs hover:bg-gray-200">{showRuleDebug ? 'Hide' : 'Show'} details</button>
                                </div>
                            </div>
                            <div className="mt-3 p-3 bg-gray-50 text-gray-500 text-xs border border-gray-100 rounded-lg">
                                {results._appliedRules && results._appliedRules.length ? (
                                    <div>
                                        <ul className="list-decimal pl-5 space-y-2">
                                            {results._appliedRules.map((r, i) => (
                                                <li key={i}>
                                                    <div className="font-medium">{r.id} — {r.description}</div>
                                                    {showRuleDebug && <div className="mt-1">If {r.conditionHuman || r.conditionString} → Then {Object.entries(r.effects).map(([k,v]) => `${k}: ${v}`).join('; ')}</div>}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <p>No rules applied.</p>
                                )}
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    // --- MAIN RENDER (FORCED STATIC FITTED) ---
    return (
        // 1. h-screen + overflow-hidden = NO WINDOW SCROLLBAR
        <div className="h-screen w-full bg-brand-900 relative overflow-hidden font-sans flex flex-col items-center justify-center">
            
            {/* Global Nav - Fixed to top */}
            <nav className="fixed top-0 w-full z-50 glass-nav">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={onExit}>
                        <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg"><Salad className="w-6 h-6" /></div>
                        <span className="text-xl font-extrabold tracking-tighter uppercase">Nutri<span className="text-brand-600">Student</span></span>
                    </div>
                    <button onClick={onExit} className="text-xs font-bold text-slate-500 hover:text-red-500 uppercase tracking-widest transition">Exit</button>
                </div>
            </nav>

            <Salad className="absolute -top-20 -right-20 w-[600px] h-[600px] text-white opacity-5 pointer-events-none animate-float" />

            {/* 2. THE CARD - FITTED SIZE (max-h-[85vh]) */}
            <div className="relative z-20 w-full max-w-7xl bg-white rounded-[3rem] shadow-2xl flex flex-col h-[calc(100vh-5rem)] mt-20 overflow-hidden">
                
                {/* 3. HEADER - Fixed (flex-shrink-0) */}
                <div className="bg-slate-900 px-4 py-4 border-b border-slate-800 flex-shrink-0">
                    <div className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2 text-white">
                            <Salad className="w-6 h-6 text-brand-500" />
                            <span className="font-black tracking-tight uppercase text-lg">NUTRISTUDENT</span>
                        </div>
                        <span className="bg-slate-800 text-slate-400 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border border-slate-700">Secure Session</span>
                    </div>
                    
                    <div className="flex items-center gap-4 overflow-x-auto pb-2 no-scrollbar">
                        {STEP_CONFIG.map((s, i) => (
                            <React.Fragment key={i}>
                                <button 
                                    onClick={() => i < step && setStep(i)}
                                    disabled={i >= step}
                                    className={`flex flex-col items-center flex-1 min-w-[60px] relative z-10 ${i < step ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
                                >
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border-2 transition-all duration-500 ${i <= step ? 'bg-brand-600 border-brand-600 text-white shadow-[0_0_20px_rgba(16,185,129,0.3)]' : 'border-slate-700 text-slate-600'}`}>
                                        {i < step ? <CheckCircle className="w-5 h-5" /> : <span className="text-sm font-bold">{i + 1}</span>}
                                    </div>
                                    <p className={`mt-3 text-[10px] font-black uppercase tracking-widest ${i === step ? 'text-brand-500' : 'text-slate-600'}`}>{s.title}</p>
                                </button>
                                {i < STEP_CONFIG.length - 1 && <div className={`h-0.5 flex-1 min-w-[20px] -mt-7 transition-colors duration-500 ${i < step ? 'bg-brand-600' : 'bg-slate-800'}`}></div>}
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* 4. BODY - SCROLLABLE INTERNAL (flex-1 overflow-y-auto) */}
                <div className="p-4 lg:p-8 flex-1 overflow-y-auto min-h-0 custom-scrollbar">
                    {error && (
                        <div className="p-4 mb-6 bg-red-50 border-l-4 border-red-500 text-red-900 rounded-r-lg flex items-start animate-fade-in">
                            <AlertCircle className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                            <div>
                                <p className="font-bold">Something went wrong</p>
                                <p className="text-sm">{error}</p>
                            </div>
                        </div>
                    )}
                    
                    {renderStep(step)}
                </div>

                {/* 5. FOOTER - Fixed (flex-shrink-0) */}
                <div className="flex items-center justify-between px-4 py-4 border-t border-slate-100 flex-shrink-0 bg-white">
                    <div>
                        {step > 0 && (
                            <button onClick={prevStep} className="font-black text-sm text-slate-400 hover:text-slate-600 transition flex items-center gap-2 group">
                                <ArrowLeft className="w-4 h-4" /> Back
                            </button>
                        )}
                    </div>
                    <div className="flex items-center gap-6">
                        {step < 8 ? (
                            <>
                                <button onClick={onExit} className="text-[10px] font-black text-slate-300 uppercase tracking-widest hover:text-red-400 transition flex items-center gap-2">
                                    Exit Session <div className="w-6 h-6 rounded-full border border-slate-200 flex items-center justify-center"><ArrowRight className="w-3 h-3 -rotate-45" /></div>
                                </button>
                                <button 
                                    onClick={nextStep} 
                                    disabled={!isStepValid()}
                                    className={`bg-brand-600 text-white px-12 py-4 rounded-full font-bold shadow-xl transition active:scale-95 flex items-center gap-3 group ${!isStepValid() ? 'opacity-50 cursor-not-allowed bg-slate-400' : 'hover:bg-brand-700'}`}
                                >
                                    Next <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                                </button>
                            </>
                        ) : (
                            <button onClick={finishSession} className="bg-slate-900 text-white px-12 py-3 rounded-full font-bold shadow-xl hover:bg-black transition active:scale-95">Finish Session</button>
                        )}
                    </div>
                </div>
            </div>
            
            {/* Global Footer (Fixed at very bottom) */}
            <div className="absolute bottom-2 w-full text-center z-10 hidden lg:block opacity-60">
                <p className="text-[9px] font-black text-white/50 uppercase tracking-[0.3em]">&copy; 2026 NutriStudent Systems</p>
            </div>
        </div>
    );
};

// --- NEW LANDING PAGE ---

// --- Landing Page (Updated with Admin Link) ---
const LandingPage = ({ onStart, onAdminClick }) => {
    return (
        <div className="page-transition min-h-screen font-sans text-slate-900 bg-white flex flex-col">
            <nav className="fixed top-0 w-full z-50 glass-nav">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer">
                        <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg"><Salad className="w-6 h-6" /></div>
                        <span className="text-xl font-extrabold tracking-tighter uppercase">Nutri<span className="text-brand-600">Student</span></span>
                    </div>
                    <button onClick={onStart} className="bg-slate-900 text-white px-7 py-3 rounded-full text-xs font-bold hover:bg-brand-600 transition shadow-lg active:scale-95">Free Consultation</button>
                </div>
            </nav>
            <header className="pt-48 pb-32 hero-pattern relative overflow-hidden flex-1">
                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
                    <div className="text-left animate-fade-in">
                        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest mb-10 border border-brand-200"><Award className="w-4 h-4" /> Professional Student Expert Logic</div>
                        <h1 className="text-7xl lg:text-8xl font-black leading-[0.85] text-slate-950 tracking-tighter mb-10">Fuel Your <br/> <span className="text-brand-600 italic">Potential.</span></h1>
                        <p className="text-xl text-slate-500 max-w-lg mb-14 font-medium leading-relaxed">Data-driven roadmap for students who demand more from their focus and recovery.</p>
                        <button onClick={onStart} className="bg-brand-600 text-white px-12 py-5 rounded-[2.5rem] font-bold text-lg hover:bg-brand-700 transition shadow-2xl shadow-brand-500/30 flex items-center gap-3 active:scale-95">Consult Free <ArrowRight className="w-5 h-5" /></button>
                    </div>
                    <div className="relative food-animation-container animate-slide-up hidden lg:flex">
                        <div className="absolute w-[450px] h-[450px] border-2 border-dashed border-brand-200 rounded-full animate-spin-slow opacity-40"></div>
                        <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-[12px] border-white shadow-2xl animate-float">
                            <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover" alt="Bowl" />
                        </div>
                        <div className="absolute top-10 left-20 bg-white p-4 rounded-2xl shadow-xl animate-float-slow border border-slate-50"><Salad className="w-8 h-8 text-brand-500" /></div>
                        <div className="absolute bottom-10 right-20 bg-white p-4 rounded-2xl shadow-xl animate-float-fast border border-slate-50"><Zap className="w-8 h-8 text-amber-500" /></div>
                    </div>
                </div>
            </header>
            <footer className="py-12 bg-transparent text-center border-t border-slate-50">
                <div className="flex items-center justify-center gap-2 mb-6">
                    <Salad className="w-10 h-10 text-brand-600" />
                    <span className="text-2xl font-black tracking-tighter uppercase text-slate-900">Nutri<span className="text-slate-400">Student</span></span>
                </div>
                <div className="flex justify-center gap-12 text-[11px] font-black text-slate-400 uppercase tracking-widest mb-8">
                    {/* THIS IS THE ADMIN BUTTON */}
                    <button onClick={onAdminClick} className="hover:text-brand-600 transition">Admin Access</button>
                    <a href="#" className="hover:text-brand-600 transition">Terms</a>
                    <a href="#" className="hover:text-brand-600 transition">Privacy</a>
                </div>
                <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">&copy; 2026 NutriStudent Systems</p>
            </footer>
        </div>
    );
};

// --- NEW COMPONENT: ADMIN LOGIN MODAL ---
const AdminLoginModal = ({ isOpen, onLogin, onCancel }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    if (!isOpen) return null;

    const handleLogin = () => {
        if (username === 'admin123' && password === 'admin123') {
            onLogin();
            setError('');
        } else {
            setError('Invalid credentials');
        }
    };

    return (
        <div className="fixed inset-0 bg-slate-900/90 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl relative border border-slate-200">
                <button onClick={onCancel} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><X className="w-5 h-5" /></button>
                <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mx-auto mb-3 text-white"><ShieldOff className="w-6 h-6" /></div>
                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">Admin Access</h3>
                </div>
                {error && <div className="mb-4 p-3 bg-red-50 text-red-600 text-xs font-bold rounded-lg text-center">{error}</div>}
                <div className="space-y-3">
                    <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="w-full bg-slate-50 p-3 rounded-lg border border-slate-200 focus:border-slate-900 outline-none text-sm font-bold" />
                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-slate-50 p-3 rounded-lg border border-slate-200 focus:border-slate-900 outline-none text-sm font-bold" />
                    <button onClick={handleLogin} className="w-full bg-slate-900 text-white py-3 rounded-lg font-bold text-sm hover:bg-black transition">Login Dashboard</button>
                </div>
            </div>
        </div>
    );
};

// --- UPDATED MAIN WRAPPER (Logic for Email + Login) ---
const App = () => {
    const [view, setView] = useState('landing'); 
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState(''); // New State for Email
    const [showLogin, setShowLogin] = useState(false); // New State for Admin Login Modal

    const handleNameSubmit = (name, email) => {
        setUserName(name);
        setUserEmail(email);
        setView('app');
    };

    // New Function to pass email to save
    const ConsultationWrapper = (props) => {
        // We inject the save logic here to keep ConsultationApp clean
        const handleFinish = () => {
             // We can access userName and userEmail from closure here
             // This is a trick to avoid modifying ConsultationApp too deeply
        }
        // Actually, let's just pass userEmail prop to ConsultationApp
        return <ConsultationApp {...props} userName={userName} userEmail={userEmail} />;
    };

    return (
        <>
            {view === 'landing' && (
                <LandingPage 
                    onStart={() => setView('nameInput')} 
                    onAdminClick={() => setShowLogin(true)} // Open Login Modal
                />
            )}
            
            {/* Admin Login Modal (Overlays Landing) */}
            <AdminLoginModal 
                isOpen={showLogin} 
                onCancel={() => setShowLogin(false)}
                onLogin={() => {
                    setShowLogin(false);
                    setView('admin');
                }}
            />

            {view === 'admin' && <AdminDashboard onExit={() => setView('landing')} />}
            
            {view === 'nameInput' && (
                <NameModal 
                    isOpen={true} 
                    onSubmit={handleNameSubmit} 
                    onCancel={() => setView('landing')} 
                />
            )}
            
            {view === 'app' && (
                <ConsultationApp 
                    onExit={() => setView('landing')} 
                    userName={userName}
                    userEmail={userEmail} // Pass email prop
                />
            )}
        </>
    );
};

export default App;
