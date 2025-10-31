import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import Canvas from '../components/Canvas'
import { loadSite, saveSite } from '../utils/storage'


export default function BuilderPage(){
const [site, setSite] = useState(() => loadSite() || {
id: 'site_1',
title: 'Untitled site',
pages: [ { id: 'page_home', path: '/', sections: [] } ],
assets: []
})


// persist on change
useEffect(() => {
saveSite(site)
}, [site])


function handleAddElement(sectionId, elementType){
const page = site.pages[0]
const sections = page.sections.map(s => {
if(s.id !== sectionId) return s
const el = createDefaultElement(elementType)
return { ...s, children: [...s.children, el] }
})
const newSite = { ...site, pages: [{ ...page, sections }] }
setSite(newSite)
}


function handleAddSection(){
const page = site.pages[0]
const newSection = { id: `sec_${Date.now()}`, type:'section', settings:{ padding:'30px' }, children: [] }
const newSite = { ...site, pages: [{ ...page, sections: [...page.sections, newSection] }] }
setSite(newSite)
}


function handleDropOnPage(sectionId, elementType){
// if section doesn't exist, create it
const page = site.pages[0]
const existing = page.sections.find(s=>s.id===sectionId)
if(!existing){
// create new section then add
const newSection = { id: sectionId, type:'section', settings:{ padding:'20px' }, children: [ createDefaultElement(elementType) ] }
const newSite = { ...site, pages: [{ ...page, sections: [...page.sections, newSection] }] }
setSite(newSite)
} else {
handleAddElement(sectionId, elementType)
}
}


function updateElement(sectionId, elementId, patch){
const page = site.pages[0]
const sections = page.sections.map(s=>{
if(s.id !== sectionId) return s
return { ...s, children: s.children.map(c => c.id===elementId ? { ...c, ...patch } : c) }
})
setSite({ ...site, pages: [{ ...page, sections }] })
}
}

function removeElement(sectionId, elementId){
const page = site.pages[0]
const sections = page.sections.map(s=> s.id===sectionId ? { ...s, children: s.children.filter(c => c.id !== elementId) } : s)
setSite({ ...site, pages: [{ ...page, sections }] })
}


function clearSite(){
const newSite = { ...site, pages: [{ ...site.pages[0], sections: [] }] }
setSite(newSite)
}

return (
<div style={{display:'flex',height:'100vh'}}>
<Sidebar onAddSection={handleAddSection} />
<Canvas site={site} onDropElement={handleDropOnPage} onUpdateElement={updateElement} onRemoveElement={removeElement} />
<aside style={{width:260,padding:16,borderLeft:'1px solid #eee'}}>
<h3>Site JSON (preview)</h3>
<pre style={{fontSize:12,overflow:'auto',height:400,background:'#f8fafc',padding:8}}>{JSON.stringify(site,null,2)}</pre>
<div style={{marginTop:12}}>
<button onClick={() => { const blob = new Blob([JSON.stringify(site)], {type:'application/json'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download='site.json'; a.click(); }} style={{padding:8,background:'#10b981',color:'#fff',borderRadius:6}}>Download JSON</button>
<button onClick={clearSite} style={{marginLeft:8,padding:8,background:'#ef4444',color:'#fff',borderRadius:6}}>Clear</button>
</div>
</aside>
</div>
)



function createDefaultElement(type){
const id = `${type}_${Date.now()}`
switch(type){
case 'header': return { id, type:'header', props:{ text:'Welcome to my site', level:1 }, style:{} }
case 'text': return { id, type:'text', props:{ text:'This is a paragraph. Double-click to edit.' }, style:{} }
case 'image': return { id, type:'image', props:{ src:'https://via.placeholder.com/800x300', alt:'placeholder' }, style:{} }
default: return { id, type:'text', props:{ text:'New element' }, style:{} }
}
}