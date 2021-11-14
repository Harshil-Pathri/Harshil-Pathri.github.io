var prompts = [
    {
        prompt: 'I will occassionally gossip about others',
        class: 'group0',
        elizabeth: [0, 0, 0, 0, 0],
        mr_bingley: [0, 0, 0, 0, 1],
        mr_darcy: [0, 0, 0, 0, 0],
        jane: [0, 0, 0, 0, 1],
        lydia: [0, 0, -1, -2, -3],
        ms_bingley: [0, 0, 0, -1, -2],
        mr_bennet: [0, 0, 1, 2, 3],
        ms_bennet: [0, 0, -1, -2, -3],
        ms_darcy: [0, 0, 0, 1, 1],
        mr_collins: [0, 0, 0, 0, -1]
    },
    {
        prompt: 'I act rashly and don\'t always consider all consequences before taking large decisions',
        class: 'group1',
        elizabeth: [0, 0, 2, 4, 5],
        mr_bingley: [0, 0, 0, 1, 2],
        mr_darcy: [0, 0, 1, 3, 4],
        jane: [0, 0, 0, 1, 1],
        lydia: [0, -1, -2, -4, -5],
        ms_bingley: [0, 0, 1, 2, 3],
        mr_bennet: [0, 0, 2, 3, 4],
        ms_bennet: [0, 0, 0, -1, -2],
        ms_darcy: [0, 0, 0, 0, 1],
        mr_collins: [0, 0, 0, -1, -2]
    },
    {
        prompt: 'I don\'t really see good in everyone and see some people as better than others',
        class: 'group2',
        elizabeth: [0, 0, 0, -1, -2],
        mr_bingley: [0, 0, 1, 2, 3],
        mr_darcy: [0, 0, 0, -1, -2],
        jane: [0, 0, 1, 3, 4],
        lydia: [0, 0, -1, -2, -3],
        ms_bingley: [0, 0, -1, -1, -2],
        mr_bennet: [0, 0, 0, 1, 1],
        ms_bennet: [0, 0, -1, -1, -2],
        ms_darcy: [0, 0, 1, 1, 2],
        mr_collins: [0, 0, 0, -1, -1]
    },
    {
        prompt: 'I don\'t analyze people and don\'t care about their true intentions',
        class: 'group3',
        elizabeth: [0, 0, 1, 2, 3],
        mr_bingley: [0, 0, 0, 1, 1],
        mr_darcy: [0, 0, 1, 3, 5],
        jane: [0, 0, 0, 1, 0],
        lydia: [0, 0, -1, -3, -4],
        ms_bingley: [0, 0, 0, 1, 3],
        mr_bennet: [0, 0, 0, 1, 2],
        ms_bennet: [0, 0, 0, -1, -2],
        ms_darcy: [0, 0, 0, 0, 0],
        mr_collins: [0, 0, 0, 0, -1]
    },
    {
        prompt: 'I am not quiet nor shy, and I love to draw attention to myself',
        class: 'group4',
        elizabeth: [0, 0, 0, 0, -1],
        mr_bingley: [0, 0, 0, 0, -1],
        mr_darcy: [0, 0, 0, 0, -1],
        jane: [0, 0, 0, 0, -1],
        lydia: [0, 0, 0, -2, -3],
        ms_bingley: [0, 0, 0, 0, -1],
        mr_bennet: [0, 0, 0, 0, -1],
        ms_bennet: [0, 0, -1, -2, -2],
        ms_darcy: [0, 0, 2, 4, 5],
        mr_collins: [0, 0, 0, 0, -1]
    },
    {
        prompt: 'I am not religious and dislike religion',
        class: 'group5',
        elizabeth: [0, 0, 0, 0, 0],
        mr_bingley: [0, 0, 0, 0, 0],
        mr_darcy: [0, 0, 0, 0, 0],
        jane: [0, 0, 0, 0, 0],
        lydia: [0, 0, 0, 0, 0],
        ms_bingley: [0, 0, 0, 0, 0],
        mr_bennet: [0, 0, 0, 0, 0],
        ms_bennet: [0, 0, 0, 0, 0],
        ms_darcy: [0, 0, 0, 0, 0],
        mr_collins: [0, 0, 1, 3, 4]
    },
    {
        prompt: 'I will do anything to marry the person of my dreams',
        class: 'group6',
        elizabeth: [0, 0, 0, 0, 1],
        mr_bingley: [0, 0, 0, 0, 1],
        mr_darcy: [0, 0, 0, 0, 0],
        jane: [0, 0, 0, 0, 0],
        lydia: [0, 0, 0, -1, -2],
        ms_bingley: [0, 0, 0, -1, -2],
        mr_bennet: [0, 0, 0, 0, 0],
        ms_bennet: [0, 0, 0, 0, 0],
        ms_darcy: [0, 0, 0, 0, 0],
        mr_collins: [0, 0, 0, 0, 0]
    },
    {
        prompt: 'I don\'t care much about my family and am not willing to do much for them',
        class: 'group7',
        elizabeth: [0, 0, 1, 2, 2],
        mr_bingley: [0, 0, 0, 1, 2],
        mr_darcy: [0, 0, 1, 3, 4],
        jane: [0, 0, 0, 2, 3],
        lydia: [0, 0, 0, -1, -2],
        ms_bingley: [0, 0, 0, 0, 1],
        mr_bennet: [0, 0, 0, 1, 2],
        ms_bennet: [0, 0, 1, 3, 4],
        ms_darcy: [0, 0, 0, 1, 2],
        mr_collins: [0, 0, 0, 0, -1]
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

        prompt_li.setAttribute('class', 'list-group-item prompt blue-bkgd');
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
        document.getElementById('results').innerHTML = '<b>Your personality is closest to mine!<br>I am an intelligent and analytical individual. Though I do not wish to appear as self-conceited, I am, with the possible exception of Jane, the most sensible among my sisters.</b><br><br>';
    } 
    else if(max === "jane") {
        document.getElementById('results').innerHTML = '<b>Your personality is closest to Jane\'s!<br>Jane is the most kind and amiable soul I have ever known, and she can see goodness in everyone.</b><br><br>';
    }
    else if(max === "mr_bingley") {
        document.getElementById('results').innerHTML = '<b>Your personality is closest to Mr. Bingley\'s!<br>With the possible exception of Mr. Darcy, Mr. Bingley is the other most agreeable person I have ever met. He is engaged to Jane, and I can not think of any one else who could even be considered as worth Jane\'s hand in marriage.</b><br><br>';
    }
    else if(max === "mr_darcy") {
        document.getElementById('results').innerHTML = '<b>Your personality is closest to Mr. Darcy\'s!<br>Darcy is one of the only people I have ever met who matches my skill in the analysis of people. He is extremely rich, and he mainly only has pride that anyone of his large stature and power would.</b><br><br>';
    }
    else if(max === "lydia") {
        document.getElementById('results').innerHTML = '<b>Your personality is closest to Lydia\'s!<br>Lydia is a very frivolous girl who has a large fascination with officers, and has been attracted to them her entire life.</b><br><br>';
    }
    else if(max === "ms_bingley") {
        document.getElementById('results').innerHTML = '<b>Your personality is closest to Ms. Bingley\'s!<br>Ms. Bingley is a woman who was willing to do anything to marry Mr. Darcy. In one of her plights, she separated Mr. Bingley and Jane.</b><br><br>';
    }
    else if(max === "mr_bennet") {
        document.getElementById('results').innerHTML = '<b>Your personality is closest to Mr. Bennet\'s!<br>My father, Mr. Bennet, is very smart and is quite abnormal in that he does not often follow the social norm. In terms of his personality, he is "...a mixture of quick parts, sarcastic humour, reserve, and caprice" (Austen 3).</b><br><br>';
    }
    else if(max === "ms_bennet") {
        document.getElementById('results').innerHTML = '<b>Your personality is closest to Mrs. Bennet\'s!<br>Mrs. Bennet is very social and gossips with everyone about everything. She is "... a woman of mean understanding, little information, and uncertain temper ... [and the] business of her life [is] to get her daughters married" (Austen 3).</b><br><br>';
    }
    else if(max === "ms_darcy") {
        document.getElementById('results').innerHTML = '<b>Your personality is closest to Ms. Darcy\'s!<br>Ms. Darcy is the very shy and kind-hearted sister of Mr. Darcy. My first imagination of her as a egoistical rich woman, based on Mr. Wickham\'s description, could not have been any further from reality.</b><br><br>';
    }
    else {
        document.getElementById('results').innerHTML = '<b>Your personality is closest to Mr. Collin\'s!<br>Mr. Collins is a clergyman who is a "conceited, pompous, narrow-minded, silly man" (Austen 123).</b><br><br>';
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