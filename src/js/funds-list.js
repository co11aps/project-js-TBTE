import saveTheChildren from '../images/funds-logo/save-the-children.png';
import projectHope from '../images/funds-logo/project-hope.png';
import united24 from '../images/funds-logo/united24.png';
import medicalCorps from '../images/funds-logo/international-medical-corps.png';
import medmFrontieres from '../images/funds-logo/medicins-sans-frontiers.png';
import razom from '../images/funds-logo/razom.png';
import actionHunger from '../images/funds-logo/action-against-hunger.png';
import worldVision from '../images/funds-logo/world-vision.png';
import prytula from '../images/funds-logo/sergiy-prytula.png';

const fundsList = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: saveTheChildren,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: projectHope,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: united24,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: medicalCorps,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: medmFrontieres,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: razom,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: actionHunger,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: worldVision,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: prytula,
  },
];

const markup = fundsList
  .map(
    ({ preview, original, description }) => `<li class="swiper-slide">
  <a class="gallery-link" href="${original}" target=blank onclick="event.preventDefault()">

<div class="swiper-slide">
        <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
      </div>

    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
  )
  .join('');
