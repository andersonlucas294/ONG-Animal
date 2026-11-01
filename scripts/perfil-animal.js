
const shareButton = document.getElementById('share-button');
shareButton.addEventListener('click', async () => {
    const shareData = { title: document.title, text: 'Conheça este animal disponível para adoção!', url: window.location.href };
    try {
        if (navigator.share) await navigator.share(shareData);
        else if (navigator.clipboard) {
            await navigator.clipboard.writeText(window.location.href);
            shareButton.textContent = 'Link copiado!';
            setTimeout(() => shareButton.textContent = 'Compartilhar', 2000);
        } else {
            window.prompt('Copie o link desta página:', window.location.href);
        }
    } catch (error) {
        if (error.name !== 'AbortError') window.prompt('Copie o link desta página:', window.location.href);
    }
});
