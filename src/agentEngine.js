/**
 * Motor de Inteligência Artificial para Homenagens Musicais
 * Gera letras de música poéticas e prompts estruturados para Suno/Udio
 */

// Biblioteca de Versos Temáticos por Ocasião/Relação
const templates = {
  aniversario: {
    v1: (name) => `Hoje o dia amanheceu sorrindo, o calendário parou pra te saudar\nMais um ano de vida, um ciclo lindo, que a gente tem pressa de celebrar\nOlho pra você, ${name}, e vejo quanta luz você espalha por onde vai\nUm presente de Deus que o destino trouxe pra perto de mim.`,
    chorus: (name) => `Parabéns pra você, que torna o meu mundo muito mais feliz\nHoje a festa é sua, é tudo que eu sempre quis\nQue o seu sorriso continue a iluminar a nossa estrada\nMinha pessoa favorita, minha vida, minha alma metade.`,
    v2: () => `Passamos por tantas coisas juntos, risadas bobas e dias de superação\nCada conversa simples vira o assunto mais bonito do meu coração\nCelebrar a sua vida é agradecer por cada instante compartilhado\nO melhor lugar do mundo é aqui, bem do seu lado.`,
  },
  namorados: {
    v1: (name) => `Lembro do primeiro dia, o frio na barriga, o primeiro olhar\nVocê chegou de mansinho, ${name}, e fez o meu mundo inteirinho mudar\nSeu jeito doce, seu abraço que acalma a tempestade e cura a dor\nEu já sabia ali mesmo que tinha encontrado o meu grande amor.`,
    chorus: () => `E nessa canção que é nossa, coloco tudo que eu nunca soube dizer\nQue meu coração bate forte, compassado, só por você\nTe amo no silêncio do olhar, no riso solto, no amanhecer\nMinha escolha diária, meu porto seguro, meu viver.`,
    v2: () => `Os nossos planos para o futuro, as viagens que ainda vamos fazer\nDividir a rotina, o café da manhã, o pôr do sol com você\nCada pequeno detalhe se transforma em poesia quando estou contigo\nVocê é minha namorada, minha amante e meu melhor amigo.`,
  },
  casamento: {
    v1: (name) => `Olho pra você hoje e vejo o nosso altar desenhado na memória\nDuas vidas diferentes que decidiram escrever uma única história\nVocê, ${name}, com a sua paciência e esse sorriso que me faz flutuar\nÉ o sim mais bonito e seguro que eu escolhi declarar.`,
    chorus: () => `Unidos pelo destino, fortalecidos por um sentimento real\nO nosso amor é trilha sonora, é um laço eterno, especial\nNa saúde, na alegria, em cada passo que a gente der\nSerei o seu porto seguro, aconteça o que acontecer.`,
    v2: () => `Nossos caminhos se cruzaram e hoje formamos um só lar, uma só direção\nO som da sua voz acalma as batidas ansiosas do meu coração\nObrigado por ser meu abrigo, minha parceria de toda a vida\nA nossa união é a resposta de Deus, minha joia preferida.`,
  },
  mae: {
    v1: (name) => `Mãe, seu colo protetor sempre foi o meu abrigo mais seguro contra o vento\nSeu amor incondicional guia meus passos e acalma meu pensamento\nQueria poder cantar, ${name}, cada oração que você fez por mim no silêncio\nE te agradecer por toda a dedicação, carinho e paciência.`,
    chorus: () => `Mãe, seu amor é um farol que nunca se apaga no meu horizonte\nUma força divina, carinho puro que transborda da fonte\nEssa música é pra te dizer o que o peito não consegue guardar\nTe amo além da vida, obrigado por me ensinar a caminhar.`,
    v2: () => `Lembro do seu cheiro, da sua mão macia me dando direção\nSuas palavras de sabedoria gravadas no fundo do meu coração\nHoje eu canto pra homenagear a mulher mais guerreira e iluminada\nVocê é minha rainha, minha inspiração, minha mãe amada.`,
  },
  pais: {
    v1: (name) => `Pai, seus conselhos firmes e seu abraço forte me ensinaram o que é ser de verdade\nNa sua caminhada vejo o exemplo de honestidade, força e generosidade\nHoje canto pra você, ${name}, com orgulho que não cabe no peito\nObrigado por cada ensinamento e por me apoiar do seu jeito.`,
    chorus: () => `Pai, você é meu herói real, minha base e minha direção\nSeu exemplo guia meus passos, guardado no coração\nEssa homenagem em forma de música é pra te agradecer\nPor ser o melhor pai que o mundo poderia conhecer.`,
    v2: () => `As conversas na mesa, as risadas soltas e os momentos de aprendizado\nSei que não importa a distância, você sempre estará aqui do meu lado\nSua presença é força que me impulsiona a crescer e a sonhar\nUm porto seguro onde eu sei que sempre posso voltar.`,
  },
  revelacao: {
    v1: () => `O coração bate forte no compasso doce dessa linda espera\nUm mistério guardado que desabrocha como a primavera\nCada chute leve, cada plano traçado no silêncio do quarto\nEstamos prontos pra te receber com amor no olhar e no abraço.`,
    chorus: (name, extra) => `Será que é o menino ou menina que vem pra completar o nosso lar?\nO amor já é gigante, não vemos a hora de te ninar e te amar\nSeja bem-vindo, pequeno anjo, nossa maior promessa de felicidade\n${extra || 'O segredo mais lindo que vai encher nossa vida de verdade'}.`,
    v2: () => `Preparamos os brinquedos, os sapatinhos e o carinho mais profundo\nVocê é o nosso milagre, a luz que vai redesenhar o nosso mundo\nNão importa o nome ou a cor, o seu destino já está abençoado\nNosso bebê amado, por Deus você foi enviado.`,
  },
  generico: {
    v1: (name) => `Existem pessoas que parecem poesia escrita pelas mãos do criador\nQue chegam na nossa vida espalhando calmaria, amizade e amor\nVocê, ${name}, é exatamente assim: presença leve que faz tudo melhorar\nE hoje eu fiz essa música pra sua história eternizar.`,
    chorus: () => `Essa canção é pra você lembrar do quanto é especial e querido\nQue a sua jornada dá sentido a tudo que temos vivido\nObrigado por dividir o seu tempo, a sua verdade e o seu coração\nVocê merece o mundo e toda a nossa gratidão.`,
    v2: () => `Nossas memórias são tesouros guardados que o tempo não vai apagar\nAs risadas compartilhadas, os abraços apertados para acalmar\nQue a música seja um abraço em forma de melodia na sua rotina\nUma luz que te acompanha e o seu caminho ilumina.`,
  }
};

