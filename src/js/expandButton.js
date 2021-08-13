export function expandbutton(){
    const ps = document.querySelectorAll('p');
    const observer = new ResizeObserver(entries => {
    for (let entry of entries) {
        
            if (entry.target.classList.contains("truncated") || entry.target.classList.contains("collapsed") ) {
                entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'remove' : 'add']('collapsed');
                entry.target.classList[entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('truncated');
            }
            else {
                entry.target.classList[entry.target.scrollHeight === entry.contentRect.height ? 'add' : 'remove']('total');
                entry.target.classList[entry.target.scrollHeight < entry.target.clientHeight && entry.target.scrollHeight > entry.contentRect.height ? 'remove' : 'add']('truncated');
                entry.target.classList[entry.target.scrollHeight < entry.target.clientHeight && entry.target.scrollHeight > entry.contentRect.height ? 'add' : 'remove']('collapsed');
            }
        }
    });

    ps.forEach(p => {
        observer.observe(p);
    });
};