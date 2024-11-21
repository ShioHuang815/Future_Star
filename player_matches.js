var playerMatches = {
    "A. Adalsteinsson": "Frenkie de Jong, Kalidou Koulibaly",
    "A. Barger": "Bruno Fernandes, João Cancelo",
    "A. Bilow": "Bukayo Saka, Gabriel Jesus",
    "A. Braman": "Alisson, Ederson",
    "A. Camara": "Ciro Immobile, Erling Haaland",
    "A. Cooke": "Alisson, David Alaba",
    "A. Flynn": "Antoine Griezmann, David Alaba",
    "A. Hall": "Phil Foden, Riyad Mahrez",
    "A. Kato": "Ciro Immobile, Marcus Rashford",
    "A. Legaspi": "Antonio Rüdiger, Kyle Walker",
    "A. Narang": "David Alaba, Federico Valverde",
    "A. Ndrenika": "Bukayo Saka, Gabriel Jesus",
    "A. Nitzl": "Dayot Upamecano, João Cancelo",
    "A. Ochoa": "Bruno Fernandes, Bukayo Saka",
    "A. Roberts": "Bernardo Silva, Bruno Fernandes",
    "A. Samways": "Alphonso Davies, João Cancelo",
    "A. Sheppela": "David Alaba, Federico Valverde",
    "A. Vovk": "Ciro Immobile, Erling Haaland",
    "A.Awujo": "Bukayo Saka, Gabriel Jesus",
    "B. Baldvinsson": "Bruno Fernandes, João Cancelo",
    "B. Blevins": "Bruno Fernandes, Kevin De Bruyne",
    "B. Clagette": "Bernardo Silva, Bukayo Saka",
    "B. Keating": "Achraf Hakimi, Kalidou Koulibaly",
    "B. LeBel": "Dayot Upamecano, Rodri",
    "B. Liscum": "Antoine Griezmann, Azzedine Ounahi",
    "B. Madore": "Antoine Griezmann, Federico Valverde",
    "B. Mayer": "Bruno Fernandes, João Cancelo",
    "B. Minzey": "David Alaba, Federico Valverde",
    "B. Munson": "Bruno Guimarães, João Cancelo",
    "B. Saint Martin": "Azzedine Ounahi, Jude Bellingham",
    "B. Soto": "Kylian Mbappé, Mohamed Salah",
    "B. Thiesen": "Dayot Upamecano, Rodri",
    "C. Arce": "Alexis Mac Allister, Azzedine Ounahi",
    "C. Bruletti": "Aurélien Tchouaméni, Casemiro",
    "C. Brunell": "Bernardo Silva, Federico Valverde",
    "C. Buckley": "Aurélien Tchouaméni, Casemiro",
    "C. Calov": "Kevin De Bruyne, Leroy Sané",
    "C. Crockford": "Antoine Griezmann, David Alaba",
    "C. Cruthers": "Alexis Mac Allister, Azzedine Ounahi",
    "C. Dalton": "Alisson, David Alaba",
    "C. Desroches": "Antoine Griezmann, Marcus Rashford",
    "C. Dionne": "Bukayo Saka, Gabriel Jesus",
    "C. Fitzgerald": "Alisson, Ederson",
    "C. Gerber": "Alisson, Ederson",
    "C. Grabfelder": "Jude Bellingham, Neymar",
    "C. Griffith": "Bukayo Saka, Lautaro Martínez",
    "C. Heuer": "Christopher Nkunku, Erling Haaland",
    "C. Kosakoff": "Erling Haaland, Karim Benzema",
    "C. Lawrence": "Bruno Fernandes, Martin Ødegaard",
    "C. Leber": "Alexis Mac Allister, Bruno Fernandes",
    "C. Lofy": "Declan Rice, Federico Valverde",
    "C. McCamy": "Bruno Fernandes, Martin Ødegaard",
    "C. Meyers": "Bruno Fernandes, Kevin De Bruyne",
    "C. Murador": "Antoine Griezmann, Phil Foden",
    "C. Oduro": "Bukayo Saka, Rafael Leão",
    "C. Oliver": "Gabriel Jesus, Rodrygo",
    "C. Peretti": "Antoine Griezmann, David Alaba",
    "C. Steinleitner": "Aurélien Tchouaméni, Casemiro",
    "C. Thaggard": "Gabriel Jesus, Marcus Rashford",
    "C. Wilkerson": "David Alaba, Federico Valverde",
    "D. Ajagbe": "Kylian Mbappé, Lautaro Martínez",
    "D. Boltz": "Kylian Mbappé, Robert Lewandowski",
    "D. Brown": "Antonio Rüdiger, Declan Rice",
    "D. Carlson": "Antoine Griezmann, David Alaba",
    "D. Davis": "Antoine Griezmann, Federico Valverde",
    "D. Hass": "Antoine Griezmann, David Alaba",
    "D. Herrera": "Bukayo Saka, Jude Bellingham",
    "D. Obilo": "David Alaba, Marquinhos",
    "D. Onwona-Agyeman": "Ederson, Manuel Neuer",
    "D. Stopek": "Bruno Fernandes, João Cancelo",
    "D. Tran": "Antoine Griezmann, David Alaba",
    "D. Vellios": "Alphonso Davies, João Cancelo",
    "D. Williams": "David Alaba, Federico Valverde",
    "D. Wrona": "Bukayo Saka, Rodrygo",
    "E. Akulov": "Antonio Rüdiger, Rodri",
    "E. Caceres": "Kevin De Bruyne, Lionel Messi",
    "E. Emovon": "Antoine Griezmann, Marcus Rashford",
    "E. Jones": "Aurélien Tchouaméni, Frenkie de Jong",
    "E. Popkewitz": "Azzedine Ounahi, Federico Valverde",
    "E. Ruiz": "Azzedine Ounahi, David Alaba",
    "E. Wood": "Alisson, Manuel Neuer",
    "F. Bell": "Casemiro, Fabinho",
    "F. Di Ponzio": "Federico Valverde, Martin Ødegaard",
    "F. Grundin": "Alisson, Manuel Neuer",
    "F. Volmar": "Bernardo Silva, Bruno Fernandes",
    "G. Elmquist": "Bukayo Saka, Ciro Immobile",
    "G. Fernandez": "David Alaba, Federico Valverde",
    "H. Bertos": "Alexis Mac Allister, Casemiro",
    "H. Blatteis": "Manuel Neuer, Mike Maignan",
    "H. Brown": "Alisson, Manuel Neuer",
    "H. Evans": "David Alaba, Manuel Neuer",
    "H. Richter": "David Alaba, Raphaël Varane",
    "I. Abbey": "Bukayo Saka, Leroy Sané",
    "I. Addimandi": "Gabriel Jesus, Phil Foden",
    "I. Goldson": "David Alaba, Marquinhos",
    "I. Obeid": "Alexis Mac Allister, Azzedine Ounahi",
    "I. Tyrkus": "Antoine Griezmann, Marcus Rashford",
    "J. Adam": "Dayot Upamecano, Rodri",
    "J. Bonas": "Dayot Upamecano, Declan Rice",
    "J. Bowton": "Alisson, Ederson",
    "J. Bucknor": "Bruno Fernandes, Hakim Ziyech",
    "J. Clark": "Azzedine Ounahi, Federico Valverde",
    "J. Contell": "Kylian Mbappé, Mohamed Salah",
    "J. Cortez": "David Alaba, Marquinhos",
    "J. Dale": "Gabriel Jesus, Hakim Ziyech",
    "J. Demian": "David Alaba, Federico Valverde",
    "J. Diaz": "Erling Haaland, Marcus Rashford",
    "J. Gajadhar": "Jamal Musiala, Jude Bellingham",
    "J. Guggemos": "Leroy Sané, Rafael Leão",
    "J. Harms": "Manuel Neuer, Marquinhos",
    "J. Kuhr": "Casemiro, Fabinho",
    "J. Lindimore": "Dayot Upamecano, Rodri",
    "J. Maguire": "David Alaba, Raphaël Varane",
    "J. Maher": "Dayot Upamecano, Rodri",
    "J. Mason": "David Alaba, Rúben Dias",
    "J. Michel": "Ederson, Manuel Neuer",
    "J. Miller": "Casemiro, Rodri",
    "J. Nabaka": "Antoine Griezmann, David Alaba",
    "J. Ramos": "Federico Valverde, Martin Ødegaard",
    "J. Sharp": "Bruno Fernandes, Kevin De Bruyne",
    "J. Spadafora": "Rodrygo, Sadio Mané",
    "J. Stout": "Mohamed Salah, Rafael Leão",
    "J. Suchecki": "Federico Valverde, Martin Ødegaard",
    "J. Van Deventer": "Federico Valverde, Martin Ødegaard",
    "J. Wagoner": "Frenkie de Jong, Jude Bellingham",
    "J. Weiss": "Karim Benzema, Kylian Mbappé",
    "J. Zalinsky": "Aurélien Tchouaméni, João Cancelo",
    "K. Andrews": "Phil Foden, Serge Gnabry",
    "K. Arnarsson": "Antoine Griezmann, Raphaël Varane",
    "K. Brame": "Fabinho, Sandro Tonali",
    "K. Dadzie": "Gabriel Jesus, Sadio Mané",
    "K. Quist-Therson": "Alexis Mac Allister, Casemiro",
    "K. Schueneman": "David Alaba, Federico Valverde",
    "L. Aviles": "Ederson, Manuel Neuer",
    "L. Bezerra": "Gabriel Jesus, Phil Foden",
    "L. Costabile": "Bruno Fernandes, João Cancelo",
    "L. Gerhardt": "Fabinho, Jude Bellingham",
    "L. Jeffus": "João Cancelo, Rodri",
    "L. Koehl": "Bruno Fernandes, Kevin De Bruyne",
    "L. Mack": "David Alaba, Marquinhos",
    "L. Pechota": "Christopher Nkunku, Leroy Sané",
    "L. Shreiner": "David Alaba, Raphaël Varane",
    "L. Van Heukelum": "Erling Haaland, Robert Lewandowski",
    "M. Adedokun": "Kevin De Bruyne, Kylian Mbappé",
    "M. Borkovic": "Kylian Mbappé, Rafael Leão",
    "M. Cisset": "Aurélien Tchouaméni, Rodri",
    "M. Daouda": "Aurélien Tchouaméni, Frenkie de Jong",
    "M. De Jesus": "Antoine Griezmann, Phil Foden",
    "M. Devries": "David Alaba, Kyle Walker",
    "M. Diop": "David Alaba, Raphaël Varane",
    "M. Fisher": "Aurélien Tchouaméni, João Cancelo",
    "M. Henderson": "Reece James, Trent Alexander-Arnold",
    "M. Herbert": "Kalidou Koulibaly, Theo Hernández",
    "M. Hewes": "Sadio Mané, Son Heung-min",
    "M. Hrvojevic": "Gabriel Jesus, Rodrygo",
    "M. Lejbowicz": "Marcus Rashford, Thibaut Courtois",
    "M. Leon": "Marcus Rashford, Rodrygo",
    "M. Lynch": "Phil Foden, Rafael Leão",
    "M. Marshall": "Martin Ødegaard, Phil Foden",
    "M. Nesci": "Ciro Immobile, Son Heung-min",
    "M. Parker": "Jude Bellingham, Sandro Tonali",
    "M. Ramirez": "David Alaba, Martin Ødegaard",
    "M. Riley": "Harry Kane, Lautaro Martínez",
    "M. Rogers": "Kevin De Bruyne, Ousmane Dembélé",
    "M. Saad": "Marcus Rashford, Rodrygo",
    "M. Sherlock": "David Alaba, Raphaël Varane",
    "M. Trejo": "Manuel Neuer, Mike Maignan",
    "M. Zachemski": "Bruno Fernandes, Kevin De Bruyne",
    "N. Cabrera": "Jude Bellingham, Sandro Tonali",
    "N. Cassiday": "Phil Foden, Rodrygo",
    "N. Cavallo": "Alphonso Davies, João Cancelo",
    "N. Collins": "Aurélien Tchouaméni, Casemiro",
    "N. Demian": "Dayot Upamecano, Rodri",
    "N. Glorioso": "Phil Foden, Serge Gnabry",
    "N. Joseph": "Phil Foden, Serge Gnabry",
    "N. McHenry": "Antonio Rüdiger, Rodri",
    "N. Miller": "Casemiro, Rodri",
    "N. O'Brien": "Marcus Rashford, Olivier Giroud",
    "N. Prince": "Aurélien Tchouaméni, Casemiro",
    "N. Rosamilia": "Marcus Rashford, Phil Foden",
    "N. Røjel": "Lautaro Martínez, Robert Lewandowski",
    "N. Skubis": "Phil Foden, Son Heung-min",
    "O. Foster": "Sadio Mané, Son Heung-min",
    "O. Maeland": "Christopher Nkunku, Rafael Leão",
    "O. Martin": "Marcus Rashford, Rodrygo",
    "O. Stefansson": "Antoine Griezmann, Federico Valverde",
    "P. Grassi": "Rodri, Thiago Silva",
    "P. Greenlee": "Bernardo Silva, Federico Valverde",
    "P. Grinstead": "Leroy Sané, Phil Foden",
    "P. Kingston": "Bruno Fernandes, Kevin De Bruyne",
    "P. Lurot": "Joshua Kimmich, Rodri",
    "P. McDonald": "Joshua Kimmich, Rodri",
    "P. McLaughlin": "Manuel Neuer, Marquinhos",
    "P. Naef": "Gabriel Jesus, Rafael Leão",
    "P. O'Toole": "David Alaba, Raphaël Varane",
    "P. Reisz": "Antoine Griezmann, Sandro Tonali",
    "P. Son": "Martin Ødegaard, Phil Foden",
    "Q. Elliot": "João Cancelo, Rodrigo De Paul",
    "Q. Rogers": "Joshua Kimmich, João Cancelo",
    "R. Aman": "Rafael Leão, Rodrygo",
    "R. Burlew": "Hakim Ziyech, João Cancelo",
    "R. Eisa": "Marcus Rashford, Olivier Giroud",
    "R. Gourdie": "Bruno Fernandes, Leroy Sané",
    "R. Keefe": "Jude Bellingham, Sandro Tonali",
    "R. Ludwig": "Phil Foden, Serge Gnabry",
    "R. Mayer": "Sandro Tonali, Éder Militão",
    "R. Perez": "Rodrigo De Paul, Sandro Tonali",
    "R. Ponce de leon": "Marquinhos, Mike Maignan",
    "R. Quintos": "Dayot Upamecano, Rodri",
    "S. Bettenhausen": "Sandro Tonali, Éder Militão",
    "S. Godden": "Bruno Fernandes, Martin Ødegaard",
    "S. Hauksson": "Phil Foden, Rodrygo",
    "S. Joseph": "Manuel Neuer, Marquinhos",
    "S. Kerrigan": "Lautaro Martínez, Sadio Mané",
    "S. Koza": "Phil Foden, Serge Gnabry",
    "S. Magnusson": "Casemiro, Rodri",
    "S. Masereka": "Bukayo Saka, Sadio Mané",
    "S. Nixon": "Serge Gnabry, Ángel Di María",
    "S. Ovesen": "Rúben Dias, Thiago Silva",
    "S. Rincón": "Mike Maignan, Thibaut Courtois",
    "S. Sarver": "Kylian Mbappé, Mohamed Salah",
    "S. Scott": "Marcus Rashford, Phil Foden",
    "S. Sent": "David Alaba, Marquinhos",
    "S. Soga": "Reece James, Theo Hernández",
    "S. Stewart": "Raphaël Varane, Thibaut Courtois",
    "S. Vainstein": "Manuel Neuer, Thibaut Courtois",
    "S. Wolcott": "Mike Maignan, Thibaut Courtois",
    "T. Angelone": "Marcus Rashford, Phil Foden",
    "T. Creech": "Marcus Rashford, Olivier Giroud",
    "T. Dewing": "Lautaro Martínez, Olivier Giroud",
    "T. Fleming": "Martin Ødegaard, Rodri",
    "T. Gilej": "Rodri, Sandro Tonali",
    "T. Glassberg": "Phil Foden, Sandro Tonali",
    "T. Karumanchi": "Rodri, Rúben Dias",
    "T. Mihalić": "Mohamed Salah, Sadio Mané",
    "T. Raimbault": "Phil Foden, Son Heung-min",
    "T. Ratoviz": "Leroy Sané, Rodrygo",
    "T. Villa": "David Alaba, Raphaël Varane",
    "T. Wright": "Manuel Neuer, Thibaut Courtois",
    "U. Zeitz": "Phil Foden, Rafael Leão",
    "V. Danielson": "Marcus Rashford, Son Heung-min",
    "V. Kovac": "Raphaël Varane, Thibaut Courtois",
    "W. Baker": "Aurélien Tchouaméni, Rodri",
    "W. Eby": "Rodri, Thiago Silva",
    "W. Kulvik": "Aurélien Tchouaméni, Rodri",
    "W. Nelson": "Manuel Neuer, Marquinhos",
    "W. Smith": "Marcus Rashford, Thibaut Courtois",
    "Y. Senden": "Rodri, Toni Kroos",
    "Z. Babiak": "Marcus Rashford, Rodrygo",
    "Z. Kelly": "Manuel Neuer, Mike Maignan",
    "Z. Martens": "Raphaël Varane, Sandro Tonali",
    "Z. Ramsey": "Phil Foden, Son Heung-min"
};