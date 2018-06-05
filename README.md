
# Musicology

Generate scales and chords in any key and mode. [**DEMO HERE**](https://pamblam.github.io/Musicology/).

### Usage

Get all available mode names (to be used as parameter for `getScale`)

    var modes = Musicology.getModeNames();

Get all available chord types (to be used as a parameter for `getChord`)

    var qualities = Musicology.getChordTypes();

Get all notes from `C` to `B`

    var notes = Musicology.getNotes();

Get all notes in a scale for a given key and mode

    var cminor_scale = Musicology.getScale('C', 'harmonic minor');

Transpose a note up or down a given number of semitones

    var Cbminus2 = Musicology.transposeNote('Cb', -2);

Get all the notes of a chord

    var FSharpMin7 = Musicology.getChord('F#', 'minor 7th');

### Use Case

I'm too lazy to memorize all this shit and I can't find any complete chart sets that has all the stuff I want, so I'm making them myself. 

### License

See [wtfpl.net](http://www.wtfpl.net/) or the included LICENSE file.