/**
 * Identifica o template ideal com base na ocasião
 */
function getTemplateKey(occasion) {
  const occ = (occasion || '').toLowerCase();
  if (occ.includes('aniversário') || occ.includes('aniversario')) return 'aniversario';
  if (occ.includes('namorado') || occ.includes('amor') || occ.includes('bodas')) return 'namorados';
  if (occ.includes('casamento') || occ.includes('noivado') || occ.includes('união')) return 'casamento';
  if (occ.includes('mãe') || occ.includes('mae')) return 'mae';
  if (occ.includes('pai') || occ.includes('pais')) return 'pais';
  if (occ.includes('revelação') || occ.includes('revelacao')) return 'revelacao';
  return 'generico';
}

/**
 * Função principal do Agente para sintetizar a Letra Personalizada
 */
export function generateLyrics(answers) {
  const name = answers.recipient_name || answers.name || 'Você';
  const tKey = getTemplateKey(answers.occasion);
  const temp = templates[tKey] || templates.generico;

  let lyrics = '';
  
  // Cabeçalho informativo
  lyrics += `// ==========================================================================\n`;
  lyrics += `// LETRA PERSONALIZADA GERADA PELO AGENTE DE COMPOSIÇÃO\n`;
  lyrics += `// Gênero: ${answers.genre || 'Pop Acústico'} | Estilo de Voz: ${answers.voice || 'Feminina'}\n`;
  lyrics += `// Homenageado(a): ${name} | Falar nome na música: ${answers.speak_name || 'Sim'}\n`;
  lyrics += `// Ocasião: ${answers.occasion || 'Homenagem'} | Vibe/Clima: ${answers.vibes || 'N/A'}\n`;
  lyrics += `// ==========================================================================\n\n`;

  // Verso 1
  lyrics += `[Verso 1]\n`;
  lyrics += temp.v1(name);
  lyrics += `\n\n`;

  // Pré-Refrão (incorporando história do cliente se houver)
  lyrics += `[Pré-Refrão]\n`;
  if (answers.story && answers.story.length > 10) {
    // Insere trecho da história do cliente formatado de maneira poética
    const lines = answers.story.split(/[.!?\n]+/).map(s => s.trim()).filter(s => s.length > 5);
    if (lines.length > 0) {
      lyrics += `Como você mesmo me contou, nesses momentos especiais:\n`;
      lyrics += `"${lines.slice(0, 2).join(',\n')}"\n`;
      lyrics += `Tudo isso faz parte do que construímos lado a lado...\n`;
    } else {
      lyrics += `Dividindo a história, guardando cada dia na memória\nConstruindo juntos o enredo da nossa própria vitória.\n`;
    }
  } else {
    lyrics += `Dividindo a história, guardando cada dia na memória\nConstruindo juntos o enredo da nossa própria vitória.\n`;
  }
  lyrics += `\n`;

  // Refrão
  lyrics += `[Refrão]\n`;
  if (tKey === 'revelacao' && answers.baby_name) {
    lyrics += temp.chorus(name, `Se for menina será ${answers.baby_name.split(',')[0] || 'nossa flor'}, se for menino será ${answers.baby_name.split(',')[1] || 'nosso príncipe'}`);
  } else {
    lyrics += temp.chorus(name);
  }
  lyrics += `\n\n`;

  // Verso 2
  lyrics += `[Verso 2]\n`;
  lyrics += temp.v2(name);
  lyrics += `\n\n`;

  // Ponte (incorporando sentimentos e qualidades informadas pelo cliente)
  lyrics += `[Ponte]\n`;
  if (answers.feelings && answers.feelings.length > 10) {
    const feelingsLines = answers.feelings.split(/[.!?\n]+/).map(s => s.trim()).filter(s => s.length > 5);
    if (feelingsLines.length > 0) {
      lyrics += `Guardo em mim o jeito que você me faz sentir:\n`;
      lyrics += `"${feelingsLines.slice(0, 2).join(',\n')}"\n`;
      lyrics += `Você é tudo isso e muito mais pra mim.\n`;
    } else {
      lyrics += `Seu carinho é abrigo na tempestade, sua força é inspiração\nCada batida minha é pra dizer o quanto te levo no coração.\n`;
    }
  } else {
    lyrics += `Seu carinho é abrigo na tempestade, sua força é inspiração\nCada batida minha é pra dizer o quanto te levo no coração.\n`;
  }
  lyrics += `\n`;

  // Refrão Final
  lyrics += `[Refrão]\n`;
  if (tKey === 'revelacao' && answers.baby_name) {
    lyrics += temp.chorus(name, `Se for menina será ${answers.baby_name.split(',')[0] || 'nossa flor'}, se for menino será ${answers.baby_name.split(',')[1] || 'nosso príncipe'}`);
  } else {
    lyrics += temp.chorus(name);
  }
  lyrics += `\n\n`;

  // Declaração Final / Outro (incorporando a mensagem final do cliente)
  lyrics += `[Outro]\n`;
  if (answers.message && answers.message.length > 5) {
    lyrics += `E para terminar, deixo essa mensagem do fundo da alma:\n`;
    lyrics += `"${answers.message}"\n`;
  } else {
    lyrics += `Essa música é o meu presente, a nossa marca no tempo...\nTe amo ontem, hoje e pra sempre.\n`;
  }
  lyrics += `(Para sempre, ${name}...)\n`;

  return lyrics;
}

