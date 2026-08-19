document.addEventListener('DOMContentLoaded', () => {
    const createBtn = document.getElementById('createGameBtn');
    const overlay = document.getElementById('editorOverlay');
    const closeBtn = document.getElementById('closeEditor');
    const playButtons = document.querySelectorAll('.btn-play');

    // Simulate Launcher Connection check
    const checkLauncher = () => {
        console.log("Searching for Blocksys Launcher on local port 4554...");
        return true;
    };

    createBtn.addEventListener('click', () => {
        if (checkLauncher()) {
            overlay.style.display = 'flex';
            
            // Simulate loading the Google editor
            setTimeout(() => {
                const originalText = document.querySelector('.editor-modal h3').textContent;
                document.querySelector('.editor-modal h3').innerHTML = "<i class='fab fa-google'></i> Cloud Editor Ready";
                document.querySelector('.progress').style.animation = 'none';
                document.querySelector('.progress').style.width = '100%';
                
                setTimeout(() => {
                    alert("Cloud Editor environment bootstrapped! In a production version, this would redirect you to the custom Google Maps / Blocky IDE. The 'AI Blockify' filter is currently active.");
                    overlay.style.display = 'none';
                }, 1500);
            }, 2500);
        }
    });

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });

    playButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const gameName = btn.parentElement.querySelector('h3').textContent;
            const icon = btn.innerHTML;
            btn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Launching...";
            
            setTimeout(() => {
                alert(`System call: blocksys-launcher://play?server=ploytoria_01&game=${encodeURIComponent(gameName)}`);
                btn.innerHTML = icon;
            }, 1000);
        });
    });

    // Visual interaction for the hero cube
    const cube = document.getElementById('rotatingCube');
    window.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.pageX) / 25;
        const y = (window.innerHeight / 2 - e.pageY) / 25;
        cube.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    });
});