export const printCV = (e) => {
    e?.preventDefault()

    const fileURL = '/CV INSANI AURA R.pdf'

    // Mencoba menggunakan trik iframe tersembunyi untuk auto-print
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    iframe.src = fileURL

    document.body.appendChild(iframe)

    // Buka tab baru sebagai fallback sekalian, memastikan dokumen terbuka
    // karena beberapa browser (seperti Chrome modern) akan memblokir 
    // perintah print dari iframe cross-origin atau PDF native viewer.
    window.open(fileURL, '_blank')

    iframe.onload = () => {
        setTimeout(() => {
            try {
                iframe.contentWindow.focus()
                iframe.contentWindow.print()
            } catch (error) {
                console.warn("Auto-print is blocked by browser security.", error)
            }
        }, 500)
    }
}
