const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
// 連絡先設定前の誤送信防止
const contactLink = document.querySelector('#contact-link');
contactLink?.addEventListener('click', event => event.preventDefault());

const courses = [
  { category: 'language', icon:'Aa', title:'語学・国際交流', audience:'子どもから大人まで（講座別に設定）', learning:'英会話、発音、異文化理解、コミュニケーション', description:'新しいことばを学びながら、世界の人々とつながる喜びを見つけます。' },
  { category: 'creative', icon:'♫', title:'音楽・文化・表現', audience:'子ども・学生・大人', learning:'音楽、アート、表現活動、ものづくり', description:'一人ひとりの創造性を尊重し、表現する楽しさを分かち合います。' },
  { category: 'wellness', icon:'♡', title:'健康・ウェルネス', audience:'大人・親子（内容により異なります）', learning:'健康的な生活習慣、セルフケア、心身のバランス', description:'毎日の暮らしの中で、自分と身近な人の心身を大切にする学びです。' },
  { category: 'life', icon:'✎', title:'生活・実用スキル', audience:'学生・社会人・シニア', learning:'暮らしの工夫、実践的な知識、学び直し', description:'日々の生活に役立つ知恵や新たなスキルを、無理なく身につけます。' },
  { category: 'family', icon:'☀', title:'子育て・地域交流', audience:'保護者・子ども・地域の皆さま', learning:'親子での活動、交流、子育てに関する対話', description:'地域のつながりを育て、お互いの成長を支え合う時間をつくります。' },
  { category: 'faith', icon:'✦', title:'聖書・人生を考える', audience:'聖書に関心のある方（信仰の有無は問いません）', learning:'聖書の物語、愛と希望、人生についての対話', description:'聖書のメッセージに触れながら、人生や人との関わりを自由に考えます。' }
];
const cards = [...document.querySelectorAll('.course-card[data-category]')];
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const courseSearch = document.querySelector('#course-search');
let selectedCategory = 'all';
function filterCourses(){
  const term = (courseSearch.value || '').trim().toLocaleLowerCase('ja');
  let visible = 0;
  cards.forEach(card => {
    const matchesCategory = selectedCategory === 'all' || card.dataset.category === selectedCategory;
    const matchesTerm = card.textContent.toLocaleLowerCase('ja').includes(term);
    card.hidden = !(matchesCategory && matchesTerm);
    if (!card.hidden) visible++;
  });
  document.querySelector('#no-results').hidden = visible !== 0;
}
filterButtons.forEach(button => button.addEventListener('click', () => {
  selectedCategory = button.dataset.filter;
  filterButtons.forEach(item => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  filterCourses();
}));
courseSearch.addEventListener('input', filterCourses);
const dialog = document.querySelector('#course-dialog');
const dialogText = (selector, value) => {document.querySelector(selector).textContent=value;};
cards.forEach(card => {
  const course = courses.find(item => item.category === card.dataset.category);
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'detail-button';
  button.textContent = '講座の詳細を見る ↗';
  button.setAttribute('aria-label', `${course.title}の詳細を見る`);
  button.addEventListener('click', () => {
    dialogText('#dialog-icon', course.icon);
    dialogText('#dialog-title', course.title);
    dialogText('#dialog-description', course.description);
    dialogText('#dialog-audience', course.audience);
    dialogText('#dialog-learning', course.learning);
    if (typeof dialog.showModal === 'function') dialog.showModal();
  });
  card.querySelector('.card-body').appendChild(button);
});
dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.querySelector('.dialog-bottom-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
