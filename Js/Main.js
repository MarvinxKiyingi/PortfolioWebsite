$(function () {
  const hamburger = $('.BurgerMenuBtn');

  hamburger.on('click', toggleMenu);
  renderPojects();
});

function renderPojects() {
  // Creating a constructor to make the structure clear and the porocess easier
  class Project {
    constructor(Id, Title, DesktopImage, MobileImage, Description, GitHubLink) {
      this.Id = Id;
      this.Title = Title;
      this.DesktopImage = DesktopImage;
      this.MobileImage = MobileImage;
      this.Description = Description;
      this.GitHubLink = GitHubLink;
      // this.WebbPageLink = WebbPageLink;
    }
  }
  // This variable is made to make automate the Id-number
  let Id = 0;

  //This is the array that i use to add more products
  let products = [
    new Project(
      Id++,
      'Discover Stockholm',
      '/assets/Images/discoverStockholm desktop.png',
      '/assets/Images/discoverStockholm mobile.png',
      'A webshop that has an emulation of a payment. It was created in a group for school focused on objects.',
      'https://github.com/MarvinxKiyingi/discoverStockholm.git'
    ),
    new Project(
      Id++,
      'Todo List app',
      '/assets/Images/todoListApp Desktop.png',
      '/assets/Images/todoListApp mobile.png',
      'A todo list app that is connected to a databade. This is mad to learn Node Js',
      'https://github.com/MarvinxKiyingi/TodoListAppNode.git'
    ),
    new Project(
      Id++,
      'How to build a PC',
      '/assets/Images/myFirstCodedWebbsite Desktop.png',
      '/assets/Images/myFirstCodedWebbsite Mobile.png',
      'First ever webbpage made in high school. I combined three subjects photography, IT and web development',
      'https://github.com/MarvinxKiyingi/firstEverCodedWebbsite.git'
    ),
    new Project(
      Id++,
      'Recreate a design',
      '/assets/Images/recreateDesign desktop.png',
      '/assets/Images/recreateDesign mobile .png',
      'This was created from images that was given to us from our teacher to recreate it with HTML,CSS & Java Script',
      'https://github.com/MarvinxKiyingi/recreateDesign.git'
    ),
  ];

  //Using J.Query to create the HTML for each product.
  products.forEach((project) => {
    let projectContainer = $('<div>').addClass('Project').appendTo($('.ProjectsContainer'));

    $('<h1>').text(project.Title).appendTo(projectContainer);
    $('<a>').addClass('GitHubLink').attr('href', project.GitHubLink).text('GitHub Repo').appendTo(projectContainer);
    $('<img>').addClass('DesktopImg').attr('src', project.DesktopImage).appendTo(projectContainer);
    $('<img>').addClass('MobileImg').attr('src', project.MobileImage).appendTo(projectContainer);
    $('<p>').text(project.Description).appendTo(projectContainer);
  });
}

function toggleMenu() {
  const navLinks = $('.Menu');
  $(this).toggleClass('animate');
  $(navLinks).toggleClass('show');
}
