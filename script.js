/**
 * AURELIA FINE ART PHOTOGRAPHY — INTERACTIVE LOGIC
 * Features:
 * - 18 Curated Masterworks with In-Depth Photographic Stories & Expedition Notes
 * - Fine Art Print Sizes, Medium Specifications, and Edition Pricing
 * - Responsive CSS Grid Rendering with Starting Prices & Story Previews
 * - Category Filters & Live Search Query
 * - Fullscreen Lightbox with Exhibition Details Tabs:
 *     1. ✦ The Story Behind the Shot (Photographer quote, narrative, expedition conditions)
 *     2. 🏷️ Print Sizes & Acquisition Pricing (Interactive size selector, medium details, COA note, Acquire button)
 *     3. ⚙️ Camera Gear & Technical EXIF
 * - Seamless Contact Form Integration (Pre-populates Artwork Name, Size, & Price)
 * - Navigation: Next/Prev, Keyboard Arrows, Escape, Touch Swipe, Thumbnail Filmstrip
 * - Favorite System with Persistent Local Storage & Toast Alerts
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // PHOTOGRAPHY DATASET (18 Curated Artworks with Pricing, Sizes, & Stories)
  // ==========================================================================
  const photographs = [
    {
      id: 1,
      title: "Whispers of the Misty Pines",
      category: "nature",
      location: "Banff National Park, Canada",
      camera: "Sony Alpha 7R V",
      lens: "FE 24-70mm F2.8 GM II",
      settings: "1/250s • f/5.6 • ISO 100",
      description: "Low-hanging morning mist meandering through ancient pine groves in the Canadian Rockies.",
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=700&q=80",
      alt: "Foggy green alpine pine forest in Banff Canada under moody dawn skies",
      likes: 184,
      tall: false,
      startingPrice: "$450",
      edition: "Limited Edition of 25 Worldwide",
      editionsRemaining: 6,
      storyQuote: "The forest breathes when humanity is still asleep.",
      story: "We set out on foot at 3:45 AM beneath a moonless autumn sky, navigating the frostbitten trail along Moraine Valley. At 6:15 AM, as the first twilight filtered through the peaks, a thick thermal inversion mist rose off the glacier, winding through the ancient pines like slow-moving silk. I held my breath for nearly twenty minutes, waiting for that single beam of amber sunlight to illuminate the ridge while keeping the valley veiled in dreamlike quiet. It was a reminder that nature reveals her secrets only to those who embrace the chill and the silence.",
      expedition: ["🏔️ Elevation: 1,880m", "🌡️ Conditions: -3°C Frost", "⏱️ 3.5h Night Ascent", "🌲 Ancient Fir Canopy"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Photo Rag 308gsm Cotton Paper", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$450", rawPrice: 450, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on German Etching Baryta", framing: "Museum Shadowbox Matte & Solid Oak Frame", price: "$850", rawPrice: 850, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount + Di-Bond Aluminum", framing: "Floating German Ash Hardwood Frame", price: "$1,750", rawPrice: 1750, popular: false }
      ]
    },
    {
      id: 2,
      title: "Celestial Aurora Borealis",
      category: "nature",
      location: "Tromsø Fjord, Norway",
      camera: "Hasselblad H6D-100c",
      lens: "HC 24mm F3.5",
      settings: "6.0s • f/2.8 • ISO 1600",
      description: "Electric emerald curtains of solar wind dancing over jagged snow-covered arctic peaks.",
      url: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=700&q=80",
      alt: "Vibrant green Northern Lights aurora borealis shimmering above snowy mountain landscape in Norway",
      likes: 312,
      tall: true,
      startingPrice: "$520",
      edition: "Limited Edition of 15 Worldwide",
      editionsRemaining: 3,
      storyQuote: "A direct transmission from the sun painted across the frozen north.",
      story: "Standing on the frozen shores of Ersfjordbotn in northern Norway, the mercury had plunged to -22°C. My tripod legs had frozen into the tidal ice, and my shutter fingers were numbing despite heated mittens. Suddenly, at 11:40 PM, the solar storm peaked. The night sky erupted in vivid ribbons of emerald and violet fire, undulating like ocean waves across the arctic heavens. The medium-format sensor captured the surreal reflection on the black glass surface of the fjord. In that moment of overwhelming cosmic scale, time ceased to exist.",
      expedition: ["🌌 Arctic Fjord Latitude 69°N", "🌡️ Conditions: -22°C Deep Arctic Freeze", "⏱️ 5h Midnight Vigil", "❄️ Tidal Glacial Ice"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Photo Rag Metallic 340gsm", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$520", rawPrice: 520, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Metallic Luster Pigment with Luminescent Depth", framing: "Museum Shadowbox Matte & Matte Black Wood", price: "$980", rawPrice: 980, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "Lumachrome UltraHD Acrylic Face Mount", framing: "Floating Brushed Gunmetal Aluminum Frame", price: "$2,100", rawPrice: 2100, popular: false }
      ]
    },
    {
      id: 3,
      title: "Cascading Emerald Falls",
      category: "nature",
      location: "Columbia River Gorge, USA",
      camera: "Sony Alpha 7R V",
      lens: "FE 16-35mm F2.8 GM",
      settings: "1.5s • f/11 • ISO 50",
      description: "Silken bridal cascades dropping into an emerald basin encased in mossy volcanic basalt.",
      url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=700&q=80",
      alt: "Long exposure waterfall tumbling through lush green moss canyon bridge",
      likes: 156,
      tall: false,
      startingPrice: "$420",
      edition: "Limited Edition of 30 Worldwide",
      editionsRemaining: 9,
      storyQuote: "Water doesn't carve stone through sheer power, but through patient devotion.",
      story: "Reaching this moss-draped canyon required wading thigh-deep into near-freezing mountain runoff with thirty pounds of waterproof camera cases. The air was saturated with mist so thick that the front element required wiping every three seconds. I used a 6-stop neutral density filter to smooth the turbulent cascade into a translucent silk ribbon, contrasting with the ancient basalt rocks blanketed in millennia-old emerald moss. The arched wooden bridge above provided the perfect architectural counterweight to nature’s raw kinetic energy.",
      expedition: ["💧 Canyon Gorge Basin", "🌡️ Conditions: 98% Relative Humidity", "⏱️ 1.5s Long Exposure", "🌉 Historic Masonry Bridge"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Bamboo 290gsm Eco FineArt", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$420", rawPrice: 420, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on Velvet Fine Art Cotton", framing: "Museum Shadowbox Matte & Walnut Frame", price: "$790", rawPrice: 790, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount + Aluminum Core", framing: "Handcrafted Deep Profile Walnut Frame", price: "$1,650", rawPrice: 1650, popular: false }
      ]
    },
    {
      id: 4,
      title: "Mirror of the Alpine Crest",
      category: "nature",
      location: "Yosemite Valley, USA",
      camera: "Leica M11",
      lens: "Summilux-M 35mm f/1.4",
      settings: "1/400s • f/8.0 • ISO 100",
      description: "Golden hour glow striking sheer granite monoliths perfectly mirrored in still river waters.",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
      alt: "Yosemite mountain peaks reflecting cleanly into still glass-like lake waters at sunset",
      likes: 247,
      tall: false,
      startingPrice: "$460",
      edition: "Limited Edition of 25 Worldwide",
      editionsRemaining: 5,
      storyQuote: "Earth gazing into its own reflection across the mirror of eternity.",
      story: "It took four consecutive autumn journeys to Yosemite to catch this exact convergence of elements: completely unruffled surface water, autumn foliage turning to burnished gold, and high cirrus clouds catching the final incandescent blush of sunset over the granite monoliths. I stood motionless at the river's edge for over three hours, praying the evening wind wouldn't stir the surface. For precisely ninety seconds before dusk, the Merced River turned into flawless liquid glass, reflecting the mountains in sacred symmetry.",
      expedition: ["🏔️ Yosemite Valley Floor", "🌡️ Conditions: Still Air, 12°C", "⏱️ 3h Riverbank Wait", "🍂 Peak Autumn Color"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Photo Rag 308gsm", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$460", rawPrice: 460, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Museum Archival Cotton Baryta 315gsm", framing: "Museum Shadowbox Matte & Natural Maple Frame", price: "$870", rawPrice: 870, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount", framing: "Floating Natural White Oak Frame", price: "$1,800", rawPrice: 1800, popular: false }
      ]
    },
    {
      id: 5,
      title: "The Monarch's Gaze",
      category: "wildlife",
      location: "Serengeti National Park, Tanzania",
      camera: "Sony Alpha 1",
      lens: "FE 400mm F2.8 GM OSS",
      settings: "1/1250s • f/2.8 • ISO 200",
      description: "An intimate portrait of an apex predator bathing in the fleeting amber radiance of sundown.",
      url: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&w=700&q=80",
      alt: "Close up majestic portrait of an adult African lion in warm golden sunset light",
      likes: 429,
      tall: true,
      startingPrice: "$580",
      edition: "Limited Edition of 15 Worldwide",
      editionsRemaining: 2,
      storyQuote: "Unforgiving majesty etched into centuries of golden amber memory.",
      story: "We tracked this magnificent pride leader across the central Serengeti plains for three days as the dry season was drawing to a close. On the final evening, having completed a territory perimeter sweep, he climbed atop a weathered granite kopje to survey his lands. As the setting African sun dropped below the acacia silhouette, bathing the savannah in crimson and gold dust, he turned his head and stared straight through my 400mm lens. The amber depth of his eyes carried the ancient, untamed memory of the wilderness.",
      expedition: ["🦁 Central Serengeti Plains", "🌡️ Conditions: 34°C Golden Dust", "⏱️ 3-Day Safari Tracking", "🔭 400mm f/2.8 Prime"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Museum Etching 350gsm Heavyweight", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$580", rawPrice: 580, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on Hahnemühle Baryta FB", framing: "Museum Matte & Matte Black African Wenge Frame", price: "$1,100", rawPrice: 1100, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount on Dibond", framing: "Museum Floating Ebony Hardwood Frame", price: "$2,400", rawPrice: 2400, popular: false }
      ]
    },
    {
      id: 6,
      title: "Autumn Fox in Solitude",
      category: "wildlife",
      location: "Hokkaido, Japan",
      camera: "Canon EOS R5",
      lens: "RF 100-500mm F4.5-7.1L",
      settings: "1/800s • f/5.6 • ISO 400",
      description: "A wild red fox pausing amid morning frost, its amber coat contrasting with autumnal foliage.",
      url: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=700&q=80",
      alt: "Red fox sitting peacefully on an autumn field looking sideways",
      likes: 218,
      tall: false,
      startingPrice: "$450",
      edition: "Limited Edition of 25 Worldwide",
      editionsRemaining: 7,
      storyQuote: "A whisper of fire moving gently through the frozen grasses of dawn.",
      story: "In the remote birch woodlands of eastern Hokkaido, the arrival of autumn brings a bittersweet quiet. I spent six hours sitting motionless against a frost-covered larch trunk, my breath misting in the crisp morning chill. The wild red fox emerged from the golden ferns without a sound, his thick winter coat gleaming like polished copper. He paused just fifteen paces away, cocked his ears toward the rustling wind, and acknowledged my presence with quiet, fearless curiosity.",
      expedition: ["🦊 Eastern Hokkaido Forest", "🌡️ Conditions: -2°C Autumn Frost", "⏱️ 6 Hours Motionless Vigil", "🍂 Japanese Silver Grass"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Torchon 285gsm FineArt Paper", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$450", rawPrice: 450, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on Cotton Rag 310gsm", framing: "Museum Shadowbox Matte & Warm Cherry Wood Frame", price: "$850", rawPrice: 850, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount", framing: "Floating Japanese Hinoki Cypress Frame", price: "$1,750", rawPrice: 1750, popular: false }
      ]
    },
    {
      id: 7,
      title: "Chromatic Plumage",
      category: "wildlife",
      location: "Monteverde Cloud Forest, Costa Rica",
      camera: "Sony Alpha 7R V",
      lens: "FE 200-600mm F5.6-6.3 G",
      settings: "1/1000s • f/6.3 • ISO 800",
      description: "Iridescent emerald and ruby feathers illuminated by dappled light filtering through the canopy.",
      url: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1555169062-013468b47731?auto=format&fit=crop&w=700&q=80",
      alt: "Close-up of radiant green and red parrot plumage in lush tropical jungle",
      likes: 194,
      tall: false,
      startingPrice: "$430",
      edition: "Limited Edition of 25 Worldwide",
      editionsRemaining: 8,
      storyQuote: "When nature decides to paint with the uninhibited spectrum of pure light.",
      story: "Deep within the high-canopy cloud forests of Costa Rica, torrential afternoon rains give way to brief, ethereal shafts of humid light. Anchored 120 feet up a strangler fig observation platform, I waited for the scarlet macaws to return to their roost. When this bird landed on a mossy branch, the angled sun hit each feather barb like a prism, separating light into brilliant reds, yellows, and iridescent greens. It felt less like a bird and more like an animated brushstroke of pure tropical vibrancy.",
      expedition: ["🦜 120ft Forest Canopy", "🌡️ Conditions: 95% Humidity", "⏱️ High-Speed Telephoto", "🌿 Cloud Forest Flora"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Photo Rag Satin 310gsm", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$430", rawPrice: 430, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on Metallic Lustre Paper", framing: "Museum Shadowbox Matte & Minimalist Satin Frame", price: "$820", rawPrice: 820, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount", framing: "Floating Deep Charcoal Aluminum Frame", price: "$1,700", rawPrice: 1700, popular: false }
      ]
    },
    {
      id: 8,
      title: "The Silent Sentinel",
      category: "wildlife",
      location: "Cotswolds, United Kingdom",
      camera: "Nikon Z9",
      lens: "NIKKOR Z 400mm f/4.5 VR S",
      settings: "1/640s • f/4.5 • ISO 640",
      description: "A barn owl perched quietly on a mossy drystone wall as dusk settles over the English countryside.",
      url: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1579202673506-ca3ce28943ef?auto=format&fit=crop&w=700&q=80",
      alt: "Barn owl with intense gaze perched silently at twilight",
      likes: 275,
      tall: true,
      startingPrice: "$480",
      edition: "Limited Edition of 20 Worldwide",
      editionsRemaining: 4,
      storyQuote: "Ghost of the twilight meadows, watching over centuries of quiet stone.",
      story: "Barn owls are creatures of the twilight, hunting on ghost-silent wings over ancient limestone meadows. For twelve consecutive evenings, I scouted this abandoned 18th-century stone barn. Just as the pale blue dusk swallowed the last amber horizon, she glided down onto the mossy drystone wall. With her heart-shaped face turned toward the meadow, she stood perfectly composed against the indigo sky. Her gaze felt timeless, as if guarding memories centuries old.",
      expedition: ["🦉 Cotswold Meadow Wall", "🌡️ Conditions: Blue Hour Twilight, 8°C", "⏱️ 12-Day Evening Scout", "🌾 Ancient English Pasture"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle William Turner 310gsm Textured Cotton", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$480", rawPrice: 480, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on FineArt Baryta 325gsm", framing: "Museum Shadowbox Matte & Antique Ash Frame", price: "$890", rawPrice: 890, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount", framing: "Floating Oxidized Bronze Hardwood Frame", price: "$1,850", rawPrice: 1850, popular: false }
      ]
    },
    {
      id: 9,
      title: "Cliffside Pastel Haven",
      category: "travel",
      location: "Manarola, Cinque Terre, Italy",
      camera: "Fujifilm GFX 100S",
      lens: "GF 32-64mm F4 R LM WR",
      settings: "2.0s • f/11 • ISO 100",
      description: "Warm lights blooming across centuries-old pastel dwellings stacked dramatically above the Ligurian Sea.",
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=700&q=80",
      alt: "Cinque Terre Italy coastal cliffside colorful village at dusk with ocean waves",
      likes: 388,
      tall: false,
      startingPrice: "$490",
      edition: "Limited Edition of 25 Worldwide",
      editionsRemaining: 5,
      storyQuote: "Where human dwellings embrace the wild precipice of the eternal sea.",
      story: "Perched on a rocky promontory over the churning Ligurian surf, I waited for the magical fifteen minutes when the twilight ambient sky matches the warm tungsten glow of domestic village windows. The scent of salt spray and espresso drifted from the harbor below. As the 2-second exposure recorded the turquoise foam swirling against the cliffs, the pastel facades of Manarola ignited into a warm, glowing constellation against the Mediterranean blue.",
      expedition: ["🌊 Coastal Ligurian Precipice", "🌡️ Conditions: Sea Mist, 18°C", "⏱️ 2s Blue Hour Long Exposure", "🏠 12th-Century Cliff Town"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Photo Rag 308gsm", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$490", rawPrice: 490, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on German Baryta 315gsm", framing: "Museum Shadowbox Matte & Coastal White Ash Frame", price: "$920", rawPrice: 920, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount", framing: "Floating Italian Walnut Hardwood Frame", price: "$1,950", rawPrice: 1950, popular: false }
      ]
    },
    {
      id: 10,
      title: "Path of Eternal Wisdom",
      category: "travel",
      location: "Kyoto, Japan",
      camera: "Leica SL2",
      lens: "Vario-Elmarit-SL 24-70mm f/2.8",
      settings: "1/160s • f/4.0 • ISO 200",
      description: "A serene stone promenade lined with glowing lanterns leading toward Yasaka Pagoda at twilight.",
      url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=700&q=80",
      alt: "Historic traditional street in Kyoto Japan leading up to iconic wooden pagoda",
      likes: 341,
      tall: true,
      startingPrice: "$520",
      edition: "Limited Edition of 20 Worldwide",
      editionsRemaining: 3,
      storyQuote: "The quiet path where yesterday and tomorrow walk together in harmony.",
      story: "To experience historic Gion and Higashiyama without the bustling crowds of modern tourism, one must arrive at 4:30 AM before the first monks begin their morning bells. Rain had fallen throughout the night, leaving the cobblestones slick like wet obsidian. As blue morning twilight broke, the hanging paper lanterns glowed amber, leading the eye upward to the iconic five-tiered pagoda of Yasaka. The stillness was palpable—a direct journey into ancient Edo-period tranquility.",
      expedition: ["🏮 Higashiyama Historic Quarter", "🌡️ Conditions: Post-Rain Cobblestone, 10°C", "⏱️ 4:30 AM Dawn Walk", "🏯 Yasaka Pagoda Alignment"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Awagami Washi Kozo Natural 110gsm Japanese Paper", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$520", rawPrice: 520, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on Japanese Mulberry FineArt Paper", framing: "Museum Shadowbox Matte & Dark Charcoal Wood Frame", price: "$960", rawPrice: 960, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount", framing: "Floating Charred Shou Sugi Ban Wood Frame", price: "$2,050", rawPrice: 2050, popular: false }
      ]
    },
    {
      id: 11,
      title: "Ripples of the Sahara",
      category: "travel",
      location: "Merzouga, Morocco",
      camera: "Sony Alpha 7R V",
      lens: "FE 70-200mm F2.8 GM OSS II",
      settings: "1/500s • f/8.0 • ISO 100",
      description: "Infinite geometric wind crests sculpted into golden dunes by the desert breeze.",
      url: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=700&q=80",
      alt: "Dramatic golden sand dunes of Sahara desert in Morocco with striking light and shadows",
      likes: 290,
      tall: false,
      startingPrice: "$460",
      edition: "Limited Edition of 25 Worldwide",
      editionsRemaining: 6,
      storyQuote: "An ocean of golden earth sculpted by the breath of the desert wind.",
      story: "Riding camels three hours into the Erg Chebbi dunes under the relentless North African sun brought us to an untouched sea of golden sand where no footprints existed. At sunset, the fierce wind subsided into a gentle breeze that carved micro-ripples across the razor-sharp dune crests. The low sun cast dramatic razor-line shadows across the ridges, transforming the desert into an abstract symphony of gold and deep umber. It is a landscape sculpted strictly by wind and gravity.",
      expedition: ["🐪 Erg Chebbi Deep Dunes", "🌡️ Conditions: 38°C Desert Heat", "⏱️ Sunset Raking Light", "🏜️ Untouched Dune Ridgeline"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle German Etching 310gsm Warm Tone", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$460", rawPrice: 460, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on Warm Cotton Rag", framing: "Museum Shadowbox Matte & Terra-Cotta Ash Frame", price: "$860", rawPrice: 860, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount", framing: "Floating Deep Gold Leaf Beveled Frame", price: "$1,800", rawPrice: 1800, popular: false }
      ]
    },
    {
      id: 12,
      title: "Azure Horizon at Dawn",
      category: "travel",
      location: "Bora Bora, French Polynesia",
      camera: "Sony Alpha 7 IV",
      lens: "FE 24-105mm F4 G OSS",
      settings: "1/320s • f/7.1 • ISO 100",
      description: "Crystal clear aquamarine waters gently lapping against powdery white sands beneath swaying palms.",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
      alt: "Tropical turquoise ocean beach with clear calm blue water under sunny sky",
      likes: 265,
      tall: false,
      startingPrice: "$450",
      edition: "Limited Edition of 25 Worldwide",
      editionsRemaining: 8,
      storyQuote: "The purest turquoise on Earth, waking beneath a coral sky.",
      story: "Standing knee-deep in the shallow lagoon at 5:45 AM, the water was so clear that small rays swam fearlessly around my tripod legs. There was not a single ripple on the surface. The sunrise cast soft pastel lavender and coral tones across Mount Otemanu in the distance, before turning the water into an electric turquoise that defies belief. This photograph captures the fragile, pristine vulnerability of our world's coral atolls.",
      expedition: ["🏝️ South Pacific Outer Reef", "🌡️ Conditions: 27°C Lagoon Water", "⏱️ Dawn Tide Alignment", "🥥 Untamed White Coral Sand"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Photo Rag Ultra Smooth 305gsm", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$450", rawPrice: 450, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on Lustre FineArt Paper", framing: "Museum Shadowbox Matte & Bleached White Ash Frame", price: "$840", rawPrice: 840, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount", framing: "Floating Pure Satin White Gallery Frame", price: "$1,750", rawPrice: 1750, popular: false }
      ]
    },
    {
      id: 13,
      title: "The Golden Helix",
      category: "architecture",
      location: "Vatican City, Rome",
      camera: "Hasselblad X2D 100C",
      lens: "XCD 21mm F4",
      settings: "1/60s • f/5.6 • ISO 400",
      description: "Hypnotic double-helix spiral staircase combining Renaissance engineering with modern geometry.",
      url: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
      alt: "Overhead view looking down an ornate spiral staircase with bronze railings",
      likes: 410,
      tall: true,
      startingPrice: "$540",
      edition: "Limited Edition of 15 Worldwide",
      editionsRemaining: 2,
      storyQuote: "Mathematics and bronze spiraling gracefully toward infinity.",
      story: "Securing private after-hours access to the Vatican Museums allowed thirty unhurried minutes inside the famous Bramante-inspired spiral staircase. Looking straight down from the top balustrade, the architectural mathematics revealed itself as a mesmerizing Fibonacci spiral of bronze, stone, and golden ambient uplighting. The flowing human figures below provided the essential human scale to this monumental architectural wonder.",
      expedition: ["🏛️ Vatican Museum Interior", "🌡️ Conditions: Private Curated Access", "⏱️ 100MP Precision Geometry", "🌀 Dual Helix Bronze Balustrade"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Museum Etching 350gsm", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$540", rawPrice: 540, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on German Baryta FB", framing: "Museum Shadowbox Matte & Antique Gilt Bronze Frame", price: "$990", rawPrice: 990, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount on Aluminum", framing: "Floating Italian Sculpted Ebony Frame", price: "$2,150", rawPrice: 2150, popular: false }
      ]
    },
    {
      id: 14,
      title: "Monoliths of Modernity",
      category: "architecture",
      location: "Hudson Yards, New York City",
      camera: "Fujifilm GFX 100 II",
      lens: "GF 23mm F4 R LM WR",
      settings: "1/250s • f/8.0 • ISO 100",
      description: "Ascending glass towers converging toward the clouds, echoing human ambition and symmetry.",
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=700&q=80",
      alt: "Low angle perspective looking up at towering glass and steel modern skyscrapers",
      likes: 232,
      tall: false,
      startingPrice: "$480",
      edition: "Limited Edition of 20 Worldwide",
      editionsRemaining: 6,
      storyQuote: "Reflective monoliths speaking the bold language of steel and ambition.",
      story: "Lying flat on my back on the cold granite plaza of Hudson Yards at mid-morning with an ultra-wide prime lens, I watched the steel and glass monoliths pierce through the low-hanging cloud deck. The reflections of neighboring skyscrapers bouncing off mirror facades created an illusion of infinite vertical depth. It speaks to humanity’s relentless impulse to build toward the stars, captured here in razor-sharp glass and steel geometry.",
      expedition: ["🏙️ Manhattan Plaza Ground Zero", "🌡️ Conditions: Overcast High Key, 14°C", "⏱️ Tilt-Shift Perspective Fix", "📐 102MP Architectural Detail"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Photo Rag Bright White 310gsm", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$480", rawPrice: 480, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on Metallic Chrome Luster", framing: "Museum Shadowbox Matte & Brushed Steel Frame", price: "$890", rawPrice: 890, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount", framing: "Floating Minimalist Matte Black Frame", price: "$1,900", rawPrice: 1900, popular: false }
      ]
    },
    {
      id: 15,
      title: "Sacred Vault of Light",
      category: "architecture",
      location: "Seville Cathedral, Spain",
      camera: "Sony Alpha 7R V",
      lens: "FE 12-24mm F2.8 GM",
      settings: "1/80s • f/4.0 • ISO 800",
      description: "Beams of sacred morning light piercing gothic stained-glass windows onto ribbed stone vaults.",
      url: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=700&q=80",
      alt: "Stunning cathedral interior with dramatic sunbeams cutting through gothic stone arches",
      likes: 315,
      tall: false,
      startingPrice: "$510",
      edition: "Limited Edition of 20 Worldwide",
      editionsRemaining: 4,
      storyQuote: "Sunlight transformed into tangible, celestial pillars of the divine.",
      story: "At precisely 10:15 AM during the vernal equinox, the morning sun reaches the ideal altitude to strike the high clerestory windows of Seville Cathedral. Dust motes and ancient incense rising through the nave illuminated the massive sunbeams, transforming invisible air into tangible pillars of golden celestial light cutting through stone rib vaults. For ten minutes, the grand gothic cathedral was filled with quiet, breathtaking awe.",
      expedition: ["⛪ Gothic Cathedral Nave", "🌡️ Conditions: Equinox Morning Angle", "⏱️ 10-Minute Ephemeral Beam", "🕊️ Ancient Incense Motes"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Albrecht Dürer 210gsm Traditional Watercolour", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$510", rawPrice: 510, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on Warm Tone Cotton Baryta", framing: "Museum Shadowbox Matte & Ornate Spanish Walnut Frame", price: "$940", rawPrice: 940, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount", framing: "Floating Hand-Antiqued Gold Hardwood Frame", price: "$2,000", rawPrice: 2000, popular: false }
      ]
    },
    {
      id: 16,
      title: "Reflections of Grace",
      category: "portraits",
      location: "Milan Studio, Italy",
      camera: "Hasselblad H6D-100c",
      lens: "HC 100mm F2.2",
      settings: "1/160s • f/2.8 • ISO 64",
      description: "Fine art editorial portrait studying facial harmony, subtle gaze, and delicate chiaroscuro lighting.",
      url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=700&q=80",
      alt: "Fine art editorial portrait of a woman with natural beauty and elegant gaze",
      likes: 462,
      tall: true,
      startingPrice: "$550",
      edition: "Limited Edition of 15 Worldwide",
      editionsRemaining: 3,
      storyQuote: "A soul at peace with silence, captured in soft northern Italian light.",
      story: "Shot during Milan Fashion Week in an 18th-century palazzo converted into a natural light studio. Eschewing heavy artificial strobes, we worked solely with the soft, diffused northern light pouring through tall arched windows. Rather than directing aggressive posing, I asked Elena to think about the quiet memories of her childhood in Lake Como. The result is an authentic, contemplative portrait that honors texture, natural skin tones, and gentle chiaroscuro grace.",
      expedition: ["🎨 Milanese Historic Palazzo", "🌡️ Conditions: Pure North-Facing Window Light", "⏱️ Medium Format 100MP Sensor", "🎭 Zero Artificial Strobes"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Photo Rag 308gsm Pure Cotton", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$550", rawPrice: 550, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on FineArt Pearl 285gsm", framing: "Museum Shadowbox Matte & Minimalist Satin Black Frame", price: "$1,050", rawPrice: 1050, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount on Aluminum", framing: "Floating Italian Deep Black Stained Oak Frame", price: "$2,250", rawPrice: 2250, popular: false }
      ]
    },
    {
      id: 17,
      title: "Warmth of the Golden Hour",
      category: "portraits",
      location: "Lisbon, Portugal",
      camera: "Leica M11",
      lens: "Noctilux-M 50mm f/0.95 ASPH",
      settings: "1/2000s • f/1.4 • ISO 64",
      description: "Unfiltered candid portrait captured during sundown over Lisbon's terracotta rooftops.",
      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=700&q=80",
      alt: "Cinematic portrait of a man smiling in warm sunset light",
      likes: 289,
      tall: false,
      startingPrice: "$440",
      edition: "Limited Edition of 25 Worldwide",
      editionsRemaining: 7,
      storyQuote: "An unposed second of warmth that feels like coming home.",
      story: "Wandering through the steep cobbled alleys of Alfama in Lisbon, the late afternoon sun bounced off the whitewashed walls, bathing the narrow street in warm terracotta radiance. Marco, a local classical guitarist taking a break outside his studio, looked up with an effortless, warm smile. In the split second before consciousness altered his expression, the Leica M shutter clicked silently at f/1.4. It remains one of my most cherished spontaneous human encounters.",
      expedition: ["🇵🇹 Alfama Neighborhood Alleys", "🌡️ Conditions: Terracotta Bounced Light, 24°C", "⏱️ 1/2000s Handheld Candid", "🎻 Classical Musician Break"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle German Etching 310gsm", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$440", rawPrice: 440, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Archival Pigment on Warm Tone Rag 310gsm", framing: "Museum Shadowbox Matte & Warm Terracotta Wood Frame", price: "$830", rawPrice: 830, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount", framing: "Floating Natural Mediterranean Olive Wood Frame", price: "$1,750", rawPrice: 1750, popular: false }
      ]
    },
    {
      id: 18,
      title: "Chiaroscuro Silhouette",
      category: "portraits",
      location: "Paris, France",
      camera: "Sony Alpha 7R V",
      lens: "FE 85mm F1.4 GM",
      settings: "1/500s • f/1.4 • ISO 100",
      description: "Dramatic rim-light silhouette celebrating the poetic power of deep shadows and golden highlights.",
      url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1600&q=85",
      thumbUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=700&q=80",
      alt: "Striking fine art portrait with golden rim lighting and moody shadows",
      likes: 374,
      tall: true,
      startingPrice: "$520",
      edition: "Limited Edition of 15 Worldwide",
      editionsRemaining: 2,
      storyQuote: "Where deep shadow makes every fragile ray of light sacred.",
      story: "In a dimly lit atelier overlooking the Seine in Paris, we explored the timeless technique of chiaroscuro—sculpting form exclusively through high-contrast side and rim lighting. A single tungsten source was placed behind the subject, skimming the cheekbone and hair while plunging the rest of the frame into deep, velvety blacks. It strips away all extraneous noise, focusing pure attention on posture, mystery, and the golden rim of radiant light.",
      expedition: ["🥖 Seine Atelier Paris", "🌡️ Conditions: Darkened Studio", "⏱️ Single Tungsten Rim Source", "🎭 Renaissance Chiaroscuro Study"],
      prints: [
        { size: '16" × 24"', sizeKey: '16x24', name: "Collector Edition", medium: "Hahnemühle Photo Rag Baryta 315gsm High Contrast", framing: "Unframed / Rolled in Heavy Archival Tube", price: "$520", rawPrice: 520, popular: false },
        { size: '24" × 36"', sizeKey: '24x36', name: "Gallery Edition", medium: "Deep Black Velvet Carbon Pigment on Rag", framing: "Museum Shadowbox Matte & Minimalist Satin Black Frame", price: "$970", rawPrice: 970, popular: true },
        { size: '40" × 60"', sizeKey: '40x60', name: "Grand Masterpiece", medium: "TruLife® Acrylic Face-Mount on Aluminum", framing: "Floating Beveled Gold Leaf Shadow Frame", price: "$2,100", rawPrice: 2100, popular: false }
      ]
    }
  ];

  // ==========================================================================
  // STATE MANAGEMENT
  // ==========================================================================
  let currentFilter = 'all';
  let searchQuery = '';
  let filteredPhotos = [...photographs];
  let currentPhotoIndex = 0;
  let isZoomed = false;
  let currentTab = 'story'; // 'story' | 'prints' | 'exif'
  let selectedPrintIndex = 1; // 24" x 36" (Gallery Edition) by default
  const userFavorites = new Set(JSON.parse(localStorage.getItem('aurelia_favorites') || '[]'));

  // ==========================================================================
  // DOM ELEMENTS
  // ==========================================================================
  const galleryGrid = document.getElementById('galleryGrid');
  const galleryEmptyState = document.getElementById('galleryEmptyState');
  const gallerySearch = document.getElementById('gallerySearch');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const galleryCounterReadout = document.getElementById('galleryCounterReadout');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  // Lightbox Elements
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxSpinner = document.getElementById('lightboxSpinner');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const lightboxCategory = document.getElementById('lightboxCategory');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxLocationText = document.getElementById('lightboxLocationText');
  const lightboxPriceChip = document.getElementById('lightboxPriceChip');
  const lightboxEditionChip = document.getElementById('lightboxEditionChip');
  const lightboxCamera = document.getElementById('lightboxCamera');
  const lightboxLens = document.getElementById('lightboxLens');
  const lightboxSettings = document.getElementById('lightboxSettings');
  const lightboxLocationExif = document.getElementById('lightboxLocationExif');
  const lightboxLikeBtn = document.getElementById('lightboxLikeBtn');
  const lightboxLikeCount = document.getElementById('lightboxLikeCount');
  const lightboxZoomBtn = document.getElementById('lightboxZoomBtn');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const lightboxPrevBtn = document.getElementById('lightboxPrevBtn');
  const lightboxNextBtn = document.getElementById('lightboxNextBtn');
  const lightboxThumbnailBar = document.getElementById('lightboxThumbnailBar');
  const lightboxInquireBtn = document.getElementById('lightboxInquireBtn');

  // Lightbox Tabs & Panels
  const tabBtnStory = document.getElementById('tabBtnStory');
  const tabBtnPrints = document.getElementById('tabBtnPrints');
  const tabBtnExif = document.getElementById('tabBtnExif');
  const paneStory = document.getElementById('paneStory');
  const panePrints = document.getElementById('panePrints');
  const paneExif = document.getElementById('paneExif');

  // Lightbox Story Elements
  const lightboxStoryQuote = document.getElementById('lightboxStoryQuote');
  const lightboxStoryBody = document.getElementById('lightboxStoryBody');
  const lightboxExpeditionChips = document.getElementById('lightboxExpeditionChips');

  // Lightbox Prints & Sizes Elements
  const lightboxSizeOptions = document.getElementById('lightboxSizeOptions');
  const activePrintMedium = document.getElementById('activePrintMedium');
  const activePrintFraming = document.getElementById('activePrintFraming');
  const activePrintEdition = document.getElementById('activePrintEdition');
  const activePrintPrice = document.getElementById('activePrintPrice');
  const btnAcquireEdition = document.getElementById('btnAcquireEdition');

  // Header & Mobile Nav Elements
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  // Contact Form Elements
  const contactForm = document.getElementById('contactForm');
  const selectedPrintInput = document.getElementById('selectedPrint');
  const selectedPrintSizeSelect = document.getElementById('selectedPrintSize');
  const selectedFramingSelect = document.getElementById('selectedFraming');
  const toastContainer = document.getElementById('toastContainer');

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================
  function init() {
    updateCategoryCounts();
    renderGallery();
    setupEventListeners();
  }

  // ==========================================================================
  // CATEGORY COUNTS
  // ==========================================================================
  function updateCategoryCounts() {
    const counts = {
      all: photographs.length,
      nature: photographs.filter(p => p.category === 'nature').length,
      wildlife: photographs.filter(p => p.category === 'wildlife').length,
      travel: photographs.filter(p => p.category === 'travel').length,
      architecture: photographs.filter(p => p.category === 'architecture').length,
      portraits: photographs.filter(p => p.category === 'portraits').length
    };

    Object.keys(counts).forEach(cat => {
      const el = document.getElementById(`count-${cat}`);
      if (el) el.textContent = `(${counts[cat]})`;
    });
  }

  // ==========================================================================
  // GALLERY RENDERING
  // ==========================================================================
  function renderGallery() {
    // Filter by Category
    let result = photographs;
    if (currentFilter !== 'all') {
      result = result.filter(photo => photo.category.toLowerCase() === currentFilter.toLowerCase());
    }

    // Filter by Search Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(photo => {
        return (
          photo.title.toLowerCase().includes(q) ||
          photo.location.toLowerCase().includes(q) ||
          photo.category.toLowerCase().includes(q) ||
          photo.camera.toLowerCase().includes(q) ||
          photo.lens.toLowerCase().includes(q) ||
          photo.description.toLowerCase().includes(q) ||
          photo.story.toLowerCase().includes(q) ||
          photo.storyQuote.toLowerCase().includes(q)
        );
      });
    }

    filteredPhotos = result;

    // Update Counter Readout
    galleryCounterReadout.innerHTML = `Showing <strong>${filteredPhotos.length}</strong> of ${photographs.length} works`;

    // Handle Empty State
    if (filteredPhotos.length === 0) {
      galleryGrid.innerHTML = '';
      galleryEmptyState.style.display = 'block';
      return;
    }

    galleryEmptyState.style.display = 'none';

    // Build Cards HTML
    galleryGrid.innerHTML = filteredPhotos.map((photo, index) => {
      const isFav = userFavorites.has(photo.id);
      const tallClass = photo.tall ? 'featured-tall' : '';

      return `
        <figure class="gallery-card ${tallClass}" data-id="${photo.id}" data-index="${index}" tabindex="0" role="button" aria-label="Open ${photo.title} with story and print pricing">
          <div class="card-image-wrap">
            <img 
              src="${photo.thumbUrl}" 
              alt="${photo.alt}" 
              class="gallery-card-img" 
              loading="lazy"
            >
          </div>

          <!-- Top Badges: Category & Starting Price -->
          <div class="card-top-badges">
            <span class="card-category-chip">${photo.category}</span>
            <span class="card-price-badge">From ${photo.startingPrice}</span>
            <span class="card-edition-badge">Ltd. (1/${photo.editionsRemaining || 25})</span>
          </div>

          <!-- Favorite Button -->
          <button type="button" class="card-fav-btn ${isFav ? 'favorited' : ''}" data-fav-id="${photo.id}" aria-label="${isFav ? 'Unlike photo' : 'Favorite photo'}">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>

          <!-- Hover Overlay with Story Snippet & Pricing Info -->
          <figcaption class="card-overlay">
            <div class="card-content-bottom">
              <div class="card-location">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>${photo.location}</span>
              </div>

              <h3 class="card-title">${photo.title}</h3>

              <!-- Story quote snippet shown on hover -->
              <p class="card-story-snippet">"${photo.storyQuote}"</p>

              <div class="card-meta-row">
                <div class="card-pricing-row">
                  <span class="card-starting-price">Prints from ${photo.startingPrice}</span>
                </div>
                <span class="card-view-cta">
                  <span>View Story & Prints</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </div>
            </div>
          </figcaption>
        </figure>
      `;
    }).join('');
  }

  // ==========================================================================
  // LIGHTBOX LOGIC
  // ==========================================================================
  function openLightbox(index) {
    if (index < 0 || index >= filteredPhotos.length) return;

    currentPhotoIndex = index;
    isZoomed = false;
    selectedPrintIndex = 1; // Default to popular 24" x 36"
    lightboxImage.classList.remove('zoomed');

    // Switch to story tab by default
    switchTab('story');

    updateLightboxContent();
    renderLightboxThumbnails();

    lightboxModal.classList.add('active');
    lightboxModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    setTimeout(() => lightboxCloseBtn.focus(), 100);
  }

  function closeLightbox() {
    lightboxModal.classList.remove('active');
    lightboxModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    isZoomed = false;
    lightboxImage.classList.remove('zoomed');
  }

  function switchTab(tabName) {
    currentTab = tabName;

    // Toggle tab buttons
    tabBtnStory.classList.toggle('active', tabName === 'story');
    tabBtnPrints.classList.toggle('active', tabName === 'prints');
    tabBtnExif.classList.toggle('active', tabName === 'exif');

    tabBtnStory.setAttribute('aria-selected', tabName === 'story');
    tabBtnPrints.setAttribute('aria-selected', tabName === 'prints');
    tabBtnExif.setAttribute('aria-selected', tabName === 'exif');

    // Toggle tab panes
    paneStory.classList.toggle('active', tabName === 'story');
    panePrints.classList.toggle('active', tabName === 'prints');
    paneExif.classList.toggle('active', tabName === 'exif');
  }

  function updateLightboxContent() {
    const photo = filteredPhotos[currentPhotoIndex];
    if (!photo) return;

    // Show loading spinner while high-res loads
    lightboxSpinner.classList.add('visible');
    lightboxImage.style.opacity = '0.3';

    const tempImg = new Image();
    tempImg.src = photo.url;
    tempImg.onload = () => {
      lightboxImage.src = photo.url;
      lightboxImage.alt = photo.alt;
      lightboxSpinner.classList.remove('visible');
      lightboxImage.style.opacity = '1';
    };
    tempImg.onerror = () => {
      lightboxImage.src = photo.thumbUrl;
      lightboxSpinner.classList.remove('visible');
      lightboxImage.style.opacity = '1';
    };

    // Header & Meta
    lightboxCategory.textContent = photo.category.toUpperCase();
    lightboxCounter.textContent = `${String(currentPhotoIndex + 1).padStart(2, '0')} / ${String(filteredPhotos.length).padStart(2, '0')}`;
    lightboxTitle.textContent = photo.title;
    lightboxDesc.textContent = photo.description;
    lightboxLocationText.textContent = photo.location;

    // Pricing & Edition badges in header
    lightboxPriceChip.textContent = `Prints From ${photo.startingPrice}`;
    lightboxEditionChip.textContent = `${photo.edition} (${photo.editionsRemaining} remaining)`;

    // Likes in lightbox
    const isFav = userFavorites.has(photo.id);
    const likeCount = photo.likes + (isFav ? 1 : 0);
    lightboxLikeCount.textContent = likeCount;
    if (isFav) {
      lightboxLikeBtn.classList.add('active');
      lightboxLikeBtn.querySelector('svg').setAttribute('fill', 'currentColor');
    } else {
      lightboxLikeBtn.classList.remove('active');
      lightboxLikeBtn.querySelector('svg').setAttribute('fill', 'none');
    }

    // TAB 1: THE STORY BEHIND THE SHOT
    lightboxStoryQuote.textContent = `"${photo.storyQuote}"`;
    lightboxStoryBody.innerHTML = `<p>${photo.story}</p>`;
    lightboxExpeditionChips.innerHTML = photo.expedition.map(chip => `
      <span class="expedition-chip">${chip}</span>
    `).join('');

    // TAB 2: PRINT SIZES & PRICING
    renderPrintSizeOptions(photo);

    // TAB 3: CAMERA GEAR & EXIF
    lightboxCamera.textContent = photo.camera;
    lightboxLens.textContent = photo.lens;
    lightboxSettings.textContent = photo.settings;
    lightboxLocationExif.textContent = photo.location;

    // Update active thumbnail highlight
    const thumbs = lightboxThumbnailBar.querySelectorAll('.thumb-item');
    thumbs.forEach((thumb, idx) => {
      if (idx === currentPhotoIndex) {
        thumb.classList.add('active');
        thumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  function renderPrintSizeOptions(photo) {
    if (!photo.prints || photo.prints.length === 0) return;

    if (selectedPrintIndex >= photo.prints.length) {
      selectedPrintIndex = 0;
    }

    lightboxSizeOptions.innerHTML = photo.prints.map((print, idx) => {
      const isSelected = idx === selectedPrintIndex;
      return `
        <div class="size-option-pill ${isSelected ? 'active' : ''}" data-print-index="${idx}" role="button" tabindex="0" aria-label="Select ${print.size} edition for ${print.price}">
          ${print.popular ? '<span class="size-badge-pop">Collector Choice</span>' : ''}
          <div class="size-pill-top">
            <span class="size-pill-dimensions">${print.size}</span>
            <span class="size-pill-price">${print.price}</span>
          </div>
          <span class="size-pill-edition">${print.name}</span>
        </div>
      `;
    }).join('');

    // Update active card details
    updateSelectedPrintCard(photo);
  }

  function updateSelectedPrintCard(photo) {
    const selectedPrint = photo.prints[selectedPrintIndex] || photo.prints[0];
    if (!selectedPrint) return;

    activePrintMedium.textContent = selectedPrint.medium;
    activePrintFraming.textContent = selectedPrint.framing;
    activePrintEdition.textContent = `${photo.edition} • Hand-Signed by Julian Vance`;
    activePrintPrice.textContent = `${selectedPrint.price} USD`;
    btnAcquireEdition.innerHTML = `
      <span>Acquire ${selectedPrint.size} (${selectedPrint.price})</span>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    `;
  }

  function renderLightboxThumbnails() {
    lightboxThumbnailBar.innerHTML = filteredPhotos.map((photo, idx) => `
      <div class="thumb-item ${idx === currentPhotoIndex ? 'active' : ''}" data-thumb-index="${idx}" role="button" aria-label="Go to photo ${idx + 1}: ${photo.title}">
        <img src="${photo.thumbUrl}" alt="Thumbnail ${photo.title}" loading="lazy">
      </div>
    `).join('');
  }

  function showNextPhoto() {
    if (filteredPhotos.length <= 1) return;
    currentPhotoIndex = (currentPhotoIndex + 1) % filteredPhotos.length;
    isZoomed = false;
    lightboxImage.classList.remove('zoomed');
    updateLightboxContent();
  }

  function showPrevPhoto() {
    if (filteredPhotos.length <= 1) return;
    currentPhotoIndex = (currentPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    isZoomed = false;
    lightboxImage.classList.remove('zoomed');
    updateLightboxContent();
  }

  function toggleZoom() {
    isZoomed = !isZoomed;
    if (isZoomed) {
      lightboxImage.classList.add('zoomed');
      lightboxZoomBtn.classList.add('active');
    } else {
      lightboxImage.classList.remove('zoomed');
      lightboxZoomBtn.classList.remove('active');
    }
  }

  // ==========================================================================
  // INQUIRY FORM PRE-FILL HANDLER
  // ==========================================================================
  function acquirePrint(photo, printOption) {
    closeLightbox();

    // Pre-fill Form Fields
    if (selectedPrintInput && photo) {
      selectedPrintInput.value = photo.title;
    }

    if (selectedPrintSizeSelect && printOption) {
      selectedPrintSizeSelect.value = printOption.sizeKey || '24x36';
    }

    const inquiryTypeSelect = document.getElementById('inquiryType');
    if (inquiryTypeSelect) {
      inquiryTypeSelect.value = 'limited-edition';
    }

    const userMessageInput = document.getElementById('userMessage');
    if (userMessageInput && photo && printOption) {
      userMessageInput.value = `I am interested in acquiring the ${printOption.size} ${printOption.name} of "${photo.title}" (${printOption.price}). Please provide archival certificate details and insured shipping timeline to my location.`;
    }

    // Smooth Scroll to Contact Section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        document.getElementById('userName')?.focus();
      }, 650);
    }

    showToast(`Selected ${printOption.size} Print (${printOption.price})! Opening acquisition form...`, '🏷️');
  }

  // ==========================================================================
  // FAVORITE / LIKE HANDLER
  // ==========================================================================
  function toggleFavorite(photoId, e) {
    if (e) e.stopPropagation();

    const photo = photographs.find(p => p.id === photoId);
    if (!photo) return;

    if (userFavorites.has(photoId)) {
      userFavorites.delete(photoId);
      showToast(`Removed "${photo.title}" from favorites`, '🤍');
    } else {
      userFavorites.add(photoId);
      showToast(`Added "${photo.title}" to favorites!`, '❤️');
    }

    localStorage.setItem('aurelia_favorites', JSON.stringify([...userFavorites]));

    const cardFavBtn = document.querySelector(`.card-fav-btn[data-fav-id="${photoId}"]`);
    if (cardFavBtn) {
      const isFav = userFavorites.has(photoId);
      if (isFav) {
        cardFavBtn.classList.add('favorited');
        cardFavBtn.querySelector('svg').setAttribute('fill', 'currentColor');
      } else {
        cardFavBtn.classList.remove('favorited');
        cardFavBtn.querySelector('svg').setAttribute('fill', 'none');
      }
    }

    if (lightboxModal.classList.contains('active')) {
      const currentPhoto = filteredPhotos[currentPhotoIndex];
      if (currentPhoto && currentPhoto.id === photoId) {
        const isFav = userFavorites.has(photoId);
        lightboxLikeCount.textContent = currentPhoto.likes + (isFav ? 1 : 0);
        if (isFav) {
          lightboxLikeBtn.classList.add('active');
          lightboxLikeBtn.querySelector('svg').setAttribute('fill', 'currentColor');
        } else {
          lightboxLikeBtn.classList.remove('active');
          lightboxLikeBtn.querySelector('svg').setAttribute('fill', 'none');
        }
      }
    }
  }

  // ==========================================================================
  // TOAST NOTIFICATIONS
  // ==========================================================================
  function showToast(message, icon = '✦') {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    requestAnimationFrame(() => toast.classList.add('show'));

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  }

  // ==========================================================================
  // EVENT LISTENERS
  // ==========================================================================
  function setupEventListeners() {

    // 1. Category Filter Buttons
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const filterVal = btn.getAttribute('data-filter');
        filterButtons.forEach(b => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        currentFilter = filterVal;
        renderGallery();
      });
    });

    // 2. Search Query Input
    gallerySearch.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
      renderGallery();
    });

    clearSearchBtn.addEventListener('click', () => {
      gallerySearch.value = '';
      searchQuery = '';
      clearSearchBtn.style.display = 'none';
      gallerySearch.focus();
      renderGallery();
    });

    // Reset Filters from Empty State
    resetFiltersBtn.addEventListener('click', () => {
      currentFilter = 'all';
      searchQuery = '';
      gallerySearch.value = '';
      clearSearchBtn.style.display = 'none';
      filterButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-filter') === 'all');
      });
      renderGallery();
    });

    // 3. Gallery Card Click / Lightbox trigger delegation
    galleryGrid.addEventListener('click', (e) => {
      const favBtn = e.target.closest('.card-fav-btn');
      if (favBtn) {
        const photoId = parseInt(favBtn.getAttribute('data-fav-id'), 10);
        toggleFavorite(photoId, e);
        return;
      }

      const card = e.target.closest('.gallery-card');
      if (card) {
        const idx = parseInt(card.getAttribute('data-index'), 10);
        openLightbox(idx);
      }
    });

    // Support keyboard Enter/Space on gallery card
    galleryGrid.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        const card = e.target.closest('.gallery-card');
        if (card && e.target === card) {
          e.preventDefault();
          const idx = parseInt(card.getAttribute('data-index'), 10);
          openLightbox(idx);
        }
      }
    });

    // 4. Lightbox Controls
    lightboxCloseBtn.addEventListener('click', closeLightbox);
    lightboxBackdrop.addEventListener('click', closeLightbox);
    lightboxNextBtn.addEventListener('click', showNextPhoto);
    lightboxPrevBtn.addEventListener('click', showPrevPhoto);
    lightboxZoomBtn.addEventListener('click', toggleZoom);
    lightboxImage.addEventListener('click', toggleZoom);

    // Lightbox Like Button
    lightboxLikeBtn.addEventListener('click', () => {
      const photo = filteredPhotos[currentPhotoIndex];
      if (photo) toggleFavorite(photo.id);
    });

    // Quick Inquire Print Button in header
    lightboxInquireBtn.addEventListener('click', () => {
      const photo = filteredPhotos[currentPhotoIndex];
      if (photo) {
        const selectedPrint = photo.prints[selectedPrintIndex] || photo.prints[0];
        acquirePrint(photo, selectedPrint);
      }
    });

    // 5. Lightbox Tab Buttons
    tabBtnStory.addEventListener('click', () => switchTab('story'));
    tabBtnPrints.addEventListener('click', () => switchTab('prints'));
    tabBtnExif.addEventListener('click', () => switchTab('exif'));

    // 6. Print Size Options Pill Click Delegation
    lightboxSizeOptions.addEventListener('click', (e) => {
      const pill = e.target.closest('.size-option-pill');
      if (pill) {
        const idx = parseInt(pill.getAttribute('data-print-index'), 10);
        selectedPrintIndex = idx;

        // Update active class on pills
        lightboxSizeOptions.querySelectorAll('.size-option-pill').forEach((p, i) => {
          p.classList.toggle('active', i === idx);
        });

        // Update card specs
        const photo = filteredPhotos[currentPhotoIndex];
        if (photo) updateSelectedPrintCard(photo);
      }
    });

    // 7. Acquire Edition CTA inside Tab 2
    btnAcquireEdition.addEventListener('click', () => {
      const photo = filteredPhotos[currentPhotoIndex];
      if (photo) {
        const selectedPrint = photo.prints[selectedPrintIndex] || photo.prints[0];
        acquirePrint(photo, selectedPrint);
      }
    });

    // 8. Lightbox Thumbnail strip delegation
    lightboxThumbnailBar.addEventListener('click', (e) => {
      const thumb = e.target.closest('.thumb-item');
      if (thumb) {
        const idx = parseInt(thumb.getAttribute('data-thumb-index'), 10);
        openLightbox(idx);
      }
    });

    // 9. Global Keyboard Shortcuts (Esc, Left Arrow, Right Arrow)
    window.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;

      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        showNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        showPrevPhoto();
      }
    });

    // 10. Mobile Touch Swipe for Lightbox
    let touchStartX = 0;
    let touchEndX = 0;

    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    }, { passive: true });

    function handleSwipe() {
      const swipeDistance = touchEndX - touchStartX;
      const threshold = 50;
      if (swipeDistance > threshold) {
        showPrevPhoto();
      } else if (swipeDistance < -threshold) {
        showNextPhoto();
      }
    }

    // 11. Sticky Header on Scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 60) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });

    // 12. Mobile Menu Drawer
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    // 13. Footer category links that activate filter
    document.querySelectorAll('[data-filter-link]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.getAttribute('data-filter-link');
        const targetBtn = document.querySelector(`.filter-btn[data-filter="${cat}"]`);
        if (targetBtn) {
          targetBtn.click();
          document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // 14. Contact Form Submission & Validation
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('userName');
      const emailInput = document.getElementById('userEmail');
      const messageInput = document.getElementById('userMessage');
      const nameError = document.getElementById('nameError');
      const emailError = document.getElementById('emailError');
      const messageError = document.getElementById('messageError');

      let isValid = true;

      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';

      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please provide your full name.';
        isValid = false;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Email address is required.';
        isValid = false;
      } else if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      }

      if (!messageInput.value.trim()) {
        messageError.textContent = 'Please tell us about your project or print inquiry.';
        isValid = false;
      }

      if (!isValid) return;

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `<span>Transmitting Acquisition Inquiry...</span>`;
      submitBtn.disabled = true;

      setTimeout(() => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        contactForm.reset();
        showToast('Thank you! Your acquisition inquiry has been received. Julian Vance Studio will reply with certificate and shipment details within 24 hours.', '✉️');
      }, 900);
    });

  }

  // Execute initialization
  init();

});
