const DB_NAME='aba_prontuario_offline';
const DB_VERSION=1;
let db;
function openDB(){return new Promise((resolve,reject)=>{const req=indexedDB.open(DB_NAME,DB_VERSION);req.onupgradeneeded=e=>{const d=e.target.result;for(const s of ['patients','notes','schedule','events']){if(!d.objectStoreNames.contains(s)){const store=d.createObjectStore(s,{keyPath:'id',autoIncrement:true});store.createIndex('createdAt','createdAt');}}};req.onsuccess=()=>{db=req.result;resolve(db)};req.onerror=()=>reject(req.error);});}
function tx(store,mode='readonly'){return db.transaction(store,mode).objectStore(store)}
function all(store){return new Promise((res,rej)=>{const r=tx(store).getAll();r.onsuccess=()=>res(r.result||[]);r.onerror=()=>rej(r.error)})}
function get(store,id){return new Promise((res,rej)=>{const r=tx(store).get(Number(id));r.onsuccess=()=>res(r.result);r.onerror=()=>rej(r.error)})}
function save(store,data){return new Promise((res,rej)=>{const obj={...data,updatedAt:new Date().toISOString()};if(!obj.createdAt)obj.createdAt=obj.updatedAt;const r=tx(store,'readwrite').put(obj);r.onsuccess=()=>res({...obj,id:r.result});r.onerror=()=>rej(r.error)})}
function del(store,id){return new Promise((res,rej)=>{const r=tx(store,'readwrite').delete(Number(id));r.onsuccess=()=>res();r.onerror=()=>rej(r.error)})}
async function exportDB(){const data={version:DB_VERSION,exportedAt:new Date().toISOString(),patients:await all('patients'),notes:await all('notes'),schedule:await all('schedule'),events:await all('events')};return data}
async function importDB(data){for(const store of ['patients','notes','schedule','events']){if(!Array.isArray(data[store]))continue;for(const item of data[store])await save(store,item)}}
