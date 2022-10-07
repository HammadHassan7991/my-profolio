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

        // for (let j = 0; j < $('.Section').length; j++) {
        //     $($('.Section')[j]).removeClass('back-section')
        // }
        removeBackSection()

        for (let k = 0; k < $('.navB li').length; k++) {
            if ($($('.navB li a')[k]).hasClass('active')) {
                // $($('.Section')[k]).addClass('back-section')
                addBackSection(k)
            }
            $($('.navB li a')[k]).removeClass('active')
        }

        $(e.target).addClass('active');
        showSection(e.target)
        if (window.innerWidth < 1200) {
            asideToggler()
        }
    })
}

const addBackSection = (num) => {
    $($('.Section')[num]).addClass('back-section')
}

const removeBackSection = () => {
    for (let j = 0; j < $('.Section').length; j++) {
        $($('.Section')[j]).removeClass('back-section')
    }
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
$('.Section').on('click', () => {
    if ($('.aside').hasClass('open')) {
        asideToggler();
    }

})

const asideToggler = () => {
    $('.aside').toggleClass('open')
    $('.nav-toggler').toggleClass('open')
    $('.Section').toggleClass('open')

}


//////////////////////////////////////////Hire me/////////////////////////
const updateNav = (el) => {
    for (let i = 0; i < $('.navB li').length; i++) {
        $($('.navB li a')[i]).removeClass('active')
        const target = $(el).attr('href').split('#')[1];
        if (target === $($('.navB li a')[i]).attr('href').split('#')[1]) {
            $($('.navB li a')[i]).addClass('active')
        }

    }
}
$('.hire-me').on('click', (e) => {
    // console.log(e.target);
    const section_index = $(e.target).attr('data-section-index')
    console.log(section_index);
    showSection(e.target)
    updateNav(e.target)
    removeBackSection()
    addBackSection(section_index)

})