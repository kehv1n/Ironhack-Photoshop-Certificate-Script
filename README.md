# Ironhack Certificate Script #

JSX Script that creates graduation certificates for Ironhack (Miami) Graduates. 

With the certificates.ai file, it will fill in the student's names and the bootcamp name. 

_Should_ work on most version on Photoshop. But i've only currently tested it in Photoshop CC 2014

Created because Marissa said it would be waste of time, well -- boohoo Marissa...! 

# How to Use #

## First, open the file and load the class ##

Simply load the students in the Array titled "theClass" as strings..
```
    var theClass = [
        'Jon Snow',
        'Ned Stark',
        'Daenerys Targaryen',
        'Tyrion Lannister',
        'Khal Drogo'
    ];

```

And call the function ```makeGrads``` where the first parameter is theClass constant and the second is whether in mode ```uxui``` or ```webdev```

```
makeGrads(theClass, 'uxui');
```

## Then, run the PhotoShop script in Photoshop ##

Simply open up whatever version you're using in Photoshop (again, preferebly Photoshop CC 2014)

Add a textbox where you want the name of the students to go.

Open up the certificates.ai file and go to:

 file >> scripts >> browse >> IHGRADS.jsx


Or if you've already uploaded the script, simple run it via:

 file >> scripts >> IHGRADS

Boom!

**note that occasionally, there is an issue with spaces so always double check the certificates before you send them to your Boss, or she'll hold it over your head for the rest of eternity**