/**
 * Função do Agente para sintetizar o Prompt do Suno/Udio
 */
export function generatePrompt(answers) {
  const genre = answers.genre || 'Pop Acústico';
  const voice = answers.voice || 'Feminina';
  const relation = answers.for_who || 'alguém especial';
  
  // Mapeamento de tags de áudio para guiar a IA de música (Suno/Udio)
  const genreTags = {
    'Pop Acústico': 'acoustic pop, warm acoustic guitar, intimate vocals, soft percussion, emotional, heartwarming',
    'Soul Romântico': 'romantic soul, slow R&B groove, warm electric piano, smooth brass chords, soulful expressive vocals, passionate',
    'Violão e Voz': 'solo acoustic guitar, fingerpicking, dry close vocals, organic, highly emotional, raw performance, quiet',
    'Pop Rock': 'pop rock, soft electric guitar crunch, steady drums, emotional building chorus, energetic yet sensitive, rock vocals',
    'Forró': 'forro, rhythmic accordion, triangle, soft zabumba beat, happy upbeat tempo, expressive vocals, Brazilian folk style',
    'Gospel': 'worship, piano led, atmospheric synth pads, backing choir, emotional build-up, inspiring, clean male or female vocals',
    'MPB': 'classic MPB, nylon string guitar, soft flute, light bossa-like percussion, poetic mood, expressive warm Portuguese vocals',
    'Música Eletrônica': 'ambient electronic pop, soft synth pads, downtempo electronic beat, dream pop, ethereal vocals, modern soundscape',
    'Samba': 'samba cancao, clean acoustic guitar, light pandeiro, cavaquinho, melancholic yet beautiful groove, warm samba vocals',
    'Pagode': 'pagode romantico, soft tan-tan, handclaps, cavaquinho, group backing vocals, smooth lead vocals, joyful romantic mood',
    'Pop': 'modern radio pop, clean production, synth bass, danceable beat, catchy hook, bright vocals',
    'Rap/Hip Hop': 'melodic hip hop, lo-fi beats, warm electric piano sample, deep sub bass, smooth flowing rap vocals, reflective',
    'Reggae': 'lovers rock reggae, offbeat guitar skank, smooth bassline, brass accents, positive vibing vocals, tropical feel',
    'Rock': 'alternative rock ballad, electric guitar chords, driving bass, dramatic drums, powerful passionate vocals',
    'Sertanejo': 'sertanejo universitario, acoustic guitar, soft accordion chords, romantic slow tempo, expressive vocals, country pop vibe'
  };

  const tags = genreTags[genre] || 'acoustic, melodic, emotional, warm vocals';
  const voiceStyle = voice.toLowerCase().includes('feminina') ? 'female vocalist' : 'male vocalist';
  const vibeStyle = answers.vibes ? `, vibe: ${answers.vibes.toLowerCase()}` : '';

  let prompt = '';
  prompt += `Style/Tags: ${tags}, ${voiceStyle}${vibeStyle}, emotional Portuguese vocals, high quality master, radio ready\n\n`;
  prompt += `Description: A highly emotional and personal custom song dedicated to the client's ${relation.toLowerCase()}. `;
  prompt += `The tone is ${answers.occasion?.toLowerCase() === 'aniversário' ? 'celebratory and warm' : 'deeply romantic and intimate'}. `;
  prompt += `Built around acoustic instruments and expressive vocals to showcase a personalized lyric in Portuguese.`;

  return prompt;
}

