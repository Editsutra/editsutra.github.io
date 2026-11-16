// EditSutra feature library, matched to the Premiere panel (release 1.1.0, "new simple panel").
// [category, name, one-line benefit, kind, status, animation]
// Categories follow the panel: tabs Cut, Captions, Look & sound (Colour, Voice, Music, B-roll, Graphics), Shorts,
// then the All tools tabs Templates, Assets, Podcast, Doc & 3D, Tools.
// kind: core | template | preset | utility (shown). status: live | built | next | planned (internal only, data-status;
// check before the site goes public). animation: the mini drawer in mini.js.
window.ES_CATS = [
  ['cut', 'Cut'], ['cc', 'Captions'], ['colour', 'Colour'], ['voice', 'Voice'], ['music', 'Music'], ['broll', 'B-roll'], ['gfx', 'Graphics'],
  ['shorts', 'Shorts'], ['tpl', 'Templates'], ['lib', 'Assets'], ['pod', 'Podcast'], ['doc', 'Doc & 3D'], ['tools', 'Tools'],
];
window.ES_FEATURES = [
  // Cut tab
  ['cut', 'Silence cutting, 4 paces', 'Light keeps natural pauses, Medium suits full videos, Fast suits Shorts, Reels tight is fastest. Remove, preview first, or mute only.', 'core', 'live', 'gaps'],
  ['cut', 'Preview first, undo anything', 'See every cut before it happens, put one back at the playhead, or undo all.', 'core', 'live', 'undo'],
  ['cut', 'Retakes, repeats and mistakes', 'Keeps the best take and drops false starts and repeats.', 'core', 'live', 'takes'],
  ['cut', 'Umm, uh and stutters', 'Filler words and stutters cut out; breaths before and after sentences can go too.', 'core', 'built', 'breath'],
  ['cut', 'J/L cut and jump-cut zoom', 'The picture slides to the best-matching frame; zoom only where a cut still shows.', 'core', 'live', 'jump'],
  ['cut', 'Voice detection and screen mode', 'Find pauses by voice when music plays behind you, or cut only where the screen is still.', 'core', 'built', 'gaps'],
  ['cut', 'Side talk marked', 'Asides to someone off-camera are marked for you to check.', 'utility', 'built', 'check'],
  ['cut', 'Selected clips or In/Out only', 'Limit the cut to selected clips or to the range between In and Out.', 'utility', 'built', 'check'],
  ['cut', 'Check my files', 'Spots footage problems before you start, with a Convert button.', 'utility', 'built', 'check'],
  ['cut', 'Match a video I like', 'Paste a reference link or pick a file and copy its editing pace.', 'core', 'built', 'moving'],

  // Captions tab
  ['cc', 'Captions in 3 languages', 'English, Hinglish and Hindi (Devanagari), set once at the top of the panel. Translate to English too.', 'core', 'live', 'langs'],
  ['cc', 'Caption types', 'Normal, Reels / Shorts, talking head, explainer, cinematic and fun / gaming.', 'core', 'built', 'caps'],
  ['cc', 'Key words', 'CAPS or emoji on the key word; key words only; pop key words with a template.', 'core', 'built', 'caps'],
  ['cc', 'My words', 'Fix a name once and it stays fixed.', 'core', 'live', 'spell'],
  ['cc', 'AI spelling check', 'Catches wrong words in the caption text. Slow: about 20 seconds per minute of video.', 'core', 'built', 'spell'],
  ['cc', 'Editable caption track', 'Makes a real Premiere caption track. If you delete the old one, make new captions in one click.', 'core', 'live', 'srt'],
  ['cc', 'Short captions for Reels', '1-2 words at a time, in 20+ looks: Pop, Glass, Neon, Paper, Swiss, Keynote, Blueprint and more.', 'core', 'built', 'wordpop'],
  ['cc', 'Word highlight styles', 'Highlight the spoken word, words appear as said, karaoke, or a headline page per sentence.', 'core', 'built', 'wordpop'],
  ['cc', 'Shade behind captions', 'A soft gradient so captions read on any shot.', 'core', 'live', 'shade'],
  ['cc', 'Hindi SRT to Hinglish', 'Turns a Devanagari SRT into Roman Hinglish.', 'core', 'live', 'convert'],
  ['cc', 'Subtitle look and My template', 'Pick a caption template, uppercase option and look for the caption track.', 'utility', 'built', 'template'],

  // Look & sound > Colour
  ['colour', 'Colour fix & look', 'Auto colour fix plus Clean YouTube, Warm documentary, Cinematic, Moody, Vibrant or Black & white for the whole sequence, as editable Lumetri.', 'core', 'live', 'look'],
  ['colour', 'Match colour', 'Make clips match the one you select; Colour off finds clips with the wrong colour.', 'utility', 'built', 'lut'],
  ['colour', 'Keep skin natural', 'After grading, faces keep their real colour.', 'utility', 'built', 'look'],
  ['colour', 'Fix my shots', 'Stabilises only the shaky clips and sharpens only the soft ones.', 'utility', 'built', 'blur'],
  ['colour', 'Film look', 'Film grain, archive colour and 2.39:1 cinema bars.', 'core', 'built', 'film'],
  ['colour', 'One-click editing styles', 'Documentary, Warm film, Cinematic silhouette, Archival editorial, Violet glow, Floating window, Cut-paper collage, Live screen-share.', 'core', 'built', 'docstyle'],
  ['colour', 'Blur private details', 'Show a frame, pick the area, then blur or pixelate a face or a number.', 'utility', 'built', 'blur'],
  ['colour', 'Add any effect', 'Type an effect or transition name and add it to the selected clips.', 'utility', 'built', 'copyfx'],

  // Look & sound > Voice
  ['voice', 'Enhance voice', 'Studio-sound vocal enhancer, de-ess and peak limiter. The original stays, muted.', 'core', 'live', 'voice'],
  ['voice', 'Smart audio check', 'Finds hum, rumble or hiss in your pauses and cleans only that.', 'core', 'built', 'voice'],
  ['voice', 'Remove background music', 'Voice and music split onto their own tracks.', 'core', 'live', 'split'],
  ['voice', 'Level voices', 'Every voice clip brought to the same loudness.', 'utility', 'built', 'peak'],
  ['voice', 'Find clicks and noisy voices', 'Marks clicks and pops, and voices that need cleaning.', 'utility', 'built', 'peak'],
  ['voice', 'AI voice-over', 'An offline English voice (woman or man) placed at the playhead.', 'core', 'built', 'voice'],
  ['voice', '10 voice effects', 'Telephone, radio, megaphone, robot, chipmunk, deep, echo, big hall, lo-fi and 8D.', 'core', 'built', 'peak'],
  ['voice', 'Bleep swear words', 'Find swear words and bleep or mute them.', 'utility', 'built', 'breath'],

  // Look & sound > Music
  ['music', 'Mix music under voice', 'Ducks the music under speech, skips the slow intro, ends on the song\'s own ending, with optional music breaks.', 'core', 'built', 'duck'],
  ['music', 'Beat markers', 'Finds the tempo and marks every beat, half beat or bar. Remove them in one click.', 'core', 'live', 'beats'],
  ['music', 'Beat montage', 'A song plus a folder of clips or photos, cut on the beat.', 'core', 'built', 'beats'],
  ['music', 'Mix check', 'Marks music that needs ducking and fixes sound effects that are too loud or too quiet.', 'utility', 'built', 'peak'],

  // Look & sound > B-roll
  ['broll', 'B-roll from your folder', 'Clips matched to what you say, with a documentary reveal or slow push-in. Photos get a Ken Burns move.', 'core', 'live', 'broll'],
  ['broll', 'Sort B-roll into bins', 'Your B-roll folder organised by what it shows.', 'utility', 'built', 'folder'],
  ['broll', 'Snap B-roll to cuts and pick steadiest parts', 'B-roll that starts just after a cut moves onto it; a long clip is trimmed to its steadiest part.', 'utility', 'built', 'broll'],
  ['broll', 'Keep it moving', 'Zooms on key lines and slow push-ins, plus a zoom that follows the action.', 'core', 'built', 'moving'],
  ['broll', 'Transitions on cuts', 'Premiere impact transitions, Morph Cut, dip to white, film dissolve and more, with length and crossfade settings.', 'core', 'live', 'whip'],
  ['broll', 'Motion transitions', 'Zoom, spin, 3D swing, flip and roll, whip, glitch and parallax, at Fast, Normal or Slow.', 'core', 'live', 'whip'],
  ['broll', 'Overlay transitions and film burn', 'Your own transition clips or film burns laid on the cuts.', 'core', 'built', 'leak'],
  ['broll', 'Cut tools', 'Smooth cuts, J-cut, L-cut, freeze frame, split at shot changes, find black frames and cuts without spare frames.', 'utility', 'built', 'jump'],
  ['broll', 'Jump-cut markers', 'A marker on every cut that still shows.', 'utility', 'built', 'flash'],

  // Look & sound > Graphics
  ['gfx', 'Auto B-roll graphics', 'Numbers, comparisons, steps and "1 in 10" grids you say become cards, in 20+ looks. A version with you in a circle for 16:9.', 'core', 'built', 'number'],
  ['gfx', 'Charts', 'Bars, donut, a bar that turns into a donut, or a people grid, placed at the playhead.', 'core', 'built', 'chart'],
  ['gfx', 'Name tag', 'A lower third at the playhead in your look.', 'core', 'built', 'nametag'],
  ['gfx', 'Add graphic, 90+ animations', 'Subscribe, outro, quotes, stat strips, terminal, whiteboard, flowchart, countdown, milestone, chart race, kinetic type, 3D title, tickers, coupons and more.', 'core', 'built', 'infographic'],
  ['gfx', 'Find & highlight', 'Reads text on screen offline and highlights, underlines, strikes or boxes your words.', 'core', 'built', 'ocr'],
  ['gfx', 'Headline callout', 'A news-style headline with a highlighter at the playhead.', 'core', 'built', 'callout'],
  ['gfx', 'Mark every time a word is said', 'Type a word and mark each place it is spoken.', 'utility', 'built', 'check'],
  ['gfx', 'Brand kit and logo', 'Learns your colours and adds your logo to the video.', 'utility', 'built', 'template'],
  ['gfx', 'Photos, decks and screenshots to video', 'Turn pictures, a slide deck or screenshots into moving video.', 'core', 'built', 'deck'],
  ['gfx', 'Remove background', 'Cuts the person out of a selected clip or photo, with an optional big word behind.', 'core', 'built', 'bgremove'],
  ['gfx', 'Stick a graphic to a point', 'Pick a point on the frame and the selected graphic follows it.', 'utility', 'built', 'ocr'],
  ['gfx', 'Pictures, stickers and glow text', 'Paste an image or a link, add stickers, glow text, a before/after wipe, or titles from a list.', 'utility', 'built', 'swipe'],

  // Shorts tab
  ['shorts', 'Shorts finder', 'Finds hook-and-payoff moments in a long video and makes 9:16 timelines.', 'core', 'live', 'shortpick'],
  ['shorts', 'Export as 9:16 reels', 'Exports each Short as an MP4, or exports existing Shorts as MP4 only.', 'core', 'live', 'export'],
  ['shorts', 'Highlights reel', 'A highlights reel of a length you choose.', 'core', 'built', 'montage'],
  ['shorts', 'Two speakers 9:16', 'Two speakers stacked in a vertical frame.', 'core', 'live', 'reframe'],
  ['shorts', 'Safe-zone guides', 'Shows or hides platform safe zones on the timeline.', 'utility', 'live', 'safezone'],
  ['shorts', 'Check my edit and hook', 'Marks gaps, long pauses, loudness and pace, and checks why the first seconds could lose viewers.', 'utility', 'built', 'hookmeter'],
  ['shorts', 'Rewrite my hook', 'Six hook styles written from your words.', 'core', 'built', 'hookrewrite'],
  ['shorts', 'Montage hook', 'A fast picture montage at the start of the video.', 'core', 'built', 'montage'],
  ['shorts', 'Retention reader', 'Markers where viewers leave, from your Studio CSV.', 'core', 'built', 'retention'],
  ['shorts', 'Chapters', 'Chapter markers and YouTube timestamps, with an optional chapter label in the top-left corner.', 'utility', 'live', 'ytchap'],
  ['shorts', 'Titles, description and tags', 'Titles, description and tags, ready to paste.', 'core', 'built', 'seo'],
  ['shorts', 'Thumbnail frames and cut review sheet', 'Pick frames for thumbnails; a sheet of all your cuts to review.', 'utility', 'built', 'shortmarks'],

  // Templates tab
  ['tpl', 'Motion templates', 'About 160 titles, pop-ups, arrows, counters and more, with previews. Click one to drop it at the playhead.', 'template', 'live', 'template'],
  ['tpl', 'Your own template folder', 'Point the panel at a folder of your own .mogrt files.', 'template', 'live', 'folder'],

  // Assets tab
  ['lib', 'Presets', 'Zooms, shakes and transitions, installed into the Effects panel in one click.', 'preset', 'live', 'preset'],
  ['lib', '850+ sound effects', 'Whooshes, risers, impacts, clicks and pops. Add sounds automatically by meaning, with risers, hits and optional room ambience.', 'preset', 'live', 'sfx'],
  ['lib', 'Your own SFX folder', 'Choose your folder of sounds; meme sounds are optional.', 'preset', 'live', 'sounds'],
  ['lib', '27 LUTs', 'Colour looks installed into Lumetri in one click.', 'preset', 'live', 'lut'],

  // Podcast tab
  ['pod', 'Sync cameras and mic', 'Lines up several cameras by sound, or a separate mic to the camera.', 'core', 'built', 'micsync'],
  ['pod', 'Podcast camera switch', 'Cuts to the camera of whoever is talking, with optional reaction cutaways.', 'core', 'live', 'multicam'],
  ['pod', 'Speaker markers', 'Who is talking, marked on one-mic recordings.', 'core', 'live', 'speakers'],
  ['pod', 'Mics hearing each other', 'Finds places where one mic picks up the other speaker.', 'utility', 'built', 'check'],

  // Doc & 3D tab
  ['doc', 'Type a place, get a map', 'Type a place, a route or a story such as "India vs Pakistan". Satellite, paper or clean.', 'core', 'built', 'map'],
  ['doc', 'Map moves', 'Routes by plane, car, train or ship, war moves, deals, sanctions, storms and outbreaks.', 'core', 'built', 'route'],
  ['doc', 'Map styles', 'HUD, editorial, poster, extruded 3D, dark, vintage, neon and your own colours and labels.', 'core', 'built', 'maplooks'],
  ['doc', 'Photo parallax', 'Slow push in, pull back, slide, vertigo, or layered parallax from a PSD.', 'core', 'built', 'parallax'],
  ['doc', 'Make photos 3D', 'Turns selected photos into a 3D camera move.', 'core', 'built', 'camera'],
  ['doc', '3D camera moves between shots', 'Swing, tilt, flip, roll, door swing, push through and whip moves on every cut.', 'core', 'built', 'camera'],
  ['doc', '3D card transition', 'The camera flies across or pushes through into the next shot, at one cut or every shot change.', 'core', 'built', 'camera'],
  ['doc', 'Old film frame and light leak', 'An archive film frame, and a light leak with a flash.', 'core', 'built', 'leak'],
  ['doc', 'Source, callout and icons', 'A source line, a callout label with a line, and an icon grid like "3 in 10".', 'core', 'built', 'post'],

  // Tools tab
  ['tools', 'Project tidy', 'Organize the project into bins, colour-label the timeline, find offline media, clear check markers, clean the media cache.', 'utility', 'built', 'folder'],
  ['tools', 'Nest, stagger and slots', 'Nest each clip, un-nest, make a nest unique, stagger clips by frames.', 'utility', 'built', 'folder'],
  ['tools', 'Effect manager', 'List every effect used and remove one everywhere.', 'utility', 'built', 'copyfx'],
  ['tools', 'Easing curves', 'Smooth curves on your keyframes.', 'utility', 'live', 'curve'],
  ['tools', 'Saved workflows', 'Save a set of steps and run it on this timeline or on selected sequences.', 'utility', 'built', 'preset'],
  ['tools', 'Learn from this project', 'Finds the clips you always put at the start or end and adds them to a new timeline.', 'utility', 'built', 'install'],
  ['tools', 'Download inside Premiere', 'Paste a YouTube, Instagram or Pinterest link; the clip lands on your timeline.', 'core', 'live', 'download'],
  ['tools', 'Download quality and folder', 'Highest, 1080p, 720p or MP3, whole video or a part, into a folder you choose.', 'core', 'live', 'quality'],
  ['tools', 'Download an image link', 'Paste an image link and import the picture.', 'utility', 'built', 'download'],
];
window.ES_STYLES = [
  ['Viral 3D-style Reels', [
    ['Educational reel', 'Short 9:16, animated captions, punch-in zooms, sound design', 'on'],
    ['Fast motion reel', 'Hook boost, tight cuts, whoosh on every cut', 'on'],
    ['Floating callouts', 'Headline callout with Basic 3D tilt and shadow', 'on'],
    ['Depth transitions', 'Zoom and spin transitions, blur in and out', 'on'],
    ['3D typography', 'Pseudo-3D type drawn by EditSutra', 'feasible'],
    ['Product reveal / ad', 'Real 3D spin and light sweep need After Effects or Blender', 'road'],
    ['Parallax story', 'Photo split into depth layers needs the background remover', 'road'],
  ]],
  ['Documentary', [
    ['Map explainer', 'States, neighbours and routes from one line of text', 'on'],
    ['Data documentary', 'Bar, donut and bar-to-donut charts from your numbers', 'on'],
    ['Cinematic voice-over', 'Music breaks, riser and hit, film colour', 'on'],
    ['Documentary titles', 'Chapter labels, letterbox and grain', 'on'],
    ['Archival photo motion', 'Photo push and reveal today; layered 2.5D later', 'feasible'],
    ['Historical timeline', 'Year counter with events (drawn, not in the panel yet)', 'road'],
    ['Investigative essay', 'Article inserts with highlighted lines (drawn, not in the panel yet)', 'road'],
  ]],
  ['Talking head & long-form', [
    ['Clean talking head', 'Silences, retakes, J/L cuts, jump-cut zooms, captions', 'on'],
    ['Premium A-roll', 'Colour look, LUT, film look, slow push-ins', 'on'],
    ['Educational / business', 'Numbers, steps and charts from what you say', 'on'],
    ['Podcast', 'Camera switch to whoever talks, reaction cutaways', 'on'],
    ['Talking head + B-roll', 'Your B-roll matched to speech, on the beat', 'on'],
    ['Documentary presenter', 'Name tag, map and chart over the presenter', 'on'],
    ['Long video to Shorts', 'Finds the moments, 9:16, captions, fast export', 'on'],
  ]],
  ['More styles', [
    ['Podcast clips', 'Shorts from a podcast with speaker switching', 'on'],
    ['Interview / multicam', 'Who is speaking markers, switching, name tags', 'on'],
    ['Indian-language education', 'Hindi and Hinglish captions, Hindi SRT to Hinglish', 'on'],
    ['Travel', 'Beat markers, B-roll on the beat, whoosh', 'on'],
    ['Challenge video', 'Tight cuts, entertainment sound style, risers', 'on'],
    ['Minimal premium', 'Minimal captions, soft music under voice', 'on'],
    ['Screen tutorial', 'Zoom that follows the cursor', 'feasible'],
    ['Before / after', 'Wipe reveal preset', 'feasible'],
    ['Education animation', 'Explainer boards with icons', 'feasible'],
    ['Product launch / brand film', 'UI and kinetic type animation, best in After Effects', 'road'],
  ]],
];
window.ES_RECIPES = [
  ['Clean talking head', 'cut retakes jump voice cc', 'A raw recording becomes a tight, clean talk with captions.', 'Finds pauses, retakes and noise, adds zooms and the caption track.', 'Pace (Light, Medium, Fast), caption language and look.'],
  ['Fast Reel', 'short reframe anim zoom sfx', 'A 9:16 Short with word-by-word captions and punchy sound.', 'Picks the moment, reframes, renders captions, places sounds.', 'Which moment, caption look, sound style.'],
  ['Calm explainer', 'cut cc tag title duck lut', 'A calm, branded explainer with titles and soft music.', 'Cuts long pauses, captions, ducks the music.', 'Title text, name tag, LUT, music track.'],
  ['Podcast clip', 'multicam voice cc duck', 'A two-camera podcast cut to whoever is talking.', 'Switches cameras, cleans voices, captions.', 'Cut rhythm, caption language, music.'],
  ['B-roll story', 'broll trans lut preset duck sfx', 'A story told over your own B-roll with film colour.', 'Matches clips to speech, adds transitions and sound.', 'Your B-roll folder, LUT, transition style.'],
];
