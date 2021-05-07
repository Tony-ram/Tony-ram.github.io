var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.scene({

triggerElement:'#ourwork'

)}

.setClassToggle('#ourwork','fade-in')
.addIndicators({
    name : 'INDICATIONS',
    indent : 200
})
.addTo(controller);