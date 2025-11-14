import { Creations, loadFromStorage } from '../data/data.js';

loadFromStorage(renderCreations);

function renderCreations() {

document.body.innerHTML =`
<div class="grid-container">
    <div class="background-image-container">
        <img src="image/f18c62bc-a19a.jpg" alt="katapathpawra Logo" class="background-image">
    </div>
    <header class="header-grid">
        <h1 class="header">ආයුබෝවන්!...</h1>
    </header>
    <nav class="navigator-grid">
        <ul>
            <li><a href="about.html">About</a></li>
        </ul>
    </nav>
    <main class="main-content">
        <h2 class="h2-size">කැටපත් පවුර</h2>

    <section class="home-container"></section>

    <section id="contact" class="creating-gride">
    <h2>ඔබේ නිර්මානය ලියා පල කරන්න...</h2>
        <textarea class="text-area" id="js-creation-trace"> "නිර්මානාත්මක ඔබේ නිර්මානය ලියා මෙහි පලකල හැක... "

        Sharing your creative ideas and publishing them for others to read is something you can do here!. 

        (Please erase this text area / ඉහත පෙළ මකන්න. )
        </textarea>
    <button class="submit-button" type="submit">Submit</button>
    </section>
    </main>
    <footer class="footer-grid">
        <p>&copy; 2025 katapathpawra.org</p>
    </footer>
</div>`;
}
export const creationsInstance = new Creations('userCreations');

const severData = creationsInstance.getAllCreations();

let UserCreated = [...severData];

document.querySelector('.submit-button').addEventListener('click', () => {
    const userCreation = document.getElementById('js-creation-trace').value;
    if (userCreation.trim () !== '') {
        UserCreated.push(userCreation);
        //alert('Thank you for your submission!');
        document.getElementById('js-creation-trace').value = '';
    } else {
        alert('Please write something before submitting.');
    }
    setTimeout();
    return creationsInstance.addCreation(userCreation);

});
 document.querySelector('.home-container').innerHTML = UserCreated.map(item => `<p class="js-creation">${item}</p>`).join('');  

function setTimeout() {
    location.reload();
  } 2000;


//localStorage.removeItem('userCreations');
