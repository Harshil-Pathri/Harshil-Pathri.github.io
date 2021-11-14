var prompts = [
    {
        prompt: 'Prompt1',
        class: 'group0',
        elizabeth: [0, 1, 0, -1, -2],
        mr_bingley: [0, 1, 0, -1, -2],
        mr_darcy: [0, 1, 0, -1, -2],
        jane: [0, 1, 0, -1, -2],
        lydia: [0, 1, 0, -1, -2],
        ms_bingley: [0, 1, 0, -1, -2],
        mr_bennet: [0, 1, 0, -1, -2],
        ms_bennet: [0, 1, 0, -1, -2],
        ms_darcy: [0, 1, 0, -1, -2],
        mr_collins: [0, 1, 0, -1, -2]
    },
    {
        prompt: 'Prompt2',
        class: 'group1',
        elizabeth: [0, 3, 0, -1, -10],
        mr_bingley: [0, 1, 0, -1, 10],
        mr_darcy: [0, 1, 0, -1, -2],
        jane: [0, 1, 0, -1, 20],
        lydia: [0, 1, 0, -1, -2],
        ms_bingley: [0, 1, 0, -1, -2],
        mr_bennet: [0, 1, 0, -1, -2],
        ms_bennet: [0, 1, 0, -1, -2],
        ms_darcy: [0, 1, 0, -1, -2],
        mr_collins: [0, 1, 0, -1, -2]
    }
    
]

var elizabeth = 0;
var mr_bingley = 0;
var mr_darcy = 0;
var jane = 0;
var lydia = 0;
var ms_bingley = 0;
var mr_bennet = 0;
var ms_bennet = 0;
var ms_darcy = 0;
var mr_collins = 0;

function Mr_Darcy(i, index) {
    return prompts[i].mr_darcy[index];
}

function Jane(i, index) {
    return prompts[i].jane[index];
}

function Lydia(i, index) {
    return prompts[i].lydia[index];
}

function Ms_Bingley(i, index) {
    return prompts[i].ms_bingley[index];
}

function Mr_Bennet(i, index) {
    return prompts[i].mr_bennet[index];
}

function Ms_Darcy(i, index) {
    return prompts[i].ms_darcy[index];
}

function Mr_Collins(i, index) {
    return prompts[i].mr_collins[index];
}

function Ms_Bennet(i, index) {
    return prompts[i].ms_bennet[index];
}

function Elizabeth(i, index) {
    return prompts[i].elizabeth[index];
}

function Mr_Bingley(i, index) {
    return prompts[i].mr_bingley[index];
}

var prompt_values = [
    {
        value: 'Strongly Agree', 
        class: 'btn-default btn-strongly-agree',
        weight: 0
    },
    {
        value: 'Agree',
        class: 'btn-default btn-agree',
        weight: 1,
    }, 
    {
        value: 'Neutral', 
        class: 'btn-default',
        weight: 2
    },
    {
        value: 'Disagree',
        class: 'btn-default btn-disagree',
        weight: 3
    },
    { 
        value: 'Strongly Disagree',
        class: 'btn-default btn-strongly-disagree',
        weight: 4
    }
]

function createPromptItems() {
    for (var i = 0; i < prompts.length; i++) {
        var prompt_li = document.createElement('li');
        var prompt_p = document.createElement('p');
        var prompt_text = document.createTextNode(prompts[i].prompt);

        prompt_li.setAttribute('class', 'list-group-item prompt');
        prompt_p.appendChild(prompt_text);
        prompt_li.appendChild(prompt_p);

        document.getElementById('quiz').appendChild(prompt_li);
    }
}

function createValueButtons() {
    for (var li_index = 0; li_index < prompts.length; li_index++) {
        var group = document.createElement('div');
        group.className = 'btn-group btn-group-justified';

        for (var i = 0; i < prompt_values.length; i++) {
            var btn_group = document.createElement('div');
            btn_group.className = 'btn-group';

            var button = document.createElement('button');
            var button_text = document.createTextNode(prompt_values[i].value);
            button.className = 'group' + li_index + ' value-btn btn ' + prompt_values[i].class;
            button.appendChild(button_text);

            btn_group.appendChild(button);
            group.appendChild(btn_group);

            document.getElementsByClassName('prompt')[li_index].appendChild(group);
        }
    }
}

createPromptItems();
createValueButtons();

function findValueWeight(values, value) {
    var val = 0;

    for (var i = 0; i < values.length; i++) {
        if (values[i].value === value) {
            val = values[i].weight;
        }
    }

    return val;
}

