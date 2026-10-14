"use client";
import { useState } from "react";
import { catalogGroups } from "@/lib/data/products";
export default function CatalogNavigation({visibleGroups}: {visibleGroups: string[]}) {
 const [active,setActive]=useState(visibleGroups[0]);
 return <nav className="cc-catalog-nav" aria-label="Product categories">{catalogGroups.filter(g=>visibleGroups.includes(g.id)).map(g=><a key={g.id} href={`#${g.id}`} onClick={()=>setActive(g.id)} aria-current={active===g.id?"location":undefined}>{g.label}</a>)}</nav>;
}
