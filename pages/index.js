import Link from 'next/link'


export default function Home() {
return (
<div style={{padding:40,fontFamily:'Inter, Arial'}}>
<h1>GDG Website Builder — Dashboard (Starter)</h1>
<p>This is a tiny dashboard for the starter repo.</p>
<div style={{marginTop:20}}>
<Link href="/builder">Open Builder</Link>
</div>
</div>
)
}