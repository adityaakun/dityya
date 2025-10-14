<!DOCTYPE html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Dityya | VarShade</title>
  <!-- OG tags for link preview -->
  <meta property="og:title" content="Dityya | VarShade" />
  <meta property="og:description" content="Hi, I'm Dityya. Check out my social links, tools, and WhatsApp connections." />
  <meta property="og:image" content="https://via.placeholder.com/1200x630/000a1a/00D4AA?text=VarShade" /> <!-- Updated placeholder for navy bg -->
  <meta property="og:url" content="https://varshade.netlify.app" />
  <meta property="og:type" content="website" />
  <!-- Twitter card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dityya | VarShade" />
  <meta name="twitter:description" content="Hi, I'm Dityya. Check out my social links, tools, and WhatsApp connections." />
  <meta name="twitter:image" content="https://via.placeholder.com/1200x630/000a1a/00D4AA?text=VarShade" />
  <!-- Font & Icon -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <style>
    /* CSS Variables for Themes - Adjusted for navy-blue photo match */
    :root {
      --bg-color: #000a1a; /* Deeper navy for exact screenshot depth */
      --text-color: #ffffff;
      --accent-color: #00D4AA;
      --card-bg: #0a1422; /* Bluer card bg to match photos */
      --border-radius: 14px; /* Slightly rounder for button/card edges in photos */
      --shadow: 0 4px 20px rgba(0, 212, 170, 0.15);
    }
    [data-theme="light"] {
      --bg-color: #f5f5f5;
      --text-color: #333333;
      --accent-color: #00D4AA;
      --card-bg: #ffffff;
    }
    
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {   
      font-family: 'Inter', sans-serif;   
      background: var(--bg-color);   
      color: var(--text-color);   
      line-height: 1.6;   
      overflow-x: hidden;  
      transition: background 0.3s ease, color 0.3s ease;  
    }
    
    /* Navbar - Subtle navy gradient for depth like photos */
    .navbar {   
      position: fixed; top: 0; width: 100%;   
      background: linear-gradient(to bottom, var(--card-bg), rgba(10,20,34,0.8)); /* Navy-tuned */
      backdrop-filter: blur(10px);   
      border-bottom: 1px solid var(--accent-color);   
      z-index: 1000;   
      padding: 0.5rem 0;  
    }
    .navbar-container {   
      max-width: 1200px; margin: 0 auto;   
      display: flex; justify-content: space-between; align-items: center; padding: 0 1rem;   
    }
    .navbar-logo { font-size: 1.5rem; font-weight: 700; color: var(--accent-color); text-decoration: none; }
    .navbar-menu { display: flex; gap: 1.5rem; }
    .navbar-link { color: var(--text-color); text-decoration: none; display: flex; align-items: center; gap: 0.5rem; font-weight: 500; transition: color 0.3s; }
    .navbar-link:hover { color: var(--accent-color); }
    .navbar-controls { display: flex; gap: 1rem; }
    .navbar-icon { background: none; border: none; color: var(--text-color); font-size: 1.2rem; cursor: pointer; padding: 0.5rem; border-radius: var(--border-radius); transition: all 0.3s; }
    .navbar-icon:hover { background: var(--accent-color); color: var(--bg-color); box-shadow: 0 0 10px rgba(0,212,170,0.5); }
    .mobile-only { display: none; }
    
    /* Main Content - Mobile-first narrow width, tuned for phone screenshots */
    .container {   
      max-width: 400px; margin: 80px auto 0; padding: 1rem;   
      text-align: center;  
    }
    .avatar {   
      width: 100px; height: 100px; border-radius: 50%;   
      margin-bottom: 1rem; border: 3px solid var(--accent-color);   
      object-fit: cover;  
    }
    h1 { font-size: 1.8rem; margin-bottom: 0.5rem; color: var(--accent-color); }
    .bio { font-size: 1rem; margin-bottom: 2rem; opacity: 0.9; }
    
    /* Categories - Cyan outlines and roundness like photos */
    .category { margin-bottom: 2rem; text-align: left; }
    .category h2 {   
      display: flex; align-items: center; gap: 0.5rem;   
      margin-bottom: 1rem; font-size: 1.2rem; color: var(--accent-color);   
    }
    .link-list { display: flex; flex-direction: column; gap: 0.5rem; }
    .link-button {   
      display: flex; align-items: center; gap: 0.75rem;   
      padding: 1rem; background: var(--card-bg);   
      border: 1px solid rgba(0, 212, 170, 0.4); /* Slightly stronger cyan for photo match */
      border-radius: var(--border-radius);   
      text-decoration: none; color: var(--text-color);   
      transition: all 0.3s; font-weight: 500;  
    }
    .link-button:hover {   
      border-color: var(--accent-color); box-shadow: var(--shadow), 0 0 15px rgba(0,212,170,0.3);   
      transform: translateY(-2px);  
    }
    .link-button i { color: var(--accent-color); min-width: 20px; }
    .link-button[data-note="soon"] { opacity: 0.6; cursor: not-allowed; }
    .link-button[data-note="soon"]:hover { border-color: rgba(0, 212, 170, 0.3); transform: none; box-shadow: none; }
    
    /* Music Player - Compacted and matched to screenshot (cassette, progress, controls) */
    .music-player {   
      background: var(--card-bg); border-radius: var(--border-radius);   
      padding: 1rem; margin: 2rem 0; box-shadow: var(--shadow); /* Reduced padding for mobile fit */
    }
    .cassette {   
      width: 60px; height: 60px; border-radius: 50%; /* Bulat seperti foto, sedikit lebih besar untuk fit */
      margin: 0 auto 0.8rem; display: block; animation: rotate 2s linear infinite paused;  
      object-fit: cover; /* Pastikan gambar fill bulat tanpa distorsi */
    }
    @keyframes rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    #cassette.playing { animation-play-state: running; }
    .player-info { margin-bottom: 0.8rem; font-weight: 600; font-size: 0.9rem; } /* Smaller text for compactness */
    .progress-container { margin-bottom: 0.8rem; }
    .progress-bar {   
      height: 4px; background: #333; border-radius: 2px; overflow: hidden;   
      margin-bottom: 0.5rem;  
    }
    .progress {   
      height: 100%; background: var(--accent-color); width: 0%; transition: width 0.1s;   
    }
    .time-display { display: flex; justify-content: space-between; font-size: 0.8rem; opacity: 0.8; }
    .player-controls { display: flex; justify-content: center; align-items: center; gap: 1rem; margin-bottom: 0.5rem; }
    .player-btn { background: none; border: none; color: var(--text-color); font-size: 1.1rem; cursor: pointer; padding: 0.4rem; border-radius: 50%; transition: all 0.3s; }
    .player-btn:hover { background: var(--accent-color); color: var(--bg-color); box-shadow: 0 0 10px rgba(0,212,170,0.5); }
    .player-speed {   
      background: var(--card-bg); border: 1px solid #333; color: var(--text-color);   
      padding: 0.4rem; border-radius: var(--border-radius); font-size: 0.8rem;  
    }
    
    /* Clock - Exact position and format like bottom of photos, adjusted for multiple times */
    .clock {   
      text-align: center; padding: 1rem;   
      background: var(--card-bg); border-radius: var(--border-radius);   
      margin: 2rem 0; font-size: 0.9rem; /* Slightly smaller for multi-time fit */
      display: flex; align-items: center; justify-content: center; gap: 0.5rem; flex-wrap: wrap; /* Allow wrap on small screens */
      box-shadow: var(--shadow);  
    }
    .clock span { color: var(--accent-color); } /* Highlight time zones */
    
    /* Footer */
    footer {   
      text-align: center; padding: 2rem 1rem;   
      background: var(--card-bg); margin-top: 2rem;  
    }
    .footer-links { display: flex; justify-content: center; gap: 1rem; margin-bottom: 1rem; }
    .footer-links a { color: var(--accent-color); font-size: 1.5rem; transition: color 0.3s; }
    .footer-links a:hover { color: var(--text-color); box-shadow: 0 0 10px rgba(0,212,170,0.5); }
    
    /* Mobile Responsiveness - Already phone-optimized, minor tweaks */
    @media (min-width: 768px) {   
      .container { max-width: 600px; }
      .navbar-menu { display: flex !important; }
      .mobile-only { display: none; }
      .clock { font-size: 1rem; } /* Larger on desktop */
    }
    @media (max-width: 480px) {   
      .navbar-menu { display: none; position: absolute; top: 100%; left: 0; width: 100%; background: var(--card-bg); flex-direction: column; padding: 1rem; }
      .navbar-menu.active { display: flex; }
      .link-button { padding: 0.9rem; } /* Touch-friendly on small screens */
      .clock { font-size: 0.8rem; padding: 0.8rem; } /* Compact on mobile */
    }
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar">
    <div class="navbar-container">
      <a href="index.html" class="navbar-logo">VarShade</a>
      <div class="navbar-menu" id="navbarMenu">
        <a href="index.html" class="navbar-link"><i class="fas fa-home"></i> Home</a>
        <a href="projects.html" class="navbar-link"><i class="fas fa-project-diagram"></i> Projects</a>
        <a href="share-code.html" class="navbar-link"><i class="fas fa-code"></i> Share Code</a>
      </div>
      <div class="navbar-controls">
        <button id="themeToggle" class="navbar-icon" aria-label="Toggle theme">
          <i class="fas fa-moon"></i>
        </button>
        <button id="musicToggle" class="navbar-icon" aria-label="Toggle music">
          <i class="fas fa-music"></i>
        </button>
        <button id="menuToggle" class="navbar-icon mobile-only" aria-label="Toggle menu">
          <i class="fas fa-bars"></i>
        </button>
      </div>
    </div>
  </nav>
  
  <!-- Main Content -->
  <main class="container">
    <img src="https://img1.pixhost.to/images/7013/619072900_file.jpg" alt="Profile picture of Dityya" class="avatar" />
    <h1>Dityya</h1>
    <p class="bio">Hi, I'm Dityya. Check out my social links, tools, and WhatsApp connections.</p>
    
    <!-- Social Media Section -->
    <div class="category">
      <h2><i class="fas fa-glasses"></i> Social Media</h2>
      <div class="link-list">
        <a href="https://www.instagram.com/anandaaditya498" class="link-button"><i class="fab fa-instagram"></i> Instagram</a>
        <a href="https://tiktok.com/@aditya.ananda45" class="link-button"><i class="fab fa-tiktok"></i> TikTok</a>
        <a href="https://t.me/vinzxxc" class="link-button"><i class="fab fa-telegram"></i> Telegram</a>
        <a href="https://threads.net/@" class="link-button" data-note="soon"><i class="fab fa-threads"></i> Threads</a>
        <a href="https://linkedin.com/in/" class="link-button" data-note="soon"><i class="fab fa-linkedin"></i> LinkedIn</a>
      </div>
    </div>

    <div class="category">
      <h2><i class="fas fa-qrcode"></i> VarShade QR Generator</h2>
      <div class="link-list">
        <a href="https://qr-gen-pro.netlify.app" class="link-button"><i class="fas fa-external-link-alt"></i> QR Generator</a>
      </div>
    </div>
    
    <!-- WhatsApp Section -->
    <div class="category">
      <h2><i class="fab fa-whatsapp"></i> WhatsApp</h2>
      <div class="link-list">
        <a href="https://wa.me/6283891813151?text=halo" target="_blank" class="link-button">
          <i class="fab fa-whatsapp"></i> Contact WhatsApp
        </a>
        <a href="https://wa.me/6282120627665?text=.menu" target="_blank" class="link-button">
          <i class="fab fa-whatsapp"></i> Bot WhatsApp
        </a>
        <a href="https://chat.whatsapp.com/KEcrlL57xjrGGRs8ii01zd" target="_blank" class="link-button">
          <i class="fab fa-whatsapp"></i> Group WhatsApp
        </a>
        <a href="https://whatsapp.com/channel/0029Vb2NYCr1CYoMnGK0nu12" target="_blank" class="link-button">
          <i class="fab fa-whatsapp"></i> Channel WhatsApp
        </a>
      </div>
    </div>

    <!-- Music Player -->
    <div class="music-player">
      <img src="https://img1.pixhost.to/images/6913/617698551_upload.jpg" alt="Cassette tape for music player" class="cassette" id="cassette" />
      <div class="player-info" id="music-info">🎧 No music playing</div>
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress" id="progress"></div>
        </div>
        <div class="time-display">
          <span id="current-time">0:00</span>
          <span id="duration">0:00</span>
        </div>
      </div>
      <div class="player-controls">
        <button id="prevBtn" class="player-btn"><i class="fas fa-step-backward"></i></button>
        <button id="playBtn" class="player-btn"><i class="fas fa-play"></i></button>
        <button id="nextBtn" class="player-btn"><i class="fas fa-step-forward"></i></button>
        <select id="speedControl" class="player-speed">
          <option value="0.5">0.5x</option>
          <option value="1" selected>1x</option>
          <option value="1.5">1.5x</option>
          <option value="2">2x</option>
        </select>
      </div>
    </div>

    <div class="clock" id="clock"><i class="fas fa-clock"></i> Loading Indonesian times...</div>
  </main>
  
  <footer>
    <div class="footer-links">
      <a href="https://wa.me/6283891813151" target="_blank"><i class="fab fa-whatsapp"></i></a>
      <a href="https://www.instagram.com/anandaaditya498" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="https://t.me/vinzxxc" target="_blank"><i class="fab fa-telegram"></i></a>
    </div>
    <p>&copy; 2025 VarShade. All rights reserved.</p>
  </footer>

  <audio id="audio" preload="auto"></audio>

  <script>
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
      const html = document.documentElement;
      const currentTheme = html.getAttribute('data-theme');
      html.setAttribute('data-theme', currentTheme === 'dark' ? 'light' : 'dark');
      themeToggle.querySelector('i').className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navbarMenu = document.getElementById('navbarMenu');
    menuToggle.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
    });

    // Music Player - Updated to match states: initial "No music", play "Now Playing", pause "Paused"
    const audio = document.getElementById('audio');
    const playBtn = document.getElementById('playBtn');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const progress = document.getElementById('progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    const musicInfo = document.getElementById('music-info');
    const cassette = document.getElementById('cassette');
    const speedControl = document.getElementById('speedControl');
    const musicToggle = document.getElementById('musicToggle');

    const playlist = [
      { title: 'The Cut Always Bleeds WILDFLOWER', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
      { title: 'Track 2', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
      { title: 'Track 3', src: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' }
    ];
    let currentTrack = 0;
    let isPlaying = false;
    let isLoaded = false; // Track if first load has happened

    // Initial state: No music
    musicInfo.textContent = '🎧 No music playing';
    progress.style.width = '0%';
    currentTimeEl.textContent = '0:00';
    durationEl.textContent = '0:00';

    // Load Track (only when first play)
    function loadTrack(index) {
      audio.src = playlist[index].src;
      musicInfo.textContent = `🎧 Now Playing: ${playlist[index].title}`;
      audio.load();
      currentTrack = index;
      isLoaded = true;
      if (isPlaying) audio.play();
    }

    // Play/Pause - Handle states like photos
    playBtn.addEventListener('click', () => {
      if (!isLoaded) {
        loadTrack(0); // Load first track on first click
        isPlaying = true;
        playBtn.innerHTML = '<i class="fas fa-pause"></i>'; // To pause icon
        cassette.classList.add('playing');
        audio.play().catch(() => {});
      } else if (isPlaying) {
        audio.pause();
        playBtn.innerHTML = '<i class="fas fa-play"></i>'; // Back to play
        cassette.classList.remove('playing');
        musicInfo.textContent = '🎧 Playback paused'; // Paused state like photo 3
      } else {
        audio.play().catch(() => {});
        playBtn.innerHTML = '<i class="fas fa-pause"></i>'; // To pause
        cassette.classList.add('playing');
        musicInfo.textContent = `🎧 Now Playing: ${playlist[currentTrack].title}`; // Back to playing
      }
      isPlaying = !isPlaying;
    });

    // Next/Prev - Reload track
    nextBtn.addEventListener('click', () => { 
      loadTrack((currentTrack + 1) % playlist.length); 
      if (!isPlaying) musicInfo.textContent = '🎧 No music playing'; // If paused, show paused/no after switch
    });
    prevBtn.addEventListener('click', () => { 
      loadTrack((currentTrack - 1 + playlist.length) % playlist.length); 
      if (!isPlaying) musicInfo.textContent = '🎧 No music playing';
    });

    // Progress Bar
    audio.addEventListener('timeupdate', () => {
      if (audio.duration && isLoaded) {
        const progressPercent = (audio.currentTime / audio.duration) * 100;
        progress.style.width = progressPercent + '%';
        currentTimeEl.textContent = formatTime(audio.currentTime);
        durationEl.textContent = formatTime(audio.duration);
      }
    });

    // Reset on end
    audio.addEventListener('ended', () => {
      isPlaying = false;
      playBtn.innerHTML = '<i class="fas fa-play"></i>';
      cassette.classList.remove('playing');
      progress.style.width = '0%';
      currentTimeEl.textContent = '0:00';
      musicInfo.textContent = '🎧 Playback paused';
    });

    // Speed Control
    speedControl.addEventListener('change', (e) => { 
      if (isLoaded) audio.playbackRate = parseFloat(e.target.value); 
    });

    // Format Time
    function formatTime(seconds) {
      const mins = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${mins}:${secs.toString().padStart(2, '0')}`;
    }

    // Music Toggle (Mute/Unmute)
    musicToggle.addEventListener('click', () => {
      if (isLoaded) {
        audio.muted = !audio.muted;
        musicToggle.querySelector('i').className = audio.muted ? 'fas fa-volume-mute' : 'fas fa-music';
      }
    });

    // Fixed Clock for Indonesian Time Zones (WIB, WITA, WIT) - Accurate UTC-based
    function updateClock() {
      const now = new Date();
      const wibTime = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta', hour12: false });
      const witaTime = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Makassar', hour12: false });
      const witTime = now.toLocaleTimeString('en-US', { timeZone: 'Asia/Jayapura', hour12: false });
      document.getElementById('clock').innerHTML = `<i class="fas fa-clock"></i> <span>WIB: ${wibTime}</span> | <span>WITA: ${witaTime}</span> | <span>WIT: ${witTime}</span>`;
    }
    updateClock();
    setInterval(updateClock, 1000);
  </script>
</body>
</html>
