            let galletas = 0;
            let monedas = 0;
            let multiplicadorClick = 1;
            let multiplicadorVenta = 1;
            let autoNivel = 0;
            let precioMejoraClick = 25;
            let precioMejoraAuto = 50;
            let precioMejoraVenta = 100;
            let nivelMejoraClick = 0;
            const maxNivelClick = 5;
            let nivelmejoraAuto = 0;
            const maxNivelAuto = 10;
            let nivelMejoraVenta = 0;
            const MaxNivelVenta = 3;

            
            let nivelActual = 1;
            const niveles = {
            1: { requisito: 0,     recompensa: "Fábrica Básica" },
            2: { requisito: 1000,  recompensa: "Nivel de Clic Mejorado +" },
            3: { requisito: 5000,  recompensa: "Auto-galletas activado" },
            4: { requisito: 10000, recompensa: "Nueva imagen de fábrica" },
            5: { requisito: 50000, recompensa: "Logros raros habilitados" },
            6: { requisito: 100000, recompensa: "Modo desafío" },
            7: { requisito: 250000, recompensa: "Skin legendaria" },
            8: { requisito: 1000000, recompensa: "Título: Maestro Galletero" }
            };

            const logros = {
            galletas100: false,
            galletas1000: false,
            galletas2500: false,    
            galletas5000: false,
            galletas10000: false,
            galletas50000: false,
            monedas500: false,
            monedas1500: false,
            monedas5000: false,
            clickX2: false,
            clickX128: false,
            galletas100000: false,
            galletas1000000: false,
            monedas10000: false,
            monedas50000: false,
            monedas100000: false,
            monedas1000000: false,    
            clickX256: false,
            clickX20: false,
            clickX25: false,
            clickX30: false,    
            };

            document.getElementById("ver-logros").addEventListener("click", () => {
              const lista = document.getElementById("lista-todos-logros");
              lista.innerHTML = ""; // Limpiar la lista antes de mostrar los logros
            const todos = { ...logros.comunes, ...logros.raros };
            for (const clave in todos) {
                if (todos[clave]) {
                // Si el logro está desbloqueado, lo mostramos}
                const item = document.createElement("li");
                item.textContent = "✅ " + clave.replace(/([a-z])([A-Z])/g, '$1 $2');
                item.style.marginBottom = "6px";
                item.style.color = logros.raros[clave] !== undefined ? "#8fffff" : "#ffd900";
                lista.appendChild(item);
                            const panel = document.getElementById("panel-todos-logros");
                    panel.style.display = "block";
                }
            }
            })

            function verificarLogros() { //Verificar los logros
            if (galletas >= 100 && !logros.galletas100) {
                mostrarLogro("🍪 ¡Primeros 100 galletones!");
                logros.galletas100 = true;

         } if (galletas >= 1000 && !logros.galletas1000) {
                mostrarLogro("🍪 ¡1000 galletones conseguidos!");
                logros.galletas1000 = true;
            }
            if (galletas >= 2500 && !logros.galletas2500) {
                mostrarLogro("🍪 ¡2,500 QUE RAPIDO!");
                logros.galletas2500 = true;
            }
            if (galletas >= 5000 && !logros.galletas5000) {
                mostrarLogro("🍪 ¡Se veria mejor como 5K!");
                logros.galletas5000 = true;
             }
            if (galletas >= 10000 && !logros.galletas10000) {
                mostrarLogro("🍪 ¡Galletas 10/10!");
                logros.galletas10000 = true;
             }
            if (galletas >= 50000 && !logros.galletas50000) {
                mostrarLogro("🍪 ¡como que 50K!");
                logros.galletas50000 = true;
            }
            if (galletas >= 100000 && !logros.galletas100000) {
                mostrarLogro("🍪 ¡¿100K?!");
                logros.galletas100000 = true;
            }
            if (galletas >= 1000000 && !logros.galletas1000000) {
                mostrarLogro("🍪 ¡¿REALMENTE ESTAS HACIENDO ESTO?!");
                logros.galletas1000000 = true;
            }
            if (monedas >= 500 && !logros.monedas500) {
                mostrarLogro("💰 ¡500 monedas conseguidas!");
                logros.monedas500 = true;
            }
            if (monedas >= 1500 && !logros.monedas1500) {
                mostrarLogro("💰 ¡1,500K o 1.5K!");
                logros.monedas1500 = true;
            }                   
            if (monedas >= 5000 && !logros.monedas5000) {
                mostrarLogro("💰 ¡5 Humildes K!");
                logros.monedas5000 = true;
            }       
            if (monedas >= 10000 && !logros.monedas10000) {
                mostrarLogro("💰 ¡PRIMERAS 10000 WOW!");
                logros.monedas10000 = true;
            }       
            if (monedas >= 50000 && !logros.monedas50000) {
                mostrarLogro("💰 ¡50K o 50mil!");
                logros.monedas50000 = true;
            }       
            if (monedas >= 100000 && !logros.monedas100000) {
                mostrarLogro("💰 ¡NO TE LO TOMES ENSERIO!");
                logros.monedas100000 = true;
            }       
            if (monedas >= 1000000 && !logros.monedas1000000) {
                mostrarLogro("💰 ¡HOMBRE DE NEGOCIOS!");
                logros.monedas1000000 = true;    
            }   
            if (multiplicadorClick >= 4 && !logros.clickX2) {
                mostrarLogro("🔥 ¡Multiplicador de click x2!");
                logros.clickX2 = true;
            }   
            if (multiplicadorClick >= 256 && !logros.clickX256) {
                mostrarLogro("🔥 ¡Multiplicador de click x256!");
                logros.clickX256 = true;
            }   
            if (multiplicadorClick >= 128 && !logros.clickX128) {
                mostrarLogro("🔥 ¡Multiplicador de click x128!");
                logros.clickX128 = true;
            }    
            if (multiplicadorClick >= 32 && !logros.clickX15) {
                mostrarLogro("🔥 ¡Multiplicador de click x32!");
                logros.clickX15 = true;
            }   
            if (multiplicadorClick >= 64 && !logros.clickX20) {
                mostrarLogro("🔥 ¡Multiplicador de click x64!");
                logros.clickX20 = true;   
            }   
   } 
                // mostras los logros
            function mostrarLogro(texto, raros = false) {
            const lista = document.getElementById("lista-logros");
            const yaExiste = Array.from(lista.children).some(item => item.textContent === texto);
            if (yaExiste) return;

            const item = document.createElement("li");
            item.textContent = texto; {
            item.className = "logro-item";
            lista.appendChild(item);
            item.style.animation = "desvanecerLogro 6s ease-out forwards";
            
            const sonido = document.getElementById("logroraro");
            sonido.currentTime = 0;
            sonido.play();
            }
            {
            setTimeout(() => {
            item.classList.add("desaparece");
            }, 2000);
            setTimeout(() => {
                item.remove();
            }, 5000);

            lanzarConfeti(); { 
                confeti.style.width = Math.random() * 8 + 6 + "px";
                confeti.style.height = confeti.style.width;
                confeti.style.animationDuration = (Math.random() * 1 + 1.5) + "s";
             lanzarFuego();
                confeti.style.left = Math.random() * window.innerWidth + "px";
                confeti.style.top = Math.random() * window.innerHeight + "px";
                confeti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
                document.body.appendChild(confeti);
                setTimeout(() => confeti.remove(), 2000);   
                    }
            }
            function lanzarConfeti() {
            for (let i = 0; i < 30; i++) {
                const confeti = document.createElement("div");
                confeti.className = "confeti";
                confeti.style.left = Math.random() * window.innerWidth + "px";
                confeti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
                document.body.appendChild(confeti);
                setTimeout(() => confeti.remove(), 2000);
            }
            function lanzarFuego() {
            const fuego = document.createElement("div");
            fuego.className = "fuego-logro";
            fuego.style.left = (window.innerWidth / 2 - 40) + "px"; // centrado horizontal
            fuego.style.top = "60px"; // posición vertical cerca del título

            document.body.appendChild(fuego);
            setTimeout(() => fuego.remove(), 800);
            }
            }

            
            } // Musica Principal  
            document.addEventListener("DOMContentLoaded", () => {
            const musica = document.getElementById("musica");

            document.getElementById("subirVolumen").addEventListener("click", () => {
                musica.volume = Math.min(1, musica.volume + 0.1);
            });

            document.getElementById("bajarVolumen").addEventListener("click", () => {
                musica.volume = Math.max(0, musica.volume - 0.1);
            });

            document.getElementById("resetVolumen").addEventListener("click", () => {
                musica.volume = 0.5; // Valor por defecto
            });
            });
            document.addEventListener("DOMContentLoaded", () => {
            const musica = document.getElementById("musica");

            document.body.addEventListener("click", () => {
                musica.play();
            }, { once: true });
            });
            
                // MEJORAS
            document.getElementById("mejoraclick").onclick = function() {
                    if (nivelMejoraClick < maxNivelClick && monedas >= precioMejoraClick) {
                    nivelMejoraClick++;
                    multiplicadorClick *= 2;
                    monedas -= precioMejoraClick;

                    precioMejoraClick = Math.floor(precioMejoraClick * 2.5);
                    this.textContent = "Mejora de Click (x" + multiplicadorClick + ") - " + precioMejoraClick + " monedas";
                    actualizar();

                    this.classList.add("clicker");
                    setTimeout(() => this.classList.remove("clicker"), 200);

                    const popSound = document.getElementById("accion");
                    popSound.currentTime = 0;
                    popSound.volume = 1;
                    popSound.play();
                }
            }
            
            document.getElementById("cookie").onclick = function(e){
                galletas += multiplicadorClick;
                actualizar();

                this.classList.add("clicked");
                 setTimeout(() => this.classList.remove("clicked"), 200);

                const popSound = document.getElementById("popSound");
                popSound.currentTime = 0;
                popSound.volume = 1;
                popSound.play();

                crearParticula(e);
            };
            function crearParticula(e) {
                const cookie = document.getElementById("cookie");
                const rect = cookie.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const particle = document.createElement("div");
                particle.className = "particle";
                particle.textContent = "+" + abreviarnumero(multiplicadorClick);
                particle.style.left = (x + rect.left - 12) + "px";
                particle.style.top = (y + rect.top - 12) + "px";

                document.body.appendChild(particle);
                setTimeout(() => particle.remove(), 800);
            }

            document.getElementById("vender").onclick = function() {
                if (galletas > 0) {
                    monedas += galletas * multiplicadorVenta;
                    galletas = 0;
                    actualizar();

                    this.classList.add("cash");
                    setTimeout(() => this.classList.remove("cash"), 200);

                    const popSound = document.getElementById("vendergalletas");
                    popSound.currentTime = 0;
                    popSound.volume = 1;
                    popSound.play();

                }
            }

          document.getElementById("mejoraauto").onclick = function() {
                 if (nivelmejoraAuto < maxNivelAuto && monedas >= precioMejoraAuto) {
                    nivelmejoraAuto++;
                    autoNivel++;
                    precioMejoraAuto = Math.floor(precioMejoraAuto * 2);
                    this.textContent = "Mejora de Auto (Auto +" + autoNivel + "/s) - " + precioMejoraAuto + " monedas";
                    actualizar();

                    this.classList.add("auto");
                    setTimeout(() => this.classList.remove("auto"), 200);

                    const popSound = document.getElementById("accion");
                    popSound.currentTime = 0;
                    popSound.volume = 1;
                    popSound.play();
                    
                }
            }
            setInterval(function() {
                if (autoNivel > 0) {
                    galletas += autoNivel * multiplicadorClick;
                    actualizar();
                }
            }, 1000);

            document.getElementById("mejoraventa").onclick = function() {
               if (nivelmejoraVenta < MaxNivelVenta && monedas >= precioMejoraVenta) {
                    nivelmejoraVenta++;

                    multiplicadorVenta *= 1.5;
                    precioMejoraVenta = Math.floor(precioMejoraVenta * 2.5);
                    this.textContent = "Mejora de Venta (x" + multiplicadorVenta + ") - " + precioMejoraVenta + " monedas";
                    actualizar(); 

                    this.classList.add("venta");
                    setTimeout(() => this.classList.remove("venta"), 200);

                    const popSound = document.getElementById("accion");
                    popSound.currentTime = 0;
                    popSound.volume = 1;
                    popSound.play();
                }
                
            }
            function verificarNivel() {
            const nivelInfo = niveles[nivelActual + 1];
                if (nivelInfo && galletas >= nivelInfo.requisito) {
                    nivelActual++;
                     maxNivelClick += 5;
                    mostrarNivelDesbloqueado(nivelInfo.recompensa);
            }
            function mostrarNivelDesbloqueado(recompensa) {
            const msg = document.createElement("div");
            msg.textContent = `🆙 ¡Subiste al nivel ${nivelActual}! Recompensa: ${recompensa}`;
            msg.style = "position:fixed; top:40px; left:50%; transform:translateX(-50%); background:#ffd900; padding:12px 18px; border-radius:8px; font-weight:bold; box-shadow:0 0 8px #000; color:#3d1f00; z-index:9999;";
            document.body.appendChild(msg);
            setTimeout(() => msg.remove(), 4000);
            }

        }
           

            function abreviarnumero(num) {
                const decimales = 2;
                if (num >= 1e21) return (num / 1e21).toFixed(2) + "eC";
                if (num >= 1e18) return (num / 1e18).toFixed(2) + "eB";
                if (num >= 1e15) return (num / 1e15).toFixed(2) + "eA";
                if (num >= 1e12) return (num / 1e12).toFixed(2) + "T";
                if (num >= 1e9) return (num / 1e9).toFixed(2) + "B";
                if (num >= 1e6) return (num / 1e6).toFixed(2) + "M";
                if (num >= 1e3) return (num / 1e3).toFixed(2) + "K";
                return num.toFixed(decimales); 
                
            }
            function abreviarEntero(num) {
                if (num >= 1e21) return Math.floor(num / 1e21) + "eC";
                if (num >= 1e18) return Math.floor(num / 1e18) + "eB";
                if (num >= 1e15) return Math.floor(num / 1e15) + "eA";
                if (num >= 1e12) return Math.floor(num / 1e12) + "T";
                if (num >= 1e9) return Math.floor(num / 1e9) + "B";
                if (num >= 1e6) return Math.floor(num / 1e6) + "M";
                if (num >= 1e3) return Math.floor(num / 1e3) + "K";
                return Math.floor(num); // ← sin decimales
            }


            function actualizar() {
                document.getElementById("contador").textContent = "Galletones: " + abreviarnumero(galletas);
                document.getElementById("monedas").textContent = "Monedas: " + abreviarnumero(monedas);
                document.getElementById("mejoraventa").textContent = "Mejora de Venta (x" + abreviarnumero(multiplicadorVenta) + ") - " + abreviarnumero(precioMejoraVenta) + " monedas";
                document.getElementById("mejoraclick").textContent = "Mejora de Click (x" + abreviarnumero(multiplicadorClick) + ") - " + abreviarnumero(precioMejoraClick) + " monedas";
                document.getElementById("mejoraauto").textContent = "Mejora de Auto (Nvl=" + abreviarEntero(autoNivel) + ") - " + abreviarnumero(precioMejoraAuto) + " monedas";
                verificarLogros();
                verificarNivel();
            }

            actualizar();