# 🎮 Yu-Gi-Oh Jokenpo  

Projeto desenvolvido durante o **Bootcamp Santander Front-end 2025**, unindo a temática do universo **Yu-Gi-Oh!** com o clássico jogo de **Jokenpo (Pedra, Papel e Tesoura)**.  

O jogador enfrenta o computador em um duelo de cartas inspirado no estilo do anime, com cartas representando Pedra, Papel e Tesoura (adaptadas para monstros lendários de Yu-Gi-Oh).  

Link no Pages: https://luketes.github.io/Yugioh-Jokenpo/

---

## 🚀 Tecnologias utilizadas  

- **HTML5** → Estrutura e marcação  
- **CSS3** → Layout e estilização (`reset.css`, `buttons.css`, `containers_and_frames.css`, `main.css`)  
  - Cursors personalizados estilo Yu-Gi-Oh  
  - Background em vídeo com sobreposição de gradiente  
  - Efeitos de *hover* em cartas  
- **JavaScript (ES6)** → Lógica do jogo no arquivo `engine.js`  
  - Sistema de placar  
  - Sorteio e exibição de cartas  
  - Comparação de resultados Jokenpo (Vitória, Derrota ou Empate)  
  - Áudios de vitória/derrota/empate  
  - Controle do estado do jogo via objeto `state`  
- **Google Fonts** → Fonte retrô `Press Start 2P`  
- **Áudio e Vídeo** →  
  - Música de fundo (`egyptian_duel.mp3`)  
  - Efeitos sonoros (`Win.wav`, `Lose.wav`, `Draw.wav`)  
  - Vídeo de fundo (`yugi.mp4`)  
- **Favicon personalizado**  

---

## 🕹️ Funcionalidades  

✅ **Placar dinâmico** (Vitórias e Derrotas)  
✅ **Seleção de cartas** → Jogador escolhe cartas, computador sorteia aleatoriamente  
✅ **Campo de duelo** estilo Yu-Gi-Oh  
✅ **Botão de reinício** de duelo após cada rodada  
✅ **Áudio dinâmico** (música de fundo + efeitos de resultado)  
✅ **Hover nas cartas** → Mostra nome e tipo da carta no painel lateral  
✅ **Background em vídeo** com gradiente escuro para imersão  

---

## 📜 Destaques do código  

### 🔹 `engine.js`  
- Uso de um objeto **`state`** para armazenar todos os elementos do jogo (placar, cartas, botões, etc.).  
- Sistema de cartas criado com **array de objetos (`cardData`)** contendo:  
  - `id`, `name`, `type`, `img`, `WinOf`, `LoseOf`  
- Funções principais:  
  - `drawCards()` → Sorteia cartas para cada jogador  
  - `setCardsField()` → Executa o duelo (remove cartas antigas, mostra cartas, verifica vencedor)  
  - `checkDuelResults()` → Aplica regras do Jokenpo adaptado para Yu-Gi-Oh  
  - `updateScore()` → Atualiza placar na tela  
  - `playAudio()` → Reproduz efeitos sonoros conforme o resultado  
  - `resetDuel()` → Reinicia a rodada  

### 🔹 `main.css`  
- Cursor personalizado inspirado em Yu-Gi-Oh:  
  ```css
  body {
    cursor: url("../assets/cursor/yugicursor.png"), default; 
  }
  button, a, img:hover {
    cursor: url("../assets/cursor/yamiyugicursorGLOW.png"), auto; 
  }

- Fundo animado com vídeo e gradiente para imersão:
  ```css
  .bg-video::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      width: 100vw;
      background: linear-gradient(
          90deg, rgba(0,0,0,0.8) 0%,
          rgba(0,0,0,0.6) 50%,
          rgba(0,0,0,0.8) 100%
      );
  }
  ```
- Efeito hover nas cartas:
  ```css
 
  
  .card {
      transition: transform 0.2s;
  }
  .card:hover {
      transform: scale(1.2);
  }  
  ```
- Como rodar o projeto
  ```
  1) Clone este repositório
    
  git clone https://github.com/seu-usuario/yugioh-jokenpo.git
    
  2) Acesse a pasta do projeto
    
  cd yugioh-jokenpo
    
  3) Abra o arquivo index.html no navegador
  ```