/**
 * Função completa executada pelo Agente no admin para gerar a ficha criativa do pedido
 */
export function runAiAgent(order) {
  return {
    generated_lyrics: generateLyrics(order),
    generated_prompt: generatePrompt(order),
    status: 'em_producao' // Atualiza status automaticamente ao iniciar produção
  };
}

/**
 * Formata as respostas do questionário em um prompt avançado para ChatGPT/Claude
 */
export function buildChatgptPrompt(answers) {
  const name = answers.recipient_name || answers.name || 'alguém';
  const speak = answers.speak_name || 'Sim';
  const relation = answers.for_who || 'Não informada';
  const occasion = answers.occasion || 'Não informada';
  const genre = answers.genre || 'Pop Acústico';
  const voice = answers.voice || 'Feminina';
  const vibes = answers.vibes || 'Não informada';
  const baby = answers.baby_name ? `\n- Nomes Bebê (Caso Revelação): ${answers.baby_name}` : '';
  const feelings = answers.feelings || 'Não informado';
  const story = answers.story || 'Não informado';
  const message = answers.message || 'Não informado';

  return `Escreva uma letra de música personalizada, emocionante e poética com base nas seguintes respostas do quiz:
- Homenageado: ${name} (Falar nome na música: ${speak})
- Relação: ${relation}
- Ocasião: ${occasion}
- Gênero Musical: ${genre} (Estilo de Voz: ${voice})
- Vibes/Clima: ${vibes}${baby}
- Sentimentos/O que torna especial: ${feelings}
- Histórias/Memórias marcantes: ${story}
- Mensagem Final: ${message}

Estruture a letra com as tags [Verso 1], [Pré-Refrão], [Refrão], [Verso 2], [Ponte], [Refrão Final] e [Outro]. Evite rimas clichês, crie versos fluidos e profundos em português brasileiro.`;
}

