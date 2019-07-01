window.onload = function () {

    const ajouter = document.getElementById('ajouter');
    const firstDiv = document.getElementById('firstDiv');
    const lastDiv = document.getElementById('lastDiv');
    const prixTotal = document.getElementById('Total');
    let totalSelect = document.getElementsByClassName('custom-select');

    prixTotal.value = 0;
    let nbLigne = 0;
    let livres = [];

    ajouter.addEventListener('click', () => { ajouterLigne(); }, false);

    class Livre {
        constructor(reference, nom, prix) {
            this._reference = reference;
            this._nom = nom;
            this._prix = prix;
        }
        get reference() {
            return this._reference;
        }
        get nom() {
            return this._nom;
        }
        get prix() {
            return this._prix;
        }
    }

    // creation d'une nouvelle ligne qui contiendra un select (contenant tous les livres) 
    // et de tous les differents inputs contenant les attributs du livre (reference/prix)
    // ainsi que d'un input 'quantite' que l'utilisateur devra remplir
    function ajouterLigne() {

        // variable servant à donner des ids differentes a chaque nouvelle ligne
        nbLigne++;

        // creer la nouvelle ligne
        const newLigne = document.createElement('div');
        newLigne.className = 'row my-3';
        newLigne.id = `ligne${nbLigne}`;
        firstDiv.insertBefore(newLigne, lastDiv);

        // inserer la colonne livre dans la ligne
        const newColLivre = document.createElement('div');
        newColLivre.className = 'd-inline-flex col-4';
        newLigne.appendChild(newColLivre);

        // inserer le select dans la colonne livre
        const newSelect = document.createElement('select');
        newSelect.className = 'custom-select';
        newSelect.id = `select${nbLigne}`;
        newColLivre.appendChild(newSelect);


        // ajoute 2 events qui s'activeront lorsqu'il y aura un changement de livre dans le select
        // le 1er qui remplira les inputs avec les differents attributs du livre (reference/prix unitaire)
        // le 2eme qui servira a montrer uniquement les livres qui ne sont pas encore choisis
        newSelect.addEventListener('change', () => { remplirChamp(newSelect); }, false);
        newSelect.addEventListener('change', () => { afficherLivres(); }, false);

        // création d'une option "vide" ne contenant aucun livre
        const newOption = document.createElement('option');
        newOption.textContent = "*Choisissez votre livre*";
        newSelect.appendChild(newOption);

        // boucle pour créer toutes les options du select qui contiendra les différents livres
        livres.forEach(index => {

            const newOption = document.createElement('option');
            newOption.name = `option${index}`;
            newOption.textContent = index.nom;
            newSelect.appendChild(newOption);
        });

        // met a jour l'affichage du select
        afficherLivres();

        // inserer la colonne Reference dans la ligne
        const newColRef = document.createElement('div');
        newColRef.className = 'col-1';
        newLigne.appendChild(newColRef);

        // inserer l'input text reference dans la colonne Reference
        const newRef = document.createElement('input');
        newRef.type = 'text';
        newRef.id = `ref${nbLigne}`;
        newRef.className = 'form-control';
        newRef.disabled = true;
        newColRef.appendChild(newRef);

        // inserer la colonne quantite dans la ligne
        const newColQt = document.createElement('div');
        newColQt.className = 'col-1';
        newLigne.appendChild(newColQt);

        // inserer l'input text quantite dans la colonne quantite
        const newQt = document.createElement('input');
        newQt.type = 'text';
        newQt.id = `qt${nbLigne}`;
        newQt.value = 0;
        newQt.className = 'form-control';
        // ajoute un event qui fera le calcul du prix total quand l'utilisateur tapera une valeur
        newQt.addEventListener('change', () => { remplirChamp(newSelect); }, false);
        newColQt.appendChild(newQt);

        // inserer la colonne prix unitaire dans la ligne
        const newColPU = document.createElement('div');
        newColPU.className = 'col-2';
        newLigne.appendChild(newColPU);

        // inserer l'input text prix unitaire dans la colonne prix unitaire
        const newPU = document.createElement('input');
        newPU.type = 'text';
        newPU.id = `pu${nbLigne}`;
        newPU.className = 'form-control';
        newPU.disabled = true;
        newColPU.appendChild(newPU);

        // inserer la colonne prix dans la ligne
        const newColPrix = document.createElement('div');
        newColPrix.className = 'offset-1 col-2';
        newLigne.appendChild(newColPrix);

        // inserer l'input text prix dans la colonne prix
        const newPrix = document.createElement('input');
        newPrix.type = 'text';
        newPrix.id = `prix${nbLigne}`;
        newPrix.name = 'prix';
        newPrix.className = 'form-control';
        newPrix.disabled = true;
        newColPrix.appendChild(newPrix);

        // inserer la colonne bouton dans la ligne
        const newColBtn = document.createElement('div');
        newColBtn.className = 'col-1';
        newLigne.appendChild(newColBtn);

        // inserer le bouton supprimer dans la colonne bouton
        const newBtn = document.createElement('button');
        newBtn.className = 'btn btn-secondary';
        newBtn.id = `supprimer${nbLigne}`;
        newBtn.type = 'button';
        newBtn.textContent = '-';
        newBtn.value = nbLigne;
        // event qui supprimera la ligne entiere apres clique du bouton 
        newBtn.addEventListener('click', () => { supprimerLigne(newBtn.value); }, false);
        newColBtn.appendChild(newBtn);

        // condition qui cache le bouton 'ajouter' si il y a autant de select crees que de livres dans le tableau
        if (totalSelect.length === livres.length) {
            ajouter.style.display = 'none';
        }
    }



    function supprimerLigne(numLigne) {
        let id = `ligne${numLigne}`;
        console.log(id);

        const supprimerLigne = document.getElementById(id);
        firstDiv.removeChild(supprimerLigne);

        // reaffiche le bouton 'ajouter'
        if (totalSelect.length !== livres.length) {
            ajouter.style.display = 'block';
        }

        // mis a jour de l'affichage des select
        afficherLivres();
    }

    function afficherLivres() {

        // reaffiche tous les livres dans les selects (utile si une ligne est supprimé ou un des livres changé)
        for (i = 0; i < totalSelect.length; i++) {
            // j commence a 1 comme la 1ere option n'est jamais caché
            for (j = 1; j < totalSelect[i].options.length; j++) {
                totalSelect[i].options[j].style.display = 'block';
            };
        }

        // parcourt tous les selects 
        for (i = 0; i < totalSelect.length; i++) {

            // passe a l'iteration suivante quand aucun livre n'est choisi dans ce select
            if (totalSelect[i].selectedIndex === 0) {
                continue;
            }

            //parcourt tous les livres
            livres.forEach(index => {

                //cherche le livre qui correspond au select parcouru
                if (totalSelect[i].value === index.nom) {

                    // reparcourt tous les differents selects pour cacher le livre choisi
                    for (j = 0; j < totalSelect.length; j++) {

                        // passe à l'iteration suivante lorsque la boucle arrive au select du livre choisi
                        if (totalSelect[i] === totalSelect[j]) {
                            continue;
                        }

                        // cache le livre choisi dans les autres select
                        optionChoisi = totalSelect[i].selectedIndex;
                        totalSelect[j].options[optionChoisi].style.display = 'none';
                    }
                }
            });
        }
    }


    function remplirChamp(select) {

        console.log(select);

        let indexId;

        // pour créer jusqu'a 99 lignes (apres il y aura un probleme d'index)
        if (!(parseInt(select.id.substr(-2, 2)))) {
            indexId = select.id.substr(-1, 1);
        }
        else {
            indexId = select.id.substr(-2, 2);
        }

        //parcourt le tableau de livres
        livres.forEach(index => {
            const prixUni = document.getElementById(`pu${indexId}`);
            const reference = document.getElementById(`ref${indexId}`);
            const quantite = document.getElementById(`qt${indexId}`);
            const prix = document.getElementById(`prix${indexId}`);

            // recupere tous les inputs avec le nom 'prix'
            const tabPrix = document.getElementsByName('prix');
            let totalInputPrix = tabPrix.length;
            // remet le prix total a 0 avant de recalculer le nouveau prix total
            prixTotal.value = 0;

            // si l'utilisateur n'a pas rentré un nombre
            if (isNaN(quantite.value)) {
                quantite.value = 0;
                prix.value = 0;
                alert('Veuillez rentrer uniquement un entier');
            }

            // si un livre est choisi dans le select
            if (select.value === index.nom) {

                // met a jour les differents inputs
                prixTotal.value = 0;
                prixUni.value = index.prix;
                reference.value = index.reference;
                prix.value = parseInt(quantite.value) * index.prix;
            }

            // si l'option 'vide' est choisi
            else if (select.selectedIndex === 0) {
                prix.value = 0;
                prixUni.value = 0;
                reference.value = 0;
                prixTotal.value = 0;
            }

            // boucle pour additionner tous les differents input prix et avoir le prix total
            for (i = 0; i < totalInputPrix; i++) {
                if (parseInt(tabPrix[i].value)) {
                    prixTotal.value = parseInt(tabPrix[i].value) + parseInt(prixTotal.value);
                }
            }
        });
    }

    livres[0] = new Livre(1, 'HTML encore plus vite', 8.5);
    livres[1] = new Livre(2, 'Window NT 4.0', 12);
    livres[2] = new Livre(3, 'Le kit de ressource technique de NT', 5);
    livres[3] = new Livre(4, 'Formation Java', 7);
    livres[4] = new Livre(5, 'Comment créer son site web', 15);

    ajouterLigne();
}