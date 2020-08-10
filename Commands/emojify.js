exports.run = async (nearby, message, args, nivel) => {
  const emojis = { "a": "🇦", "b": "🇧", "c": "🇨", "d": "🇩", "e": "🇪", "f": "🇫", "g": "🇬", "h": "🇭", "i": "🇮", "j": "🇯", "k": "🇰", "l": "🇱", "m": "🇲", "n": "🇳", "o": "🇴", "p": "🇵", "q": "🇶", "r": "🇷", "s": "🇸", "t": "🇹", "u": "🇺", "v": "🇻", "w": "🇼", "x": "🇽", "y": "🇾", "z": "🇿", "0": "0⃣", "1": "1⃣", "2": "2⃣", "3": "3⃣", "4": "4⃣", "5": "5⃣", "6": "6⃣", "7": "7⃣", "8": "8⃣", "9": "9⃣", "<": "◀", ">": "▶", "!": "❗", "?": "❓", "^": "🔼", "+": "➕", "-": "➖", "÷": "➗", ".": "🔘", "$": "💲", "#": "#️⃣", "*": "*️⃣" };
  const texto = args.join(" ");
  if(!texto) return nearby.emit("argumentosInvalidos", message, this.help);
        const string = texto.toLowerCase().split("");

        const emojied = string.map(ch => {
            if (/\s/g.test(ch)) {
                return "   ";
            } else if (emojis[ch]) {
                return ` ${emojis[ch]}`;
            } else return ` ${ch}`;
        })
        await message.erase();
        await message.send(emojied.join(""));
    
};

exports.configuracion = {
  activado: true,
  soloServidor: false,
  apodos: [],
  permiso: "Everyone"
};

exports.help = {
  nombre: "emojify",
  categoria: "Diversión",
  descripcion: "Convertir Texto En Emojis.",
  uso: "[p]emojify <texto>"
};