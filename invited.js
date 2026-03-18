document.getElementById('invited-section').innerHTML = `
<section class="important-info" style= padding-bottom: 0;">
    <div class="info-wrapper">
        <h2 class="section-title" style="text-align: center;">Invited Speakers</h2>
        <div class="info-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px;">
            
            ${[
               
                ["Iwona Chlebicka", "University of Warsaw, Poland","https://www.mimuw.edu.pl/~ichlebicka/", "https://www.mimuw.edu.pl/~ichlebicka/nowe.jpg"], 
                ["Aleksander Ćwiszewski", "Nicolaus Copernicus University, Poland","https://www.mat.umk.pl/knam/pracownicy/?id=7100700"], 
                ["Francois Genoud", "EPFL, Switzerland","https://people.epfl.ch/francois.genoud","Images/Geonud.jpg"], 
                ["Jacek Jendrej", "Sorbonne Université, France","https://webusers.imj-prg.fr/~jacek.jendrej/", "https://webusers.imj-prg.fr/~jacek.jendrej/ja-3.jpg"], 
                ["Grzegorz Karch", "University of Wrocław, Poland","https://karch.math.uni.wroc.pl/","https://lh3.googleusercontent.com/sitesv/APaQ0SRk7oXr-nCsscDzzu7Gi8RhsMtYMOMhV6wnnFy6STBukLFO2wHKFHpoACZS_rEbN4fEV2-XfMnPvxo9rYUyv7tT_IqaYMfk8NwxSIUBmfgMvcQ4_IfxrVoGVO64q3-o_w8_alkd-XlsICyLlflxeAeu937y3UrFsfpNGWrPRSBwMbzVtlVRjix8Gud-jeqQafzg4fL0Q5Slkub_VbM5VikMz2vP4RcIL0HBEjQ=w1280"], 
                ["Michał Kowalczyk", "University of Chile, Chile","https://www.cmm.uchile.cl/?cmm_people=michal-kowalczyk","https://www.cmm.uchile.cl/wp-content/uploads/2012/02/kowalczyk_m2.jpg"], 
                ["Konstantin Merz", "ETH Zurich, Switzerland","https://people.phys.ethz.ch/~mkonstanti/","https://people.phys.ethz.ch/~mkonstanti/km_cropped.jpg"], 
                ["Katarzyna Pietruska-Pałuba", "University of Warsaw, Poland","https://www.mimuw.edu.pl/pl/pracownicy/431/"], 
                ["Łukasz Płociniczak", "Wrocław University of Science and Technology, Poland","https://prac.im.pwr.edu.pl/~plociniczak/", "https://prac.im.pwr.edu.pl/~plociniczak/images/6/b/8/9/3/6b8931bc3dc420e7cfb4149e666c05048bb948d2-plociniczaklukasz2024.png"], 
                ["Julio Rossi (Not Confirmed)", "University of Buenos Aires, Argentina","#"], 
                ["Jakub Skrzeczkowski", "University of Oxford, UK","https://www.maths.ox.ac.uk/people/jakub.skrzeczkowski", "https://www.maths.ox.ac.uk/system/files/styles/profile/private/users/photos/20PL%20Elektron.%20legit.%20stud.%20Uniwersytet%20Warszawski.jpg?h=6303ee9e&itok=Ltj1bZJB"], 
                ["Maciej Starostka", "Gdańsk University of Technology, Poland","https://pg.edu.pl/p/maciej-starostka-64529"], 
                ["Andrzej Szulkin", "Stockholm University, Sweden","https://www.su.se/english/profiles/a/andrzejs"], 
                ["Agnieszka Świerczewska-Gwiazda", "University of Warsaw, Poland","https://www.mimuw.edu.pl/~aswiercz/","https://www.mimuw.edu.pl/~aswiercz/aga_a.jpg"], 
                ["Tomasz Tyranowski", "University of Twente, Netherlands","https://people.utwente.nl/t.m.tyranowski", "https://utwente.becdn.net/.wh/ea/uc/i0c7350760101c9ea1400f593a602217c494d2f1da2b40c016340014001804100000000/tmtyranowski.jpg"],
                ["Nils Waterstraat", "MLU Halle-Wittenberg, Germany","https://analysis.mathematik.uni-halle.de/mitarbeiter/nils_waterstraat/", "https://analysis.mathematik.uni-halle.de/im/1548166399_1047_0.jpg"], 
                ["Anna Zatorska-Goldstein", "University of Warsaw, Poland","https://www.mimuw.edu.pl/~azator/", "https://www.mimuw.edu.pl/~azator/images/MK_01964.jpg"],


            ].map(speaker => `
                <a href="${speaker[2] || '#'}" target="_blank" class="speaker-card">
                    <div class="speaker-info">
                        <h4 class="speaker-label">Speaker</h4>
                        <p>
                            <b class="speaker-name">${speaker[0]}</b><br>
                            <small class="speaker-affil">${speaker[1]}</small>
                        </p>
                    </div>

                    <div class="speaker-photo ${speaker[3] ? '' : 'placeholder'}">
                        ${
                            speaker[3]
                            ? `<img src="${speaker[3]}" alt="${speaker[0]}">`
                            : `<span class="speaker-placeholder">Picture placeholder</span>`
                        }
                    </div>
                </a>
            `).join('')}

        </div>
    </div>
</section>
`;