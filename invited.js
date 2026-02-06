document.getElementById('invited-section').innerHTML = `
<section class="important-info" style="background-color: white; padding-bottom: 0;">
    <div class="info-wrapper">
        <h2 class="section-title" style="text-align: center;">Invited Speakers</h2>
        <div class="info-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px;">
            
            ${[
                ["Anna Zatorska-Goldstein", "University of Warsaw, Poland"],
                ["Andrzej Szulkin", "Stockholm University, Sweden"],
                ["Aleksander Ćwiszewski", "Nicolaus Copernicus University, Poland"],
                ["Piotr Kalita", "Jagiellonian University, Poland"],
                ["Julio Rossi", "University of Buenos Aires, Argentina"],
                ["Francois Genoud", "EPFL, Switzerland"],
                ["Jakub Skrzeczkowski", "University of Oxford, UK"],
                ["Michał Kowalczyk", "University of Chile, Chile"],
                ["Jacek Jendrej", "Sorbonne Université, France"],
                ["Łukasz Płociniczak", "Wrocław University of Science and Technology, Poland"],
                ["Tomasz Tyranowski", "University of Twente, Netherlands"],
                ["Katarzyna Pietruska-Pałuba", "University of Warsaw, Poland"],
                ["Konstantin Merz", "ETH Zurich, Switzerland"],
                ["Nils Waterstraat", "MLU Halle-Wittenberg, Germany"],
                ["Maciej Starostka", "Gdańsk University of Technology, Poland"],
                ["Iwona Chlebicka", "University of Warsaw, Poland"],
                ["Agnieszka Świerczewska-Gwiazda", "University of Warsaw, Poland"],
                ["Jorgen Endal", "NTNU Trondheim, Norway"]
            ].map(speaker => `
            <div class="card" style="display: flex; align-items: center; justify-content: space-between; padding: 15px; gap: 15px; border: 1px solid #edf2f7; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                <div style="flex: 1;">
                    <h4 style="margin: 0; color: #1E3A8A; font-size: 11px; text-transform: uppercase;">Speaker</h4>
                    <p style="margin: 5px 0 0 0;">
                        <b style="font-size: 15px;">${speaker[0]}</b><br>
                        <small style="color: #6b7280;">${speaker[1]}</small>
                    </p>
                </div>
                <div style="width: 80px; height: 80px; flex-shrink: 0; border-radius: 8px; overflow: hidden; background: #f8fafc; border: 1px dashed #cbd5e1; display: flex; align-items: center; justify-content: center; text-align: center; padding: 5px;">
                    <span style="font-size: 10px; color: #94a3b8; text-transform: uppercase; font-weight: bold; line-height: 1.2;">Picture Placeholder</span>
                </div>
            </div>
            `).join('')}

        </div>
    </div>
</section>
`;