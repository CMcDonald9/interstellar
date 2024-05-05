const multiplayer = ['Sharp Brush', 'Thick Brush', 'Woods Brush', 'Liquid Brush', 'Swift Brush', 'Simpler Times', 'Decoy Drizzle']

const zombies = ['Blood Brush', 'Rusted Brush', 'Spirit Brush', 'Brimstone Brush', 'Mummified Brush']

const camouflages = [...multiplayer, ...zombies].sort((a, b) => a.localeCompare(b))

export default camouflages.map((camouflage) => ({
  category: 'Two Tone Brushstrokes',
  name: camouflage,
  multiplayer: multiplayer.includes(camouflage),
  zombies: zombies.includes(camouflage),
}))
