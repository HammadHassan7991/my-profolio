var typed = new Typed('.typing', {
    strings: ["", 'Web developer', 'Front-End Developer', 'Back-end Developer'],
    typeSpeed: 100,
    BackSpeed: 30,
    loop: true
})

//////////////////////////////Side Menu////////////////////////////////////////


console.log($('.navB li').length);

for (let i = 0; i < $('.navB li').length; i++) {
    const sidebarOpt = $($('.navB li a')[i])

    sidebarOpt.on('click', (e) => {

        for (let j = 0; j < $('.Section').length; j++) {
            $($('.Section')[j]).removeClass('back-section')
        }

        for (let k = 0; k < $('.navB li').length; k++) {
            if ($($('.navB li a')[k]).hasClass('active')) {
                $($('.Section')[k]).addClass('back-section')
            }
            $($('.navB li a')[k]).removeClass('active')
        }

        $(e.target).addClass('active');
        showSection(e.target)
        // if (window.innerWidth < 1200) {
        //     asideToggler()
        // }
    })
}

const showSection = (p) => {
    const sectionlength = $('.Section').length
    for (let i = 0; i < sectionlength; i++) {
        $($('.Section')[i]).removeClass('active')
    }
    const target = $(p).attr('href').split('#')[1];
    // console.log(target);
    $(`#${target}`).addClass('active')

}


// //////////////////////////////////Toggle Menu Button/////////////////

$('.nav-toggler').on('click', (e) => {
    asideToggler();
})

const asideToggler = () => {
    $('.aside').toggleClass('open')
    $('.nav-toggler').toggleClass('open')
    $('.Section').toggleClass('open')

}