$('.value-btn').mousedown(function () {
    var classList = $(this).attr('class');
    var classArr = classList.split(" ");
    var this_group = classArr[0];

    
        elizabeth -= Elizabeth(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
        jane -= Jane(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
        mr_bingley -= Mr_Bingley(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
        lydia -= Lydia(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
        mr_darcy -= Mr_Darcy(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
        ms_bingley -= Ms_Bingley(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
        mr_bennet -= Mr_Bennet(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
        ms_bennet -= Ms_Bennet(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
        ms_darcy -= Ms_Darcy(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
        mr_collins -= Mr_Collins(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
        $('.'+this_group).removeClass('active');

        $(this).addClass('active');
        elizabeth += Elizabeth(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $(this).text()));
        jane += Jane(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $(this).text()));
        mr_bingley += Mr_Bingley(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $(this).text()));
        lydia += Lydia(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $(this).text()));
        mr_darcy += Mr_Darcy(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $(this).text()));
        ms_bingley += Ms_Bingley(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $(this).text()));
        mr_bennet += Mr_Bennet(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $(this).text()));
        ms_bennet += Ms_Bennet(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $(this).text()));
        ms_darcy += Ms_Darcy(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $(this).text()));
        mr_collins += Mr_Collins(parseInt(this_group.substr(5,)), findValueWeight(prompt_values, $(this).text()));
    
    console.log(jane)
})

function getMax() {
    var max = "elizabeth";
    var max_val = elizabeth;
    if (max_val < jane) {
        max = "jane";
        max_val = jane;
    }
    if (max_val < mr_bingley) {
        max = "mr_bingley";
        max_val = mr_bingley;
    }
    if (max_val < mr_darcy) {
        max = "mr_darcy";
        max_val = mr_darcy;
    }
    if (max_val < lydia) {
        max = "lydia";
        max_val = lydia;
    }
    if (max_val < ms_bingley) {
        max = "ms_bingley";
        max_val = ms_bingley;
    }
    if (max_val < mr_bennet) {
        max = "mr_bennet";
        max_val = mr_bennet;
    }
    if (max_val < ms_bennet) {
        max = "ms_bennet";
        max_val = ms_bennet;
    }
    if (max_val < ms_darcy) {
        max = "ms_darcy";
        max_val = ms_darcy;
    }
    if (max_val < mr_collins) {
        max = "mr_collins";
        max_val = mr_collins;
    }
    console.log(jane)
    console.log(elizabeth)
    return max;
}


$('#submit-btn').click(function () {
    $('.results').removeClass('hide');
    $('.results').addClass('show');
    var max = getMax();
    
    if(max === "elizabeth") {
        document.getElementById('results').innerHTML = '<b>You are Elizabeth!</b><br><br>';
    } 
    else if(max === "jane") {
        document.getElementById('results').innerHTML = '<b>You are Jane!</b><br><br>';
    }
    else if(max === "mr_bingley") {
        document.getElementById('results').innerHTML = '<b>You are mr_bingley!</b><br><br>';
    }
    else if(max === "mr_darcy") {
        document.getElementById('results').innerHTML = '<b>You are mr_darcy!</b><br><br>';
    }
    else if(max === "lydia") {
        document.getElementById('results').innerHTML = '<b>You are lydia!</b><br><br>';
    }
    else if(max === "ms_bingley") {
        document.getElementById('results').innerHTML = '<b>You are ms_bingley!</b><br><br>';
    }
    else if(max === "mr_bennet") {
        document.getElementById('results').innerHTML = '<b>You are mr_bennet!</b><br><br>';
    }
    else if(max === "ms_bennet") {
        document.getElementById('results').innerHTML = '<b>You are ms_bennet!</b><br><br>';
    }
    else if(max === "ms_darcy") {
        document.getElementById('results').innerHTML = '<b>You are ms_darcy!</b><br><br>';
    }
    else {
        document.getElementById('results').innerHTML = '<b>You are mr_collins!</b><br><br>';
    }

    $('#quiz').addClass('hide');
    $('#submit-btn').addClass('hide');
    $('#retake-btn').removeClass('hide');
})

$('#retake-btn').click(function () {
    $('#quiz').removeClass('hide');
    $('#submit-btn').removeClass('hide');
    $('#retake-btn').addClass('hide');

    $('.results').addClass('hide');
    $('.results').removeClass('show');
})