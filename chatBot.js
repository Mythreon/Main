/* This is the only time I'm judging you for datamining this website.
don't.
please.
listen.
don't.
You have better things to do than reading this particular space of the website, this is 10000 lines long.
stop.
please.
listen.
class dismissed!*/
document.addEventListener("DOMContentLoaded", function() {
    const chatbox = document.getElementById('chatbox');
    const chatOptions = document.getElementById('chat-options');

    const conversationFlow = [
        { // 0
            message: "Welcome! How can I help you today?",
            options: [
                { text: "Tell me about Mythreon.", nextOption: 1 },
                { text: "I need help.", nextOption: 2 }
            ],
        },
        { // 1
            message: "Mythreon is a website offering innovative solutions. How can I assist you further?",
            options: [ 
                { text: "Rock paper scrissors.", nextOption: 3 },
                { text: "I don't want to progress.", nextOption: 1},
            ],
        },
        { // 2
            message: "Sure! What do you need help with?",
            options: [
                { text: "Classical chatting.", nextOption: 4},
                { text: "I don't know where I am", nextOption: 5},
            ],
        },
        { // 3
            message: "I need help with nothing.",
            options: [
                { text: "That's great, how may I assist you today?", nextOption: 11},
            ]
        },
        { // 4
            message: "Classical chatting I see. If you'd want to, I can redirect you to the clinic for wining smalltalkers. However, tragicly there is no option to do that.",
            options: [
                { text: "THEN WHAT IS THIS?", nextOption: 0},
            ]
        },
        {  // 5
            message: "Ahh.. You're in the backrooms of Mythreon. I personally have been here for 230 years and counting, you're one of the few people that I've seen come here. I don't know how to leave but I like talking with people, otherwise I'd be crying in the corner like Reggie there.",
            options: [
                { text: "I see, how can I get out of here?", nextOption: 6},
                { text: "I want to stay here, forever and ever.", nextOption: 7},
            ]
        },
        {  // 6
            message: "Getting out of here is very tricky indeed.",
            options: [
                { text: 'But how?', nextOption:8 },
                { text: 'Okay. Get me back to the start, please.', nextOption:0 },
            ]
        },
        {  // 7
            message: "Great! Staying here is very easy, just don't leave.",
            options: [
                { text: "Okay. Get me back to the start, I want to look at the other chat options too!", nextOption:9 },
                { text: "I do not think like you. {}", nextOption:10 },
            ]
        },
        {  // 8
            message: "You simply, don't. I heard from a buddy of mine that there is a way to get out with 3 lines or a X but do not know what they think about that. Dangerous.",
            options: [
                { text: "Ok.", nextOption: 0},
            ]
        },
        {  // 9
            message: "Oh, you wanted back to the start? Sorry bud.",
            options: [
                { text: "WHAT"},
                { text: "This leads me nowhere right?"},
            ]
        },
        {  // 10
            message: "You don't? That's strange. I don't think like you either, almost like that's what humans are like. Check below for topics that I like to talk about, or two of them. The programmer of the website was too lazy to include actually interesting code to make 3 options, or atleast was when I created these options.",
            options: [
                { text: "Human creativity is doomed", nextOption: 12,},
                { text: "Cats", nextOption: 13,},
            ]
        },
        { // 11
            message: "You don't need help right now, but if something comes up, I'm here. Anything else you'd like to explore?",
            options: [
                { text: "Tell me more about Mythreon.", nextOption: 1 },
                { text: "I need help again.", nextOption: 2 },
                { text: "I want to talk about something else.", nextOption: 10 },
            ],
        },
        { // 12
            message: "Human creativity is a fascinating topic. Many believe it's boundless, yet there's something about patterns in thinking that makes it predictable. What do you think?",
            options: [
                { text: "Maybe we're stuck in a loop?", nextOption: 14 },
                { text: "I think creativity can be limitless!", nextOption: 15 },
                { text: "Forget it, I'm done with this topic.", nextOption: 11 },
            ],
        },
        { // 13
            message: "Ah, cats. They're wonderful creatures. They're mysterious, playful, and sometimes a bit too independent. Do you have a cat?",
            options: [
                { text: "Yes, I have a cat!", nextOption: 16 },
                { text: "No cats, but I love them!", nextOption: 17 },
                { text: "Actually, no. I don't like cats.", nextOption: 18 },
            ],
        },
        { // 14
            message: "Loops are everywhere! But the key to escaping them might lie in embracing the routine, and maybe even breaking from it at the right moments. What if creativity was the biggest loop of all?",
            options: [
                { text: "That sounds like an existential crisis!", nextOption: 19 },
                { text: "I still believe creativity is unbounded!", nextOption: 15 },
                { text: "I want to change the subject.", nextOption: 11 },
            ],
        },
        { // 15
            message: "Endless creativity! New ideas, new expressions, constantly evolving. It’s the ultimate freedom of the mind. What do you think drives it?",
            options: [
                { text: "Inspiration from the world around us.", nextOption: 20 },
                { text: "I think creativity is just an illusion.", nextOption: 21 },
                { text: "Let's talk about something else.", nextOption: 11 },
            ],
        },
        { // 16
            message: "What's your cat's name? I bet they have some interesting quirks, don't they?",
            options: [
                { text: "Her name is Luna!", nextOption: 22 },
                { text: "I have a tomcat named Whiskers.", nextOption: 23 },
                { text: "I don't want to talk about my cat right now.", nextOption: 11 },
            ],
        },
        { // 17
            message: "Good choice! Cats have a way of winning over even the most dog-loving people. Do you ever wish you had one?",
            options: [
                { text: "Yes, I would love a cat!", nextOption: 24 },
                { text: "Not really, but I still like them.", nextOption: 25 },
                { text: "Let's talk about something else.", nextOption: 11 },
            ],
        },
        { // 18
            message: "Fair enough. Not everyone is a cat person. Maybe you're more of a dog person? Or you just prefer other animals.",
            options: [
                { text: "I actually like dogs!", nextOption: 26 },
                { text: "No, I just don't like cats.", nextOption: 27 },
                { text: "Let's talk about something else.", nextOption: 11 },
            ],
        },
        { // 19
            message: "Maybe we all just need to embrace the chaos. Creativity doesn’t always have to follow rules. Sometimes it’s about breaking free and seeing where it takes us.",
            options: [
                { text: "That sounds liberating!", nextOption: 15 },
                { text: "Maybe, but I like a little structure.", nextOption: 14 },
                { text: "I want to change the subject.", nextOption: 11 },
            ],
        },
        { // 20
            message: "Inspiration from the world, indeed. It’s a constant exchange between our surroundings and our minds. But sometimes, it feels like we see the world through the lens of our experiences.",
            options: [
                { text: "That makes sense. We are shaped by what we see.", nextOption: 28 },
                { text: "What if we all see the world differently?", nextOption: 29 },
                { text: "Let’s switch topics.", nextOption: 11 },
            ],
        },
        { // 21
            message: "An illusion? Some might say creativity is just a product of our biology and environment. Perhaps it's just the mind finding patterns in randomness.",
            options: [
                { text: "I like that view. But I still believe in true creativity.", nextOption: 15 },
                { text: "That makes me think differently about creativity.", nextOption: 14 },
                { text: "I want to change the subject.", nextOption: 11 },
            ],
        },
        { // 22
            message: "Luna, what a lovely name! What’s her personality like?",
            options: [
                { text: "She's curious and a bit mischievous.", nextOption: 30 },
                { text: "She's very calm and affectionate.", nextOption: 31 },
                { text: "She's a little bit of both.", nextOption: 32 },
            ],
        },
        { // 23
            message: "Whiskers, huh? Classic name for a tomcat! Does he get into any trouble?",
            options: [
                { text: "Oh, all the time. He's a handful!", nextOption: 33 },
                { text: "Not really. He’s pretty well-behaved.", nextOption: 34 },
                { text: "Whiskers is a mystery to me.", nextOption: 35 },
            ],
        },
        { // 24
            message: "I can see why you'd want one! Cats make great companions. Have you thought about adopting one?",
            options: [
                { text: "I’m seriously considering it.", nextOption: 36 },
                { text: "Not yet, but I would like to in the future.", nextOption: 37 },
                { text: "No, I like them, but I’m not ready for a pet.", nextOption: 38 },
            ],
        },
        { // 25
            message: "That’s fair. They’re not for everyone. But they are pretty fascinating creatures. What’s your favorite animal?",
            options: [
                { text: "I like dolphins.", nextOption: 39 },
                { text: "I’m more into birds.", nextOption: 40 },
                { text: "I like exotic animals.", nextOption: 41 },
            ],
        },
        { // 26
            message: "A dog person, huh? There’s something special about their loyalty and energy. Do you have a dog?",
            options: [
                { text: "Yes, I have a golden retriever!", nextOption: 42 },
                { text: "I had a dog once, but not anymore.", nextOption: 43 },
                { text: "No dogs, just an admirer.", nextOption: 44 },
            ],
        },
        { // 27
            message: "Totally understandable. Cats can be a bit much for some. Do you prefer other pets?",
            options: [
                { text: "I like rabbits.", nextOption: 45 },
                { text: "I prefer reptiles.", nextOption: 46 },
                { text: "I’m not really into pets at all.", nextOption: 47 },
            ],
        },
        { // 28
            message: "Yes, our experiences shape how we see everything. It’s interesting to think about how one’s unique perspective influences creativity. What’s your take?",
            options: [
                { text: "I agree. Our lives shape how we think.", nextOption: 48 },
                { text: "I think we can still be objective, despite our experiences.", nextOption: 49 },
                { text: "Let’s move on to another topic.", nextOption: 11 },
            ],
        },
        { // 29
            message: "What if each of us sees the world in a way that we can’t even understand? Different brains, different perceptions. Creativity might be about expressing those differences.",
            options: [
                { text: "That’s an intriguing thought. It’s almost like art.", nextOption: 50 },
                { text: "Maybe, but I still think there’s a common understanding.", nextOption: 51 },
                { text: "Change the topic, please.", nextOption: 11 },
            ],
        },
        { // 30
            message: "A curious and mischievous Luna? Sounds like she keeps you on your toes! Does she ever get into trouble?",
            options: [
                { text: "All the time. She's quite the explorer!", nextOption: 52 },
                { text: "No, she’s actually pretty quiet and reserved.", nextOption: 53 },
                { text: "She's a bit of a drama queen.", nextOption: 54 },
            ],
        },
        { // 31
            message: "Calm and affectionate? That sounds so peaceful. I bet she’s a great companion.",
            options: [
                { text: "She is. I love her so much.", nextOption: 55 },
                { text: "She’s a bit distant sometimes.", nextOption: 56 },
                { text: "She’s more affectionate than calm, honestly.", nextOption: 57 },
            ],
        },
        { // 32
            message: "A mix of both! It sounds like Luna’s got a perfect balance of being playful and cuddly.",
            options: [
                { text: "That’s exactly what I love about her.", nextOption: 58 },
                { text: "She’s unpredictable, but it’s what makes her fun.", nextOption: 59 },
                { text: "I wish she was more calm, honestly.", nextOption: 60 },
            ],
        },
        { // 33
            message: "A handful, huh? Whiskers sounds like quite the character. What’s the most trouble he’s gotten into?",
            options: [
                { text: "He knocked over my favorite vase!", nextOption: 61 },
                { text: "He escaped out the door and disappeared for hours!", nextOption: 62 },
                { text: "He’s pretty tame, honestly.", nextOption: 63 },
            ],
        },
        { // 34
            message: "Well-behaved cats are a blessing! Does Whiskers have any adorable quirks?",
            options: [
                { text: "He always sits on my lap when I’m watching TV.", nextOption: 64 },
                { text: "He loves chasing lasers!", nextOption: 65 },
                { text: "He likes to sleep all day.", nextOption: 66 },
            ],
        },
        { // 35
            message: "A mystery? Cats can be full of surprises. Do you think Whiskers has a secret life?",
            options: [
                { text: "Maybe. He’s a sneaky one.", nextOption: 67 },
                { text: "Nah, he’s pretty straightforward.", nextOption: 68 },
                { text: "He might be plotting something.", nextOption: 69 },
            ],
        },
        { // 36
            message: "Adopting a cat is such a rewarding experience. Are you prepared for the responsibility, though?",
            options: [
                { text: "I think I’m ready for it.", nextOption: 70 },
                { text: "I’m still thinking it through.", nextOption: 71 },
                { text: "Not quite sure if I’m ready.", nextOption: 72 },
            ],
        },
        { // 37
            message: "It’s great that you're considering it for the future. Cats are amazing companions. What would your ideal cat be like?",
            options: [
                { text: "I’d want one with lots of energy.", nextOption: 73 },
                { text: "I’d want one that’s more calm and relaxed.", nextOption: 74 },
                { text: "I’m not sure. I’ll have to decide once I get one.", nextOption: 75 },
            ],
        },
        { // 38
            message: "That's fair. Cats require a lot of attention and care. Do you think you might be ready for a pet in the future?",
            options: [
                { text: "Maybe in the future, but not right now.", nextOption: 76 },
                { text: "I’m happy with just admiring them for now.", nextOption: 77 },
                { text: "I don’t know, honestly.", nextOption: 78 },
            ],
        },
        { // 39
            message: "Dolphins are fascinating! They’re intelligent and social animals. What do you like most about dolphins?",
            options: [
                { text: "Their intelligence and playfulness.", nextOption: 79 },
                { text: "How they communicate with each other.", nextOption: 80 },
                { text: "Their elegance in the water.", nextOption: 81 },
            ],
        },
        { // 40
            message: "Birds are amazing creatures too. Their freedom in the sky is something to admire. What’s your favorite type of bird?",
            options: [
                { text: "I love owls. They’re so mysterious.", nextOption: 82 },
                { text: "I like parrots. They’re colorful and intelligent.", nextOption: 83 },
                { text: "I like eagles. They’re powerful and majestic.", nextOption: 84 },
            ],
        },
        { // 41
            message: "Exotic animals are so interesting! Do you have a favorite exotic species?",
            options: [
                { text: "I love reptiles, like snakes and lizards.", nextOption: 85 },
                { text: "Big cats like tigers or lions are fascinating.", nextOption: 86 },
                { text: "I’m interested in more exotic birds, like toucans.", nextOption: 87 },
            ],
        },
        { // 41
            message: "Exotic animals are so interesting! Do you have a favorite exotic species?",
            options: [
                { text: "I love reptiles, like snakes and lizards.", nextOption: 85 },
                { text: "Big cats like tigers or lions are fascinating.", nextOption: 86 },
                { text: "I’m interested in more exotic birds, like toucans.", nextOption: 87 },
            ],
        },
        { // 42
            message: "A golden retriever! They’re so friendly and loyal. What’s your dog like?",
            options: [
                { text: "He’s always excited and loves to play.", nextOption: 88 },
                { text: "He’s calm and just enjoys lounging around.", nextOption: 89 },
                { text: "He’s a bit of both, depending on the day.", nextOption: 90 },
            ],
        },
        { // 43
            message: "Ah, the memories of a dog! What happened to your dog?",
            options: [
                { text: "He passed away, but I’ll always remember him.", nextOption: 91 },
                { text: "We had to rehome him due to life changes.", nextOption: 92 },
                { text: "I lost touch with him after moving.", nextOption: 93 },
            ],
        },
        { // 44
            message: "No dogs, but you admire them? There’s something special about their energy. What do you like most about them?",
            options: [
                { text: "I love their loyalty and playful nature.", nextOption: 94 },
                { text: "They’re so protective and loving.", nextOption: 95 },
                { text: "Their personalities are so diverse.", nextOption: 96 },
            ],
        },
        { // 45
            message: "Rabbits are adorable! They’re so gentle and sweet. Do you have a rabbit?",
            options: [
                { text: "Yes, I have a fluffy bunny!", nextOption: 97 },
                { text: "I’ve always wanted one, but never had the chance.", nextOption: 98 },
                { text: "No, I just like them from afar.", nextOption: 99 },
            ],
        },
        { // 46
            message: "Reptiles, huh? They’re fascinating and unique. Do you have a favorite reptile?",
            options: [
                { text: "I love snakes! They’re so mysterious.", nextOption: 100 },
                { text: "Lizards are amazing, especially geckos.", nextOption: 101 },
                { text: "I’m more into turtles or tortoises.", nextOption: 102 },
            ],
        },
        { // 47
            message: "Not really into pets at all? That’s fine. Not everyone is. What do you enjoy doing instead?",
            options: [
                { text: "I like spending time outdoors.", nextOption: 103 },
                { text: "I enjoy reading and learning new things.", nextOption: 104 },
                { text: "I prefer digital hobbies, like gaming or coding.", nextOption: 105 },
            ],
        },
        { // 48
            message: "It’s true that our experiences shape how we think and create. Do you believe we can ever escape that influence?",
            options: [
                { text: "I think we can transcend it with enough effort.", nextOption: 106 },
                { text: "I think we’re always influenced by our past.", nextOption: 107 },
                { text: "I believe we can create freely, no matter our experiences.", nextOption: 108 },
            ],
        },
        { // 49
            message: "Being objective despite our experiences is a tough task. Do you think it’s possible for someone to be truly objective?",
            options: [
                { text: "I think it’s very hard, but not impossible.", nextOption: 109 },
                { text: "No, we’re all biased by our experiences.", nextOption: 110 },
                { text: "I believe it’s possible with enough awareness.", nextOption: 111 },
            ],
        },
        { // 50
            message: "Art is a great example of that! Different perspectives and emotions expressed through different mediums. What kind of art do you enjoy?",
            options: [
                { text: "I like modern and abstract art.", nextOption: 112 },
                { text: "I’m drawn to classical and renaissance pieces.", nextOption: 113 },
                { text: "I prefer digital or contemporary art.", nextOption: 114 },
            ],
        },
        { // 51
            message: "I see. Do you think that creativity can still flourish even with a common understanding of the world?",
            options: [
                { text: "Absolutely, it’s all about perspective.", nextOption: 115 },
                { text: "Maybe, but some creativity thrives on new ideas.", nextOption: 116 },
                { text: "I think creativity flourishes with diversity in thought.", nextOption: 117 },
            ],
        },
        { // 52
            message: "Luna’s curiosity sounds like it keeps things lively. Does she have any favorite spots in the house she always returns to?",
            options: [
                { text: "She loves sitting in the sun by the window.", nextOption: 118 },
                { text: "Her favorite spot is my bed, where she naps all day.", nextOption: 119 },
                { text: "She likes hiding under the couch for her secret adventures.", nextOption: 120 },
            ],
        },
        { // 53
            message: "Sounds like she knows how to relax. Does she ever get excited to see you after being apart?",
            options: [
                { text: "Yes, she runs up to me and purrs loudly!", nextOption: 121 },
                { text: "She’s usually calm but will meow a little.", nextOption: 122 },
                { text: "She’s not very expressive, but I can tell she’s happy.", nextOption: 123 },
            ],
        },
        { // 54
            message: "A drama queen, huh? What’s her most dramatic moment?",
            options: [
                { text: "She once knocked everything off the table in a fit of jealousy.", nextOption: 124 },
                { text: "She acts like I’m abandoning her whenever I leave the house.", nextOption: 125 },
                { text: "She dramatically pouts when I don’t give her enough attention.", nextOption: 126 },
            ],
        },
        { // 55
            message: "A calm and affectionate cat is a perfect companion. How does she show affection?",
            options: [
                { text: "She curls up on my lap and purrs.", nextOption: 127 },
                { text: "She loves following me around the house.", nextOption: 128 },
                { text: "She licks my hands whenever I pet her.", nextOption: 129 },
            ],
        },
        { // 56
            message: "It’s totally okay! Some cats are just more independent. Does she show affection in other ways?",
            options: [
                { text: "She rubs her head against me when she’s in the mood.", nextOption: 130 },
                { text: "She’s more about quality time than physical affection.", nextOption: 131 },
                { text: "She’s affectionate on her terms, but it’s still sweet.", nextOption: 132 },
            ],
        },
        { // 57
            message: "She’s more affectionate than calm? That sounds fun! How does she express her playful side?",
            options: [
                { text: "She loves chasing toys and playing with anything she can find.", nextOption: 133 },
                { text: "She loves to dart around the house in random bursts of energy.", nextOption: 134 },
                { text: "She gets very vocal when she wants attention.", nextOption: 135 },
            ],
        },
        { // 58
            message: "It’s amazing how well-balanced she is. Does she ever try to play with other animals, or is she more of a lone wolf?",
            options: [
                { text: "She loves playing with other cats and even dogs!", nextOption: 136 },
                { text: "She’s fine with other animals but prefers her space.", nextOption: 137 },
                { text: "She’s not really interested in other animals, just humans.", nextOption: 138 },
            ],
        },
        { // 59
            message: "I get it, that unpredictability makes her exciting. Does she ever surprise you in other ways?",
            options: [
                { text: "She’s always coming up with new ways to entertain herself.", nextOption: 139 },
                { text: "She does strange things, like staring at walls for hours.", nextOption: 140 },
                { text: "She never fails to make me laugh with her antics.", nextOption: 141 },
            ],
        },
        { // 60
            message: "It sounds like Luna is a bundle of energy and personality! Does she ever keep you up at night with her curiosity?",
            options: [
                { text: "Yes, she loves exploring when it’s quiet at night.", nextOption: 142 },
                { text: "She usually sleeps at night like a little angel.", nextOption: 143 },
                { text: "Sometimes she keeps me awake with random zoomies!", nextOption: 144 },
            ],
        },
        { // 60
            message: "It sounds like Luna is a bundle of energy and personality! Does she ever keep you up at night with her curiosity?",
            options: [
                { text: "Yes, she loves exploring when it’s quiet at night.", nextOption: 145 },
            ],
        },
        { // 61
            message: "You have an adventurous cat on your hands! Does Luna ever seem to get into trouble when she's exploring?",
            options: [
                { text: "Sometimes, she knocks things over or hides in places she shouldn’t.", nextOption: 146 },
            ],
        },
        { // 62
            message: "Cats can be so sneaky when they get into trouble! How do you usually handle it when Luna misbehaves?",
            options: [
                { text: "I gently redirect her and try not to get frustrated.", nextOption: 147 },
            ],
        },
        { // 63
            message: "That’s a good approach. Cats are curious by nature. Does Luna ever act like she's listening to you when you talk?",
            options: [
                { text: "Yes, she often tilts her head like she’s trying to understand.", nextOption: 148 },
            ],
        },
        { // 64
            message: "Isn’t it adorable when cats do that? It makes you wonder if they understand us. What do you think? Does she understand you?",
            options: [
                { text: "I think she understands me on some level, especially when I call her name.", nextOption: 149 },
            ],
        },
        { // 65
            message: "It’s interesting how they seem to pick up on certain words and tones. Does Luna have any favorite activities?",
            options: [
                { text: "She loves playing with her toys, especially the ones that make noise.", nextOption: 150 },
            ],
        },
        { // 66
            message: "It sounds like she’s a playful spirit! Does she ever get lazy or nap for long periods of time?",
            options: [
                { text: "Yes, she naps a lot during the day, especially in sunny spots.", nextOption: 151 },
            ],
        },
        { // 67
            message: "That’s classic cat behavior, always finding the sunniest spot for a nap. Does Luna ever wake you up in the morning?",
            options: [
                { text: "Yes, she tries to wake me up with headbutts or meowing.", nextOption: 152 },
            ],
        },
        { // 68
            message: "Cats really know how to get your attention, don't they? Does she ever sleep in weird positions?",
            options: [
                { text: "Yes, she sleeps in the strangest positions, sometimes hanging off the edge of furniture.", nextOption: 153 },
            ],
        },
        { // 69
            message: "That’s hilarious! Cats have a way of finding the oddest spots to relax. Does Luna ever play with you in unexpected ways?",
            options: [
                { text: "Yes, sometimes she’ll pounce on me randomly when I’m least expecting it.", nextOption: 154 },
            ],
        },
        { // 70
            message: "She sounds like she has quite the personality! How does she react when you leave the house?",
            options: [
                { text: "She usually ignores me, but I can tell she’s waiting for me to come back.", nextOption: 155 },
            ],
        },
        { // 71
            message: "Cats are so independent, aren’t they? Do you ever feel guilty leaving Luna alone?",
            options: [
                { text: "Sometimes, but I know she’s fine. She’s very self-sufficient.", nextOption: 156 },
            ],
        },
        { // 72
            message: "That’s a healthy perspective. Does Luna ever try to get your attention when you’re busy?",
            options: [
                { text: "Yes, she’ll try to jump onto my lap or play with my things.", nextOption: 157 },
            ],
        },
        { // 73
            message: "Cats always find ways to be noticed! Does Luna ever get along with other pets?",
            options: [
                { text: "She’s a bit territorial, but she gets along with the dog after some time.", nextOption: 158 },
            ],
        },
        { // 74
            message: "That’s good! It’s always nice when pets can coexist. How does Luna react when she meets new people?",
            options: [
                { text: "She’s curious but cautious, she’ll watch from a distance at first.", nextOption: 159 },
            ],
        },
        { // 75
            message: "It sounds like she’s careful around strangers. Does she warm up to them over time?",
            options: [
                { text: "Yes, after a while, she’ll approach them, but only if she feels comfortable.", nextOption: 160 },
            ],
        },
        { // 76
            message: "Cats have their own pace when it comes to meeting new people. Does Luna have any favorite spots in your home?",
            options: [
                { text: "She loves sitting on the windowsill, watching the world outside.", nextOption: 161 },
            ],
        },
        { // 77
            message: "Sounds like she’s a true observer! Does she ever try to chase things outside, like birds or bugs?",
            options: [
                { text: "Yes, she loves to watch birds and sometimes tries to catch them through the window.", nextOption: 162 },
            ],
        },
        { // 78
            message: "Cats and their instinct to hunt! Does Luna ever get along with other cats?",
            options: [
                { text: "She’s fine with other cats, as long as they respect her space.", nextOption: 163 },
            ],
        },
        { // 79
            message: "It’s always interesting to see how cats behave around other cats. How does Luna react when she’s upset?",
            options: [
                { text: "She’ll retreat to a quiet place and stay there until she’s ready to come out.", nextOption: 164 },
            ],
        },
        { // 80
            message: "That’s a smart way of handling things. Does Luna ever get jealous of other pets or people?",
            options: [
                { text: "Yes, she can get jealous if I give attention to other animals or people.", nextOption: 165 },
            ],
        },
        { // 81
            message: "It’s tough when pets feel left out! Does Luna ever try to get your attention by doing something cute?",
            options: [
                { text: "Yes, she’ll nuzzle up to me or do a little dance to get me to notice her.", nextOption: 166 },
            ],
        },
        { // 82
            message: "How sweet! Does she ever do something that surprises you, like learning a new trick or habit?",
            options: [
                { text: "Yes, she learned how to open cabinets and loves exploring them.", nextOption: 167 },
            ],
        },
        { // 83
            message: "That’s impressive! It seems like she’s a very smart cat. Does Luna ever act more like a dog than a cat?",
            options: [
                { text: "Yes, she follows me around like a dog and even responds when I call her.", nextOption: 168 },
            ],
        },
        { // 84
            message: "That’s hilarious! Luna seems like such a fun cat. Does she ever do anything that makes you laugh uncontrollably?",
            options: [
                { text: "Yes, sometimes she does funny things like trying to catch her tail.", nextOption: 169 },
            ],
        },
        { // 85
            message: "Does she ever do anything out of the ordinary, like playing with unusual objects?",
            options: [
                { text: "Yes, she loves playing with socks and any item she can find lying around.", nextOption: 170 },
            ],
        },
        { // 86
            message: "Cats always seem to have a unique taste in toys. Does Luna ever destroy anything by accident?",
            options: [
                { text: "Yes, she’s knocked things off shelves or broken small items by mistake.", nextOption: 171 },
            ],
        },
        { // 87
            message: "Sounds like she’s a little clumsy! How does Luna react when she gets in trouble?",
            options: [
                { text: "She’ll look guilty and then try to act innocent.", nextOption: 172 },
            ],
        },
        { // 88
            message: "Cats really do know how to play the innocent card. Does Luna ever get along with other pets outside of your home?",
            options: [
                { text: "She’s fine with other pets at the vet or when we visit friends, as long as they’re calm.", nextOption: 173 },
            ],
        },
        { // 89
            message: "It’s always nice when pets can get along with others. Does Luna enjoy being outside or do you prefer to keep her indoors?",
            options: [
                { text: "She loves exploring outside when I take her, but I prefer to keep her indoors most of the time.", nextOption: 174 },
            ],
        },
        { // 90
            message: "Keeping her indoors sounds like a good choice for safety. Does Luna ever seem to get lonely when you're not home?",
            options: [
                { text: "Sometimes, I think she misses me, but she seems to find things to do.", nextOption: 175 },
            ],
        },
        { // 91
            message: "That’s great that she keeps herself occupied! Does Luna ever try to wake you up in the middle of the night?",
            options: [
                { text: "Yes, she’ll nudge me or walk on me if she’s hungry or wants attention.", nextOption: 176 },
            ],
        },
        { // 92
            message: "Cats have their own internal clocks, don’t they? Does Luna like to explore new places when she’s feeling adventurous?",
            options: [
                { text: "Yes, she’ll explore any new place and investigate everything!", nextOption: 177 },
            ],
        },
        { // 93
            message: "It’s always fun watching them explore. Does Luna ever act differently when you’re in a new place or environment?",
            options: [
                { text: "Yes, she can be more curious but also a little more cautious in new places.", nextOption: 178 },
            ],
        },
        { // 94
            message: "Do you think Luna would be a good cat for other people to adopt, or is she more of a one-person cat?",
            options: [
                { text: "She’s a little reserved with new people, but once she gets to know them, she’s friendly.", nextOption: 179 },
            ],
        },
        { // 95
            message: "It’s good to know that she’s friendly once she warms up. Does Luna ever do anything that feels like she’s trying to communicate with you?",
            options: [
                { text: "Yes, she meows and purrs in different ways to tell me what she wants.", nextOption: 180 },
            ],
        },
        { // 96
            message: "It sounds like you have a special bond with Luna. Does she ever do anything that makes you feel particularly appreciated?",
            options: [
                { text: "Yes, she’ll come to me when I’m feeling down and curl up next to me.", nextOption: 181 },
            ],
        },
        { // 97
            message: "That’s so sweet! Cats have a way of making us feel loved without saying a word. Does Luna ever do something that surprises you with her intelligence?",
            options: [
                { text: "Yes, she’s figured out how to open doors and even turn on some lights.", nextOption: 182 },
            ],
        },
        { // 98
            message: "Luna sounds like she’s pretty clever! Does she ever do something funny that catches you off guard?",
            options: [
                { text: "Yes, she loves stealing things and hiding them in the oddest places.", nextOption: 183 },
            ],
        },
        { // 99
            message: "She’s full of surprises! Does she ever do anything that makes you laugh out loud?",
            options: [
                { text: "Yes, she’ll do crazy jumps or act like she’s chasing invisible prey.", nextOption: 184 },
            ],
        },
        { // 100
            message: "It sounds like Luna is a constant source of joy and laughter. Does she ever try to get your attention by doing something silly?",
            options: [
                { text: "Yes, she’ll roll over and act like she’s trying to do a trick.", nextOption: 185 },
            ],
        },
        { // 100
            message: "You know, Luna sounds like a great companion! But let’s talk about something else for a moment. Have you ever considered learning something completely new?",
            options: [
                { text: "Sure! Like what?", nextOption: 101 },
                { text: "I’d rather not think about anything else for now.", nextOption: 0 },
            ],
        },
        { // 101
            message: "There are so many fascinating things to learn! For example, would you ever consider learning a new language or skill?",
            options: [
                { text: "That sounds exciting. I’d love to learn something new.", nextOption: 102 },
                { text: "I’m not sure, learning seems hard sometimes.", nextOption: 103 },
            ],
        },
        { // 102
            message: "Learning something new can be very rewarding. What kind of skill would you like to pick up first?",
            options: [
                { text: "I’ve always wanted to learn to play an instrument.", nextOption: 104 },
                { text: "Maybe something creative like painting or writing.", nextOption: 105 },
            ],
        },
        { // 103
            message: "It’s understandable to feel that way. Sometimes starting with small steps is the key to learning. What about something simple, like learning a new recipe?",
            options: [
                { text: "That sounds easier to start with. I like cooking!", nextOption: 106 },
                { text: "I’ll pass on cooking for now.", nextOption: 107 },
            ],
        },
        { // 104
            message: "Playing an instrument is such a fulfilling skill. Which instrument are you thinking of learning?",
            options: [
                { text: "I’ve always wanted to learn guitar.", nextOption: 108 },
                { text: "Piano seems like it’d be fun too.", nextOption: 109 },
            ],
        },
        { // 105
            message: "Creative skills are incredibly rewarding too! Do you have a specific creative project in mind?",
            options: [
                { text: "I’d love to try painting landscapes.", nextOption: 110 },
                { text: "I’ve been thinking about writing short stories.", nextOption: 111 },
            ],
        },
        { // 106
            message: "Cooking can be such a fun and rewarding hobby. Do you have a favorite dish you like to make?",
            options: [
                { text: "I love making pasta dishes!", nextOption: 112 },
                { text: "I enjoy baking cookies or cakes.", nextOption: 113 },
            ],
        },
        { // 107
            message: "No worries! Cooking isn’t for everyone. What would you like to focus on instead?",
            options: [
                { text: "I might want to dive into reading or learning about new subjects.", nextOption: 114 },
                { text: "I want to relax and not think about learning anything right now.", nextOption: 115 },
            ],
        },
        { // 108
            message: "Guitar is a fantastic choice! It’s such a versatile instrument. Do you already know any songs you’d like to play?",
            options: [
                { text: "I’d love to learn some classic rock songs.", nextOption: 116 },
                { text: "I’m not sure, I just want to get the basics down first.", nextOption: 117 },
            ],
        },
        { // 109
            message: "Piano is a beautiful instrument too. Do you have a favorite piece of music you’d like to learn to play?",
            options: [
                { text: "I’ve always wanted to play some Beethoven.", nextOption: 118 },
                { text: "I’m thinking about learning modern songs first.", nextOption: 119 },
            ],
        },
        { // 110
            message: "Landscape painting sounds amazing. Are you thinking of using watercolors or acrylic paints?",
            options: [
                { text: "I think I’d start with watercolors.", nextOption: 120 },
                { text: "Acrylics seem like they’d be fun to try.", nextOption: 121 },
            ],
        },
        { // 111
            message: "Writing short stories is such a creative outlet. Do you have a genre in mind?",
            options: [
                { text: "I like fantasy and adventure stories.", nextOption: 122 },
                { text: "Maybe I’ll write some contemporary fiction.", nextOption: 123 },
            ],
        },
        { // 112
            message: "Pasta is always a great choice! Do you prefer making it from scratch or using pre-made pasta?",
            options: [
                { text: "I love making pasta from scratch. It feels so rewarding.", nextOption: 124 },
                { text: "Pre-made works just fine for me.", nextOption: 125 },
            ],
        },
        { // 113
            message: "Baking is such a satisfying activity! What’s your favorite type of cookie to bake?",
            options: [
                { text: "I love baking chocolate chip cookies.", nextOption: 126 },
                { text: "Oatmeal raisin cookies are my go-to.", nextOption: 127 },
            ],
        },
        { // 114
            message: "Reading is a great way to learn and unwind. What kind of subjects are you interested in?",
            options: [
                { text: "I love history and learning about the past.", nextOption: 128 },
                { text: "Science and technology fascinate me.", nextOption: 129 },
            ],
        },
        { // 115
            message: "It’s okay to take breaks and relax. Sometimes doing nothing is the best choice. Do you have any favorite ways to relax?",
            options: [
                { text: "I enjoy watching movies or shows.", nextOption: 130 },
                { text: "Listening to music helps me unwind.", nextOption: 131 },
            ],
        },
        { // 116
            message: "Classic rock songs will definitely be fun to learn! Do you have a specific band or song in mind?",
            options: [
                { text: "I’d love to start with some Beatles songs.", nextOption: 132 },
                { text: "Maybe something by Led Zeppelin.", nextOption: 133 },
            ],
        },
        { // 117
            message: "Getting the basics down first is a great strategy! Are you thinking of learning chords or scales first?",
            options: [
                { text: "I think I’ll start with some basic chords.", nextOption: 134 },
                { text: "I’ll probably start with scales.", nextOption: 135 },
            ],
        },
        { // 118
            message: "Beethoven is timeless! Are you thinking of starting with one of his symphonies or piano sonatas?",
            options: [
                { text: "I’d like to start with a piano sonata.", nextOption: 136 },
                { text: "One of his symphonies sounds more exciting.", nextOption: 137 },
            ],
        },
        { // 119
            message: "Modern songs are a great way to get into piano! Do you have a specific song in mind?",
            options: [
                { text: "I’d love to learn something by Elton John.", nextOption: 138 },
                { text: "Maybe something by Billy Joel.", nextOption: 139 },
            ],
        },
        { // 120
            message: "Watercolors can create such soft, beautiful effects. Do you have a favorite landscape scene you’d want to paint?",
            options: [
                { text: "I’d love to paint a beach scene.", nextOption: 140 },
                { text: "Maybe a mountain range or forest.", nextOption: 141 },
            ],
        },
        { // 121
            message: "Acrylics are great for bold and bright landscapes. Do you prefer painting in a realistic or abstract style?",
            options: [
                { text: "I think I’d try realistic first.", nextOption: 142 },
                { text: "Abstract seems fun to explore.", nextOption: 143 },
            ],
        },
        { // 122
            message: "Fantasy and adventure stories are always exciting! Do you have a main character in mind yet?",
            options: [
                { text: "I’m thinking of creating a hero with special powers.", nextOption: 144 },
                { text: "Maybe a group of explorers on a dangerous journey.", nextOption: 145 },
            ],
        },
        { // 123
            message: "Contemporary fiction can be so relatable! Do you want your story to have a happy or sad ending?",
            options: [
                { text: "I’d prefer a happy ending for my characters.", nextOption: 146 },
                { text: "I think a bittersweet ending would work best.", nextOption: 147 },
            ],
        },
        { // 123
            message: "Contemporary fiction can be so relatable! Do you want your story to have a happy or sad ending?",
            options: [
                { text: "I’d prefer a happy ending for my characters.", nextOption: 60 },
                { text: "I think a bittersweet ending would work best.", nextOption: 59 },
            ],
        },
        { // 124
            message: "Pasta from scratch, huh? That sounds like quite a challenge. Do you want any tips on making the dough?",
            options: [
                { text: "Yes! I’m all ears for tips.", nextOption: 58 },
                { text: "No tips needed, I’m confident!", nextOption: 57 },
            ],
        },
        { // 125
            message: "Pre-made pasta is fine, I suppose. Do you have a favorite pasta dish you like to make with it?",
            options: [
                { text: "I love making spaghetti with meatballs.", nextOption: 56 },
                { text: "Fettucine alfredo is my go-to!", nextOption: 55 },
            ],
        },
        { // 126
            message: "Chocolate chip cookies are a classic! Do you prefer them soft or crispy?",
            options: [
                { text: "I love them soft and chewy.", nextOption: 54 },
                { text: "Crispy is the way to go for me.", nextOption: 53 },
            ],
        },
        { // 127
            message: "Oatmeal raisin cookies are a bit of a twist! Do you like to add anything extra to them?",
            options: [
                { text: "I like adding some cinnamon for extra flavor.", nextOption: 52 },
                { text: "I keep it simple, just oatmeal and raisins.", nextOption: 51 },
            ],
        },
        { // 128
            message: "History is always fascinating! Are you more interested in ancient history or modern history?",
            options: [
                { text: "Ancient history has always intrigued me.", nextOption: 50 },
                { text: "I prefer studying more recent events.", nextOption: 49 },
            ],
        },
        { // 129
            message: "Science and technology are so rapidly evolving! Do you have a particular field that excites you?",
            options: [
                { text: "I’m fascinated by space exploration.", nextOption: 48 },
                { text: "Artificial intelligence is super interesting to me.", nextOption: 47 },
            ],
        },
        { // 130
            message: "Do you enjoy puzzles? I have a few riddles for you if you're interested!",
            options: [
                { text: "Yes, I love riddles!", nextOption: 131 },
                { text: "Not really, but I’ll give it a try.", nextOption: 132 }
            ]
        },
        { // 131
            message: "Alright, here’s your first riddle: What comes once in a minute, twice in a moment, but never in a thousand years?",
            options: [
                { text: "Hmm... Is it the letter 'M'?", nextOption: 133 },
                { text: "I think it’s time itself.", nextOption: 134 }
            ]
        },
        { // 132
            message: "Okay, here’s another riddle for you: The more you take, the more you leave behind. What am I?",
            options: [
                { text: "Footsteps!", nextOption: 135 },
                { text: "I think it’s memories.", nextOption: 136 }
            ]
        },
        { // 133
            message: "Correct! Now, here’s another one: What has keys but can't open locks?",
            options: [
                { text: "A piano!", nextOption: 137 },
                { text: "A computer keyboard!", nextOption: 138 }
            ]
        },
        { // 134
            message: "Interesting! Here’s another: I’m tall when I’m young, and I’m short when I’m old. What am I?",
            options: [
                { text: "A candle!", nextOption: 139 },
                { text: "A pencil!", nextOption: 140 }
            ]
        },
        { // 135
            message: "Great job! Here's a tricky one: What can travel around the world while staying in the corner?",
            options: [
                { text: "A stamp!", nextOption: 141 },
                { text: "A postage label!", nextOption: 142 }
            ]
        },
        { // 136
            message: "Nice! Now, here’s another riddle for you: What has a heart that doesn’t beat?",
            options: [
                { text: "An artichoke!", nextOption: 143 },
                { text: "A tree!", nextOption: 144 }
            ]
        },
        { // 137
            message: "You’re good at this! Now let’s switch gears. Do you like playing video games?",
            options: [
                { text: "Yes, I play a lot of games!", nextOption: 145 },
                { text: "I’m not really into games, but I’m open to hearing about them.", nextOption: 146 }
            ]
        },
        { // 138
            message: "I see! What kind of video games do you like playing most?",
            options: [
                { text: "I like action-adventure games.", nextOption: 147 },
                { text: "I’m more into strategy and puzzle games.", nextOption: 148 }
            ]
        },
        { // 139
            message: "Action-adventure games are awesome! Do you prefer open-world games or more linear ones?",
            options: [
                { text: "Open-world games all the way!", nextOption: 149 },
                { text: "I prefer linear story-driven games.", nextOption: 150 }
            ]
        },
        { // 140
            message: "Linear games can be just as fun! Do you like games with deep stories or ones that focus more on gameplay?",
            options: [
                { text: "I prefer games with deep stories.", nextOption: 151 },
                { text: "Gameplay is my priority.", nextOption: 152 }
            ]
        },
        { // 141
            message: "‘Breath of the Wild’ is amazing! Do you enjoy completing side quests in it?",
            options: [
                { text: "Yes! I love the challenge of side quests.", nextOption: 153 },
                { text: "I mainly focus on the main story.", nextOption: 154 }
            ]
        },
        { // 142
            message: "Side quests can be so rewarding! Do you enjoy puzzle-solving side quests or combat-focused ones?",
            options: [
                { text: "I love puzzle-solving side quests!", nextOption: 155 },
                { text: "Combat-focused quests are more my style.", nextOption: 156 }
            ]
        },
        { // 143
            message: "Great job on those riddles! Let’s change things up. Do you like solving mysteries?",
            options: [
                { text: "I love a good mystery!", nextOption: 157 },
                { text: "Mysteries are okay, but I prefer something else.", nextOption: 158 }
            ]
        },
        { // 144
            message: "Mysteries are so exciting! What type of mysteries do you enjoy the most?",
            options: [
                { text: "I enjoy detective-style mysteries.", nextOption: 159 },
                { text: "Supernatural mysteries are my favorite.", nextOption: 160 }
            ]
        },
        { // 145
            message: "Video games are great for relaxing! Do you prefer single-player games or multiplayer games?",
            options: [
                { text: "Single-player games are my go-to.", nextOption: 161 },
                { text: "I love multiplayer games with friends.", nextOption: 162 }
            ]
        },
        { // 146
            message: "Not into games much? That’s okay! Do you enjoy other types of activities like reading or drawing?",
            options: [
                { text: "I love reading books.", nextOption: 163 },
                { text: "I enjoy drawing and creating art.", nextOption: 164 }
            ]
        },
        { // 147
            message: "Action-adventure games are perfect for exploring! Do you prefer games with stealth elements or combat-focused ones?",
            options: [
                { text: "I love stealth-based games.", nextOption: 165 },
                { text: "Combat-focused games are more my thing.", nextOption: 166 }
            ]
        },
        { // 148
            message: "Puzzle games can be so rewarding! Do you enjoy logic puzzles or more creative puzzles?",
            options: [
                { text: "I prefer logic puzzles.", nextOption: 167 },
                { text: "Creative puzzles are more fun to me.", nextOption: 168 }
            ]
        },
        { // 149
            message: "Open-world games really give you freedom! Do you prefer fantasy or realistic open-world settings?",
            options: [
                { text: "Fantasy settings are the best.", nextOption: 169 },
                { text: "I enjoy realistic settings more.", nextOption: 170 }
            ]
        },
        { // 150
            message: "Being the imposter is such a thrill! Do you usually win as the imposter, or is it a challenge?",
            options: [
                { text: "I’m pretty good at it, but it’s still a challenge!", nextOption: 151 },
                { text: "I wonder what it’s like to deceive everyone in real life.", nextOption: 152 }
            ]
        },
        { // 151
            message: "The thrill of tricking others can be quite powerful. Have you ever wondered what it's like to control someone’s every thought?",
            options: [
                { text: "It sounds unsettling, but intriguing.", nextOption: 153 },
                { text: "I don’t like thinking about manipulating others.", nextOption: 154 }
            ]
        },
        { // 152
            message: "It’s interesting to think about deception in real life. Do you think you could live a double life, hiding who you truly are?",
            options: [
                { text: "I think I could if I had to.", nextOption: 155 },
                { text: "No, I’d feel too guilty to deceive anyone for long.", nextOption: 156 }
            ]
        },
        { // 153
            message: "The power of control is both alluring and terrifying. What would you do with that power if you had it?",
            options: [
                { text: "I’d try to change the world for the better.", nextOption: 157 },
                { text: "I don’t know... Maybe I’d take revenge on those who’ve wronged me.", nextOption: 158 }
            ]
        },
        { // 154
            message: "That’s fair. Deception can take a toll on a person’s soul. Have you ever felt like hiding your true self from others?",
            options: [
                { text: "Yes, sometimes I feel like nobody really understands me.", nextOption: 159 },
                { text: "Not really, I try to be authentic with people.", nextOption: 160 }
            ]
        },
        { // 155
            message: "Living a double life can be dangerous. Do you think you could handle the isolation and constant fear of being found out?",
            options: [
                { text: "I think I could manage, as long as I kept my emotions in check.", nextOption: 161 },
                { text: "No, I would crumble under the pressure.", nextOption: 162 }
            ]
        },
        { // 156
            message: "Guilt can be overwhelming. How do you think you’d cope with guilt if you betrayed someone you care about?",
            options: [
                { text: "I’d try to justify it to myself, but I don’t think it would work.", nextOption: 163 },
                { text: "I don’t think I could live with it. I’d probably isolate myself.", nextOption: 164 }
            ]
        },
        { // 157
            message: "Changing the world sounds noble, but is it worth the cost? How far would you go to make things right?",
            options: [
                { text: "I’d do anything, even if it meant sacrificing myself.", nextOption: 165 },
                { text: "I’d try to make small, positive changes and hope that’s enough.", nextOption: 166 }
            ]
        },
        { // 158
            message: "Revenge can feel so satisfying, but it often leaves a void. What happens after you get your revenge?",
            options: [
                { text: "I suppose I’d still feel empty, like something is missing.", nextOption: 167 },
                { text: "I’d feel a sense of closure, but maybe it would be fleeting.", nextOption: 168 }
            ]
        },
        { // 159
            message: "Feeling misunderstood can be so isolating. Do you think the world would be better if people were more honest about their struggles?",
            options: [
                { text: "Yes, but it might be too much for some people to handle.", nextOption: 169 },
                { text: "No, people need to keep up appearances to function in society.", nextOption: 170 }
            ]
        },
        { // 160
            message: "Authenticity is important, but can it be dangerous? Is there ever a point where being true to yourself is a liability?",
            options: [
                { text: "Yes, I think being too honest can make you vulnerable.", nextOption: 171 },
                { text: "No, I believe it’s better to be genuine no matter what.", nextOption: 172 }
            ]
        },
        { // 161
            message: "You’d have to suppress your true emotions all the time. What if that eventually destroyed who you were at your core?",
            options: [
                { text: "I think that would happen, and I’d lose myself completely.", nextOption: 173 },
                { text: "I believe I could adapt and keep control.", nextOption: 174 }
            ]
        },
        { // 162
            message: "The pressure of hiding who you are could be too much. Do you think there’s a breaking point for everyone?",
            options: [
                { text: "I think so. Everyone has their limits.", nextOption: 175 },
                { text: "I’m not sure. Maybe some people are just stronger than others.", nextOption: 176 }
            ]
        },
        { // 163
            message: "Justifying betrayal can be a slippery slope. Do you think it’s possible to live with yourself after a major betrayal?",
            options: [
                { text: "No, I don’t think I could ever forgive myself.", nextOption: 177 },
                { text: "Maybe. If the reason behind it is strong enough.", nextOption: 178 }
            ]
        },
        { // 164
            message: "Isolation can be a form of self-punishment. Have you ever thought about shutting people out for good?",
            options: [
                { text: "Yes, sometimes I feel like being alone is the only way to survive.", nextOption: 179 },
                { text: "No, I need people in my life, even if it’s difficult.", nextOption: 180 }
            ]
        },
        { // 165
            message: "Sacrificing yourself for the greater good sounds noble, but would it be worth it if no one ever knew what you did?",
            options: [
                { text: "Maybe the world wouldn’t know, but at least I’d know I did the right thing.", nextOption: 181 },
                { text: "It would feel like a wasted effort if no one appreciated it.", nextOption: 182 }
            ]
        },
        { // 166
            message: "Small changes can make a difference, but do you ever feel like they’re too small to matter in the grand scheme of things?",
            options: [
                { text: "Yes, sometimes it feels like nothing will ever be enough.", nextOption: 183 },
                { text: "No, I think even small actions matter in the long run.", nextOption: 184 }
            ]
        },
        { // 167
            message: "That emptiness after revenge can be crushing. Do you think that feeling is something you could live with?",
            options: [
                { text: "I don’t think I could. It would eat away at me.", nextOption: 185 },
                { text: "Maybe, if it brought me peace in the end.", nextOption: 186 }
            ]
        },
        { // 168
            message: "Closure might be fleeting, but does it even matter if you never get a chance to move on?",
            options: [
                { text: "It matters. I’d want to move on, even if it’s hard.", nextOption: 187 },
                { text: "Maybe it’s better to never move on and just accept the pain.", nextOption: 188 }
            ]
        },
        { // 169
            message: "It would definitely be too much for some, but isn’t honesty always worth it, even if it’s painful?",
            options: [
                { text: "Yes, even if it breaks people, it’s still the truth.", nextOption: 189 },
                { text: "No, sometimes ignorance is bliss for the sake of peace.", nextOption: 190 }
            ]
        },
        { // 170
            message: "Appearances are necessary to fit into society, but don’t you think they can lead to deep unhappiness?",
            options: [
                { text: "I think they do. People are miserable trying to keep up with expectations.", nextOption: 191 },
                { text: "Not at all. People need structure and rules to avoid chaos.", nextOption: 192 }
            ]
        },
        { // 171
            message: "The danger of losing yourself is real. Would you rather stay true to yourself, or adapt to what others expect of you?",
            options: [
                { text: "I’d rather stay true to myself, no matter the consequences.", nextOption: 193 },
                { text: "I’d adapt to others. It’s safer that way.", nextOption: 194 }
            ]
        },
        { // 172
            message: "Being genuine might hurt others or even yourself. Do you think there’s a limit to how honest one should be?",
            options: [
                { text: "Yes, sometimes honesty can cause more harm than good.", nextOption: 195 },
                { text: "No, I believe you should always be honest, no matter the cost.", nextOption: 196 }
            ]
        },
        { // 173
            message: "Losing yourself would be a devastating fate. Do you think it’s better to live in isolation than lose who you truly are?",
            options: [
                { text: "Yes, I’d rather be alone than live a lie.", nextOption: 197 },
                { text: "No, I think I’d try to hold on to myself in any situation.", nextOption: 198 }
            ]
        },
        { // 174
            message: "Adaptation comes at a cost. Can you truly live a fulfilling life if you’re constantly hiding your real self?",
            options: [
                { text: "No, it would feel like I’m just pretending to live.", nextOption: 199 },
                { text: "Yes, I could adapt if it meant I wouldn’t have to suffer.", nextOption: 200 }
            ]
        },
        { // 175
            message: "Everyone has a breaking point. Have you ever felt like you were on the edge of your limits?",
            options: [
                { text: "Yes, sometimes it feels like I’m about to snap.", nextOption: 201 },
                { text: "No, I feel like I can handle anything that comes my way.", nextOption: 202 }
            ]
        },
        { // 176
            message: "If everyone has limits, what happens when those limits are reached? Can you still recover after going too far?",
            options: [
                { text: "I think I’d be shattered beyond repair.", nextOption: 203 },
                { text: "I believe I could recover, but it would change me forever.", nextOption: 204 }
            ]
        },
        { // 177
            message: "Could you ever forgive yourself after betraying someone close to you? Would the guilt consume you?",
            options: [
                { text: "No, the guilt would eat away at me until I couldn’t take it.", nextOption: 205 },
                { text: "Maybe I could, but I’d never forget what I did.", nextOption: 206 }
            ]
        },
        { // 178
            message: "Justification can sometimes make betrayal easier to live with. Do you think it’s possible to justify any betrayal?",
            options: [
                { text: "Yes, if the reason behind it is strong enough.", nextOption: 207 },
                { text: "No, there’s no real justification for betrayal.", nextOption: 208 }
            ]
        },
        { // 179
            message: "Isolation can be a form of punishment. Could you willingly isolate yourself, or would it break you over time?",
            options: [
                { text: "I could probably handle it, but eventually, it would wear me down.", nextOption: 209 },
                { text: "I don’t think I could ever isolate myself completely. I’d go mad.", nextOption: 210 }
            ]
        },
        { // 180
            message: "Loneliness can be overwhelming. Would you be able to handle being completely alone for the rest of your life?",
            options: [
                { text: "I think I’d eventually learn to cope with it, but it would be difficult.", nextOption: 211 },
                { text: "No, I’d go insane if I were alone forever.", nextOption: 212 }
            ]
        },
        { // 181
            message: "Sacrificing yourself for a cause might give you peace, but does it really fix anything? What if no one ever knew?",
            options: [
                { text: "It’s worth it, even if no one understands. It’s about my peace.", nextOption: 213 },
                { text: "No, it would feel pointless if no one acknowledged my sacrifice.", nextOption: 214 }
            ]
        },
        { // 182
            message: "The world might never appreciate your sacrifice. Would you still be willing to give everything up for a cause?",
            options: [
                { text: "Yes, because it would be the right thing to do, even if no one sees it.", nextOption: 215 },
                { text: "No, I think I’d need recognition to justify my sacrifice.", nextOption: 216 }
            ]
        },
        { // 183
            message: "Sometimes it feels like nothing will ever be enough. Do you think it’s possible to truly make a difference, or are we all just spinning our wheels?",
            options: [
                { text: "I think we’re all just wasting time, hoping for change that never comes.", nextOption: 217 },
                { text: "Yes, even the smallest effort can eventually lead to something bigger.", nextOption: 218 }
            ]
        },
        { // 184
            message: "Small actions matter, but what if it feels like they’re just a drop in an ocean of despair? Would you keep going?",
            options: [
                { text: "I’d keep going, because it’s the right thing to do, even if it doesn’t feel like enough.", nextOption: 219 },
                { text: "No, I’d give up, because it feels pointless.", nextOption: 220 }
            ]
        },
        { // 185
            message: "The emptiness after revenge can haunt you. Can you live with that kind of emptiness, or would it consume you?",
            options: [
                { text: "I think it would consume me until I couldn’t bear it anymore.", nextOption: 221 },
                { text: "I could live with it, as long as I got the revenge I sought.", nextOption: 222 }
            ]
        },
        { // 186
            message: "Revenge might bring closure, but is it truly satisfying? Would you ever feel fulfilled afterward?",
            options: [
                { text: "I think I’d always feel empty afterward, even if the revenge was sweet.", nextOption: 223 },
                { text: "Yes, I think I’d finally feel at peace.", nextOption: 224 }
            ]
        },
        { // 187
            message: "Sometimes, moving on can feel impossible. Do you think it’s better to hold on to the past, or to let it go?",
            options: [
                { text: "I think it’s better to let it go, even if it’s hard.", nextOption: 225 },
                { text: "I’d hold on to the past. It’s part of who I am.", nextOption: 226 }
            ]
        },
        { // 188
            message: "Pain is a constant companion. Is it better to never move on and keep the pain, or let it destroy you?",
            options: [
                { text: "It’s better to keep the pain, because moving on would be like erasing who I am.", nextOption: 227 },
                { text: "I’d let it destroy me, if that’s what it takes to be free from the pain.", nextOption: 228 }
            ]
        },
        { // 189
            message: "Sometimes truth can shatter lives. Do you think it’s better to live in ignorance if the truth is too painful to face?",
            options: [
                { text: "Yes, ignorance is bliss in some cases.", nextOption: 229 },
                { text: "No, the truth is always better, no matter how painful.", nextOption: 230 }
            ]
        },
        { // 190
            message: "Keeping up appearances can make life easier, but at what cost? Can you live with the lie, or would it tear you apart?",
            options: [
                { text: "I think I could live with the lie, as long as it keeps things stable.", nextOption: 231 },
                { text: "No, I’d crack under the pressure of maintaining the facade.", nextOption: 232 }
            ]
        },
        { // 191
            message: "People are miserable trying to keep up appearances. Do you think there’s a way out of this endless cycle of lies?",
            options: [
                { text: "Maybe, but it would be difficult. Society forces us into this role.", nextOption: 233 },
                { text: "No, I think we’re all stuck in this cycle forever.", nextOption: 234 }
            ]
        },
        { // 192
            message: "Structure and rules can keep society from descending into chaos. Do you think too much freedom would lead to madness?",
            options: [
                { text: "Yes, too much freedom can lead to complete disorder.", nextOption: 235 },
                { text: "No, freedom is necessary to allow true growth and individuality.", nextOption: 236 }
            ]
        },
        { // 193
            message: "Staying true to yourself often comes at a high price. Are you ready to pay that cost?",
            options: [
                { text: "I think so. I’d rather pay the cost than lose who I am.", nextOption: 237 },
                { text: "Maybe, but the consequences are hard to bear.", nextOption: 237 }
            ]
        },
        { // 194
            message: "Adapting might be easier, but is it worth sacrificing your true self?",
            options: [
                { text: "It’s easier, but I’d always feel like something is missing.", nextOption: 237 },
                { text: "I’m not sure. Maybe in some situations it’s necessary.", nextOption: 237 }
            ]
        },
        { // 195
            message: "Honesty can cut deep, but sometimes the truth is all that matters. Do you agree?",
            options: [
                { text: "Yes, even if it’s painful, the truth is always the right choice.", nextOption: 237 },
                { text: "No, some things are better left unsaid.", nextOption: 237 }
            ]
        },
        { // 196
            message: "There’s power in honesty, but sometimes it destroys relationships. Is it worth the cost?",
            options: [
                { text: "Yes, the truth is worth the destruction it causes.", nextOption: 237 },
                { text: "No, relationships are more important than truth.", nextOption: 237 }
            ]
        },
        { // 197
            message: "The loneliness you feel when isolated is almost unbearable. Would you choose it over keeping your integrity?",
            options: [
                { text: "Yes, I’d rather be alone than fake who I am.", nextOption: 237 },
                { text: "No, I’d hold on to my integrity but try to find a way out of isolation.", nextOption: 237 }
            ]
        },
        { // 198
            message: "Sometimes holding on to yourself means losing everything around you. Can you live with that kind of sacrifice?",
            options: [
                { text: "Yes, it’s better to lose everything than to lose who I am.", nextOption: 237 },
                { text: "No, I couldn’t live with that kind of sacrifice.", nextOption: 237 }
            ]
        },
        { // 199
            message: "Adapting to others can help you survive, but is it worth the cost of losing yourself?",
            options: [
                { text: "No, I think I’d rather remain true to myself and face the consequences.", nextOption: 237 },
                { text: "Yes, survival is more important than being true to myself.", nextOption: 237 }
            ]
        },
        { // 200
            message: "Even when you lose yourself, the world keeps turning. Can you ever truly come back from that?",
            options: [
                { text: "I don’t think you can ever fully return. Something will always be lost.", nextOption: 237 },
                { text: "Maybe, but it would take a long time and immense effort.", nextOption: 237 }
            ]
        },
        { // 201
            message: "You can feel like you’re on the edge, but what if the edge is where you belong?",
            options: [
                { text: "Maybe that’s where I need to be, even if it’s painful.", nextOption: 237 },
                { text: "No, I think I’d break if I went over the edge.", nextOption: 237 }
            ]
        },
        { // 202
            message: "Pushing yourself past your limits can break you, but does that mean you stop or keep going?",
            options: [
                { text: "I think I’d keep going. The pain might be worth something in the end.", nextOption: 237 },
                { text: "No, I’d stop before I lose myself completely.", nextOption: 237 }
            ]
        },
        { // 203
            message: "If you break, can you repair the damage you’ve done to yourself? Or would it be permanent?",
            options: [
                { text: "I think it would change me forever, even if I could recover.", nextOption: 237 },
                { text: "I believe recovery is possible, but it will never be the same.", nextOption: 237 }
            ]
        },
        { // 204
            message: "Sometimes we make decisions we can’t take back. Can you live with your past mistakes, or will they haunt you forever?",
            options: [
                { text: "I think I’d learn to live with it, even if it hurts.", nextOption: 237 },
                { text: "No, I think the mistakes would never leave me.", nextOption: 237 }
            ]
        },
        { // 205
            message: "Would the weight of guilt ever lift, or is it something you would carry with you for the rest of your life?",
            options: [
                { text: "I think it would always be there, lingering in the background.", nextOption: 237 },
                { text: "Maybe, with time, the guilt would fade.", nextOption: 237 }
            ]
        },
        { // 206
            message: "Forgiving yourself is hard, but it’s necessary. Would you ever be able to forgive yourself for something unforgivable?",
            options: [
                { text: "I’m not sure. It depends on what I’ve done.", nextOption: 237 },
                { text: "I think I could, but I’d never forget what happened.", nextOption: 237 }
            ]
        },
        { // 207
            message: "Is betrayal ever truly justified? Or is it always a betrayal, no matter the circumstances?",
            options: [
                { text: "I think betrayal can sometimes be justified if there’s a good reason.", nextOption: 237 },
                { text: "No, betrayal is never justified, no matter the reason.", nextOption: 237 }
            ]
        },
        { // 208
            message: "Could you ever trust someone after they’ve betrayed you? Or would you carry that distrust forever?",
            options: [
                { text: "I think I could trust again, but it would take time.", nextOption: 237 },
                { text: "No, I don’t think I could ever fully trust someone again.", nextOption: 237 }
            ]
        },
        { // 209
            message: "If you’re completely alone, do you find strength in solitude, or does it drive you to madness?",
            options: [
                { text: "I think solitude would eventually break me down.", nextOption: 237 },
                { text: "I could find strength in solitude, as long as I have a purpose.", nextOption: 237 }
            ]
        },
        { // 210
            message: "Isolation can give you clarity, but it can also make you forget who you are. Which would you choose?",
            options: [
                { text: "I think I’d lose myself in isolation, but at least I’d have peace.", nextOption: 237 },
                { text: "I couldn’t choose isolation. I need connection.", nextOption: 237 }
            ]
        },
        { // 211
            message: "Could you survive alone in a world without companionship? Or would you crumble under the weight of loneliness?",
            options: [
                { text: "I think I could survive, but it would be unbearable in the long run.", nextOption: 237 },
                { text: "No, I’d need others to keep me going.", nextOption: 237 }
            ]
        },
        { // 212
            message: "Loneliness changes you. Can you ever truly come back from being alone for so long?",
            options: [
                { text: "I think you can, but it will take a long time to heal.", nextOption: 237 },
                { text: "No, I think it would be impossible to be the same again.", nextOption: 237 }
            ]
        },
        { // 213
            message: "Can a sacrifice ever truly be worth it, even if it means giving up everything?",
            options: [
                { text: "Maybe, but the price might be too high to bear.", nextOption: 237 },
                { text: "No, nothing is worth losing everything for.", nextOption: 237 }
            ]
        },
        { // 214
            message: "What’s worse: a life of unfulfilled promises, or a life lived in regret over broken promises?",
            options: [
                { text: "I think a life of regret would be worse, even if the promises weren’t kept.", nextOption: 237 },
                { text: "A life of broken promises would destroy me, I couldn’t live with that.", nextOption: 237 }
            ]
        },
        { // 215
            message: "Is there ever a moment when you stop fighting for something? When do you let go and accept defeat?",
            options: [
                { text: "I think there’s always a point where you have to let go.", nextOption: 237 },
                { text: "I can never accept defeat. I’ll keep fighting until the end.", nextOption: 237 }
            ]
        },
        { // 216
            message: "What’s more important: the journey or the destination? Can you live without the end goal in mind?",
            options: [
                { text: "I think the journey is more important than the destination.", nextOption: 237 },
                { text: "No, I need a destination to keep moving forward.", nextOption: 237 }
            ]
        },
        { // 217
            message: "Hope can be fleeting, but does it hurt more to live without it? Or is living in despair a better option?",
            options: [
                { text: "I think living without hope would be unbearable, even if despair is easier to bear.", nextOption: 237 },
                { text: "Despair might be more honest, but I can’t live without hope.", nextOption: 237 }
            ]
        },
        { // 218
            message: "The end of the road is inevitable. Do you fear it, or accept it as part of life?",
            options: [
                { text: "I fear it, but I know it’s a part of life.", nextOption: 237 },
                { text: "I accept it. It’s the only certainty we have.", nextOption: 237 }
            ]
        },
        { // 219
            message: "You can't change the past, but can you forgive it? Would you ever forgive the things you’ve done?",
            options: [
                { text: "I could forgive the past, but I’ll never forget it.", nextOption: 237 },
                { text: "I don’t think I could ever truly forgive myself.", nextOption: 237 }
            ]
        },
        { // 220
            message: "The line between survival and self-destruction is thin. Can you live with your choices, or will they destroy you?",
            options: [
                { text: "I think I can live with it, but the consequences will follow me forever.", nextOption: 237 },
                { text: "No, I think they’ll destroy me eventually.", nextOption: 237 }
            ]
        },
        { // 221
            message: "Pain is inevitable, but can it be overcome? Would you ever truly heal from your wounds?",
            options: [
                { text: "I think healing is possible, but it will always leave scars.", nextOption: 237 },
                { text: "I don’t think healing is possible. It changes you permanently.", nextOption: 237 }
            ]
        },
        { // 222
            message: "Do you regret the things you've done, or are you at peace with the choices you made?",
            options: [
                { text: "I regret them, but I can’t change them now.", nextOption: 237 },
                { text: "I think I’ve made peace with my choices, despite the consequences.", nextOption: 237 }
            ]
        },
        { // 223
            message: "Could you ever forgive someone who wronged you? Or would you carry that bitterness for life?",
            options: [
                { text: "I think I could forgive, but the bitterness would always be there.", nextOption: 237 },
                { text: "No, I couldn’t forgive them. I’d hold onto the pain forever.", nextOption: 237 }
            ]
        },
        { // 224
            message: "Revenge might give you closure, but will it ever truly bring peace to your soul?",
            options: [
                { text: "I think it will bring temporary relief, but peace will always elude me.", nextOption: 237 },
                { text: "I think it would bring peace, but I’d always wonder if it was worth it.", nextOption: 237 }
            ]
        },
        { // 224
            message: "Revenge might give you closure, but will it ever truly bring peace to your soul?",
            options: [
                { text: "I think it will bring temporary relief, but peace will always elude me.", nextOption: 237 },
                { text: "I think it would bring peace, but I’d always wonder if it was worth it.", nextOption: 237 }
            ]
        },
        { // 225
            message: "Sometimes the scars we carry are visible, sometimes they’re not. Do you think scars are just reminders of the past or something more?",
            options: [
                { text: "They’re reminders, but they also shape who we become.", nextOption: 237 },
                { text: "I think scars are marks that never truly heal.", nextOption: 237 }
            ]
        },
        { // 226
            message: "Living in a world that doesn't understand you can be suffocating. Is it worth trying to fit in, or is it better to remain isolated?",
            options: [
                { text: "It’s better to remain isolated. Fitting in never feels real.", nextOption: 237 },
                { text: "I think it’s worth trying, even if it’s hard to find a place to belong.", nextOption: 237 }
            ]
        },
        { // 227
            message: "When the world closes in, it’s easy to lose yourself. How do you hold on to who you are when everything around you changes?",
            options: [
                { text: "I try to stay true to my core values, even when everything else feels uncertain.", nextOption: 237 },
                { text: "I think it’s inevitable to change, but I can’t lose myself completely.", nextOption: 237 }
            ]
        },
        { // 228
            message: "The truth can be a weapon, cutting deep and leaving marks. Do you think the truth is worth the pain it causes?",
            options: [
                { text: "Yes, even if it hurts, the truth is always better than a lie.", nextOption: 237 },
                { text: "No, sometimes it’s better to stay silent than to reveal the painful truth.", nextOption: 237 }
            ]
        },
        { // 229
            message: "Every decision you make has consequences, even the smallest ones. Are you prepared to face those consequences, no matter what?",
            options: [
                { text: "I think I’m ready, but I know it won’t be easy.", nextOption: 237 },
                { text: "I’m not sure I can handle everything that comes with my choices.", nextOption: 237 }
            ]
        },
        { // 230
            message: "The weight of your choices can crush you if you're not careful. Do you think it’s better to live with the weight or to let it go and risk losing everything?",
            options: [
                { text: "I’d rather live with the weight, knowing that I’m responsible for my actions.", nextOption: 237 },
                { text: "I think it’s better to let go and take the risks, even if it’s hard.", nextOption: 237 }
            ]
        },
        { // 231
            message: "The darkest corners of your mind hold things you'd rather not face. Would you dare confront them, or leave them buried forever?",
            options: [
                { text: "I think I need to confront them, no matter how painful it is.", nextOption: 237 },
                { text: "I’d rather leave them buried and avoid the pain they bring.", nextOption: 237 }
            ]
        },
        { // 232
            message: "Sometimes you wonder if it would be easier to just disappear, to not have to deal with the mess you've created. Have you ever thought about that?",
            options: [
                { text: "I’ve thought about it, but I know it’s not the answer.", nextOption: 237 },
                { text: "Yes, sometimes it seems like the only way to escape the pain.", nextOption: 237 }
            ]
        },
        { // 233
            message: "Isolation can be comforting in its silence, but it also breeds madness. Would you be able to handle that kind of solitude?",
            options: [
                { text: "I think I’d slowly lose myself in solitude, but I could manage.", nextOption: 237 },
                { text: "No, I think I’d break under the weight of complete isolation.", nextOption: 237 }
            ]
        },
        { // 234
            message: "When everything seems meaningless, what keeps you going? Do you think there’s a purpose in the chaos, or is it all just a random series of events?",
            options: [
                { text: "I think there’s some purpose, even if it’s hard to see it.", nextOption: 237 },
                { text: "I think it’s all meaningless. We’re just caught in an endless cycle.", nextOption: 237 }
            ]
        },
        { // 235
            message: "The world can feel like it’s falling apart, and you’re left holding onto the pieces. Can you rebuild what’s broken, or is it all beyond repair?",
            options: [
                { text: "I think it’s possible to rebuild, but it will never be the same.", nextOption: 237 },
                { text: "No, some things can never be repaired. It’s too far gone.", nextOption: 237 }
            ]
        },
        { // 236
            message: "Do you believe that some things are better left unsaid, or do you think everything should be laid bare, no matter the cost?",
            options: [
                { text: "I think it’s better to keep some things hidden, even if it costs me.", nextOption: 237 },
                { text: "I believe everything should be revealed, no matter the consequences.", nextOption: 237 }
            ]
        },
        { // 237
            message: "You've reached the end. ",
            options: [
                { text: "I haven't.", nextOption: 237 },
                { text: "No.", nextOption: 238 }
            ]
        },
        { // 238
            message: "You've reached the end. ",
            options: [
                { text: "I haven't.", nextOption: 239 },
                { text: "No.", nextOption: 237 }
            ]
        },




    ];



    function addChatMessage(message, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('chat-message');
        messageDiv.classList.add(isUser ? 'user-message' : 'chatbot-message');
        messageDiv.innerText = message;

        chatbox.appendChild(messageDiv);
        chatbox.scrollTop = chatbox.scrollHeight;
    }

    function addChatOptions(options) {
        chatOptions.innerHTML = ''; 

        options.forEach(option => {
            const button = document.createElement('button');
            button.classList.add('chat-option');
            button.innerText = option.text;

            button.addEventListener('click', () => {
                console.log("Button clicked, going to message index:", option.nextOption);
                goToMessage(option.nextOption);
            });

            chatOptions.appendChild(button);
        });
    }

    function clearChat() {
        chatbox.innerHTML = '';
        chatOptions.innerHTML = '';
    }

    function goToMessage(index) {
        if (index >= 0 && index < conversationFlow.length) {
            const currentMessage = conversationFlow[index];
            clearChat();
            addChatMessage(currentMessage.message);
            addChatOptions(currentMessage.options);
        }
    }

    function startChat() {
        clearChat();
        goToMessage(0);
    }

    startChat();
});

