export default function TagBar({tags, active, onToggle}:{tags:string[],active:string[],onToggle:(t:string)=>void}) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(t => (
        <button key={t}
          onClick={()=>onToggle(t)}
          className={`px-3 py-1 rounded-full border ${active.includes(t) ? 'bg-white text-black' : 'border-neutral-600 text-neutral-300'}`}>
          {t}
        </button>
      ))}
    </div>
  );
}
