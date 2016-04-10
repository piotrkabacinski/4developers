class cycles {

  constructor( settings ) {
    this.cycles = settings.cycles || 10;
    this.testing = settings.function || null;
    this.name = settings.name || null;
    this.times = [];
  }

  init() {

    var i = 0,
        l = this.cycles,
        start,
        end;

    for( i; i < l; i++ ) {

        start = new Date();

        this.testing();

        end = new Date();

        this.times.push( end - start );

    }

  }

  name() {

    return this.name;

  }

  get result() {

    let l = this.times.length,
        sum = 0,
        average = 0;

    this.times.forEach( function ( value ) {

      sum += value;

    });

    average = sum / l;

    return average;

  }

}

export default cycles;
