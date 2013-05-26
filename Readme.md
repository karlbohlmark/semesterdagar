
# semesterdagar

Beräkna lagstadgat antal intjänade semesterdagar givet intjänandeår och arbetade dagar 

[Semesterlag (1977:480)](http://www.riksdagen.se/sv/Dokument-Lagar/Lagar/Svenskforfattningssamling/Semesterlag-1977480_sfs-1977-480/)

## Installation

    $ component install karlbohlmark/semesterdagar
    # eller 
    $ npm install semesterdagar

## API

### semesterdagar(intjänandeÅr, arbetadeDagar)
Returnera antal intjänade semesterdagar

```js
semesterdagar(2013, 278) // -> 20
semesterdagar(2016, 278) // -> 19
```

## License

  MIT
