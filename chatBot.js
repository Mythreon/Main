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
                { text: "I want to discuss a topic with you", nextOption: 219},
            ]
        },
        {  // 9
            message: "Oh, you wanted back to the start? Sorry bud.",
            options: [
                { text: "WHAT", nextOption: 321},
                { text: "This leads me nowhere right?", nextOption: 111},
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
                        { text: "It’s easier, but I’d always feel like something is missing.", nextOption: 238 },
                        { text: "I’m not sure. Maybe in some situations it’s necessary.", nextOption: 239 }
                    ]
                },
                { // 195
                    message: "Honesty can cut deep, but sometimes the truth is all that matters. Do you agree?",
                    options: [
                        { text: "Yes, even if it’s painful, the truth is always the right choice.", nextOption: 240 },
                        { text: "No, some things are better left unsaid.", nextOption: 241 }
                    ]
                },
                { // 196
                    message: "There’s power in honesty, but sometimes it destroys relationships. Is it worth the cost?",
                    options: [
                        { text: "Yes, the truth is worth the destruction it causes.", nextOption: 242 },
                        { text: "No, relationships are more important than truth.", nextOption: 243 }
                    ]
                },
                { // 197
                    message: "The loneliness you feel when isolated is almost unbearable. Would you choose it over keeping your integrity?",
                    options: [
                        { text: "Yes, I’d rather be alone than fake who I am.", nextOption: 244 },
                        { text: "No, I’d hold on to my integrity but try to find a way out of isolation.", nextOption: 245 }
                    ]
                },
                { // 198
                    message: "Sometimes holding on to yourself means losing everything around you. Can you live with that kind of sacrifice?",
                    options: [
                        { text: "Yes, it’s better to lose everything than to lose who I am.", nextOption: 246 },
                        { text: "No, I couldn’t live with that kind of sacrifice.", nextOption: 247 }
                    ]
                },
                { // 199
                    message: "Adapting to others can help you survive, but is it worth the cost of losing yourself?",
                    options: [
                        { text: "No, I think I’d rather remain true to myself and face the consequences.", nextOption: 248 },
                        { text: "Yes, survival is more important than being true to myself.", nextOption: 249 }
                    ]
                },
                { // 200
                    message: "Even when you lose yourself, the world keeps turning. Can you ever truly come back from that?",
                    options: [
                        { text: "I don’t think you can ever fully return. Something will always be lost.", nextOption: 250 },
                        { text: "Maybe, but it would take a long time and immense effort.", nextOption: 251 }
                    ]
                },
                { // 201
                    message: "You can feel like you’re on the edge, but what if the edge is where you belong?",
                    options: [
                        { text: "Maybe that’s where I need to be, even if it’s painful.", nextOption: 252 },
                        { text: "No, I think I’d break if I went over the edge.", nextOption: 253 }
                    ]
                },
                { // 202
                    message: "Pushing yourself past your limits can break you, but does that mean you stop or keep going?",
                    options: [
                        { text: "I think I’d keep going. The pain might be worth something in the end.", nextOption: 254 },
                        { text: "No, I’d stop before I lose myself completely.", nextOption: 255 }
                    ]
                },
                { // 203
                    message: "If you break, can you repair the damage you’ve done to yourself? Or would it be permanent?",
                    options: [
                        { text: "I think it would change me forever, even if I could recover.", nextOption: 256 },
                        { text: "I believe recovery is possible, but it will never be the same.", nextOption: 257 }
                    ]
                },
                { // 204
                    message: "Sometimes we make decisions we can’t take back. Can you live with your past mistakes, or will they haunt you forever?",
                    options: [
                        { text: "I think I’d learn to live with it, even if it hurts.", nextOption: 258 },
                        { text: "No, I think the mistakes would never leave me.", nextOption: 259 }
                    ]
                },
                { // 205
                    message: "Would the weight of guilt ever lift, or is it something you would carry with you for the rest of your life?",
                    options: [
                        { text: "I think it would always be there, lingering in the background.", nextOption: 260 },
                        { text: "Maybe, with time, the guilt would fade.", nextOption: 261 }
                    ]
                },
                { // 206
                    message: "Forgiving yourself is hard, but it’s necessary. Would you ever be able to forgive yourself for something unforgivable?",
                    options: [
                        { text: "I’m not sure. It depends on what I’ve done.", nextOption: 262 },
                        { text: "I think I could, but I’d never forget what happened.", nextOption: 263 }
                    ]
                },
                { // 207
                    message: "Is betrayal ever truly justified? Or is it always a betrayal, no matter the circumstances?",
                    options: [
                        { text: "I think betrayal can sometimes be justified if there’s a good reason.", nextOption: 264 },
                        { text: "No, betrayal is never justified, no matter the reason.", nextOption: 265 }
                    ]
                },
                { // 208
                    message: "Could you ever trust someone after they’ve betrayed you? Or would you carry that distrust forever?",
                    options: [
                        { text: "I think I could trust again, but it would take time.", nextOption: 266 },
                        { text: "No, I don’t think I could ever fully trust someone again.", nextOption: 267 }
                    ]
                },
                { // 209
                    message: "If you’re completely alone, do you find strength in solitude, or does it drive you to madness?",
                    options: [
                        { text: "I think solitude would eventually break me down.", nextOption: 268 },
                        { text: "I could find strength in solitude, as long as I have a purpose.", nextOption: 269 }
                    ]
                },
                { // 210
                    message: "Isolation can give you clarity, but it can also make you forget who you are. Which would you choose?",
                    options: [
                        { text: "I think I’d lose myself in isolation, but at least I’d have peace.", nextOption: 270 },
                        { text: "I couldn’t choose isolation. I need connection.", nextOption: 271 }
                    ]
                },
                { // 211
                    message: "Could you survive alone in a world without companionship? Or would you crumble under the weight of loneliness?",
                    options: [
                        { text: "I think I could survive, but it would be unbearable in the long run.", nextOption: 272 },
                        { text: "No, I’d need others to keep me going.", nextOption: 273 }
                    ]
                },
                { // 212
                    message: "Loneliness changes you. Can you ever truly come back from being alone for so long?",
                    options: [
                        { text: "I think you can, but it will take a long time to heal.", nextOption: 274 },
                        { text: "No, I think it would be impossible to be the same again.", nextOption: 275 }
                    ]
                },
                { // 213
                    message: "Can a sacrifice ever truly be worth it, even if it means giving up everything?",
                    options: [
                        { text: "Maybe, but the price might be too high to bear.", nextOption: 276 },
                        { text: "No, nothing is worth losing everything for.", nextOption: 277 }
                    ]
                },
                { // 214
                    message: "What’s worse: a life of unfulfilled promises, or a life lived in regret over broken promises?",
                    options: [
                        { text: "I think a life of regret would be worse, even if the promises weren’t kept.", nextOption: 278 },
                        { text: "A life of broken promises would destroy me, I couldn’t live with that.", nextOption: 279 }
                    ]
                },
                { // 215
                    message: "Is there ever a moment when you stop fighting for something? When do you let go and accept defeat?",
                    options: [
                        { text: "I think there’s always a point where you have to let go.", nextOption: 280 },
                        { text: "I can never accept defeat. I’ll keep fighting until the end.", nextOption: 281 }
                    ]
                },
                { // 216
                    message: "What’s more important: the journey or the destination? Can you live without the end goal in mind?",
                    options: [
                        { text: "I think the journey is more important than the destination.", nextOption: 282 },
                        { text: "No, I need a destination to keep moving forward.", nextOption: 283 }
                    ]
                },
                { // 217
                    message: "Hope can be fleeting, but does it hurt more to live without it? Or is living in despair a better option?",
                    options: [
                        { text: "I think living without hope would be unbearable, even if despair is easier to bear.", nextOption: 284 },
                        { text: "Despair might be more honest, but I can’t live without hope.", nextOption: 285 }
                    ]
                },
                { // 218
                    message: "The end of the road is inevitable. Do you fear it, or accept it as part of life?",
                    options: [
                        { text: "I fear it, but I know it’s a part of life.", nextOption: 286 },
                        { text: "I accept it. It’s the only certainty we have.", nextOption: 287 }
                    ]
                },
                { // 219
                    message: "You can't change the past, but can you forgive it? Would you ever forgive the things you’ve done?",
                    options: [
                        { text: "I could forgive the past, but I’ll never forget it.", nextOption: 288 },
                        { text: "I don’t think I could ever truly forgive myself.", nextOption: 289 }
                    ]
                },
                { // 220
                    message: "The line between survival and self-destruction is thin. Can you live with your choices, or will they destroy you?",
                    options: [
                        { text: "I think I can live with it, but the consequences will follow me forever.", nextOption: 290 },
                        { text: "No, I think they’ll destroy me eventually.", nextOption: 291 }
                    ]
                },
                { // 221
                    message: "Pain is inevitable, but can it be overcome? Would you ever truly heal from your wounds?",
                    options: [
                        { text: "I think healing is possible, but it will always leave scars.", nextOption: 292 },
                        { text: "I don’t think healing is possible. It changes you permanently.", nextOption: 293 }
                    ]
                },
                { // 222
                    message: "Do you regret the things you've done, or are you at peace with the choices you made?",
                    options: [
                        { text: "I regret them, but I can’t change them now.", nextOption: 294 },
                        { text: "I think I’ve made peace with my choices, despite the consequences.", nextOption: 295 }
                    ]
                },
                { // 223
                    message: "Could you ever forgive someone who wronged you? Or would you carry that bitterness for life?",
                    options: [
                        { text: "I think I could forgive, but the bitterness would always be there.", nextOption: 296 },
                        { text: "No, I couldn’t forgive them. I’d hold onto the pain forever.", nextOption: 297 }
                    ]
                },
                { // 224
                    message: "Revenge might give you closure, but will it ever truly bring peace to your soul?",
                    options: [
                        { text: "I think it will bring temporary relief, but peace will always elude me.", nextOption: 298 },
                        { text: "I think it would bring peace, but I’d always wonder if it was worth it.", nextOption: 299 }
                    ]
                },
                { // 225
                    message: "Sometimes the scars we carry are visible, sometimes they’re not. Do you think scars are just reminders of the past or something more?",
                    options: [
                        { text: "They’re reminders, but they also shape who we become.", nextOption: 300 },
                        { text: "I think scars are marks that never truly heal.", nextOption: 301 }
                    ]
                },
                { // 226
                    message: "Living in a world that doesn't understand you can be suffocating. Is it worth trying to fit in, or is it better to remain isolated?",
                    options: [
                        { text: "It’s better to remain isolated. Fitting in never feels real.", nextOption: 302 },
                        { text: "I think it’s worth trying, even if it’s hard to find a place to belong.", nextOption: 303 }
                    ]
                },
                { // 227
                    message: "When the world closes in, it’s easy to lose yourself. How do you hold on to who you are when everything around you changes?",
                    options: [
                        { text: "I think it’s a constant struggle, but I’ll keep fighting to hold on.", nextOption: 304 },
                        { text: "I think eventually I’ll lose myself, but I can try to find a new version of me.", nextOption: 305 }
                    ]
                },
                { // 228
                    message: "What would you do if everything you believed in crumbled? Could you rebuild, or would you fall apart?",
                    options: [
                        { text: "I think I’d rebuild, but I would never be the same again.", nextOption: 306 },
                        { text: "I don’t think I could rebuild. I’d crumble under the weight of it all.", nextOption: 307 }
                    ]
                },
                { // 229
                    message: "You can only run from yourself for so long. When you face who you really are, what will you see?",
                    options: [
                        { text: "I think I’ll see someone I don’t recognize, but that’s who I am now.", nextOption: 308 },
                        { text: "I’m afraid I won’t like what I see, but it’s something I need to face.", nextOption: 309 }
                    ]
                },
                { // 229
                    message: "You can only run from yourself for so long. When you face who you really are, what will you see?",
                    options: [
                        { text: "I think I’ll see someone I don’t recognize, but that’s who I am now.", nextOption: 310 },
                        { text: "I’m afraid I won’t like what I see, but it’s something I need to face.", nextOption: 311 }
                    ]
                },
                { // 230
                    message: "The past is never truly gone. Does it define who you are, or can you choose a different path?",
                    options: [
                        { text: "I think the past defines me, whether I like it or not.", nextOption: 312 },
                        { text: "I believe I can choose my own path, regardless of the past.", nextOption: 313 }
                    ]
                },
                { // 231
                    message: "Do you think the future is already set, or do you have the power to change it?",
                    options: [
                        { text: "I think the future is set. Our choices don’t change much.", nextOption: 314 },
                        { text: "I believe I can change the future with my actions.", nextOption: 315 }
                    ]
                },
                { // 232
                    message: "When faced with overwhelming odds, do you rise to the challenge or do you give in?",
                    options: [
                        { text: "I’ll always rise to the challenge, no matter how difficult.", nextOption: 316 },
                        { text: "I think sometimes it’s better to give in and accept things as they are.", nextOption: 317 }
                    ]
                },
                { // 233
                    message: "Is it better to be loved or feared? Which would you choose if you had to pick one?",
                    options: [
                        { text: "I think being loved brings more peace, even if it’s harder to earn.", nextOption: 318 },
                        { text: "I’d rather be feared. Respect through fear can be powerful.", nextOption: 319 }
                    ]
                },
                { // 234
                    message: "Would you ever risk everything for a chance at greatness? Or is the cost too high?",
                    options: [
                        { text: "I think the risk is worth it, even if everything could be lost.", nextOption: 320 },
                        { text: "No, the cost of losing everything is too much for me to take.", nextOption: 321 }
                    ]
                },
                { // 235
                    message: "In the end, do you believe life is about finding happiness or accepting suffering?",
                    options: [
                        { text: "I think life is about finding happiness, even if suffering is part of the journey.", nextOption: 322 },
                        { text: "I believe life is about accepting suffering and making peace with it.", nextOption: 323 }
                    ]
                },
                { // 236
                    message: "How do you measure success? Is it by what you’ve achieved, or by what you’ve sacrificed?",
                    options: [
                        { text: "Success is about what I’ve achieved, no matter the cost.", nextOption: 324 },
                        { text: "Success is about what I’ve sacrificed, even if I haven’t achieved much.", nextOption: 325 }
                    ]
                },
                { // 237
                    message: "When faced with a difficult choice, do you follow your heart or your mind?",
                    options: [
                        { text: "I trust my heart; it rarely leads me astray.", nextOption: 112 },
                        { text: "I rely on logic and reason to guide me in tough situations.", nextOption: 45 }
                    ]
                },
                { // 238
                    message: "If everything you knew was taken away, would you still be able to find yourself?",
                    options: [
                        { text: "I believe I would, as long as I hold onto my core values.", nextOption: 89 },
                        { text: "It would be incredibly hard, but I think I would eventually rebuild.", nextOption: 13 }
                    ]
                },
                { // 239
                    message: "Sometimes, the only way forward is through the pain. Can you embrace suffering for growth?",
                    options: [
                        { text: "Yes, pain is a teacher that helps us grow stronger.", nextOption: 72 },
                        { text: "No, I’d rather find a way to avoid unnecessary suffering.", nextOption: 188 }
                    ]
                },
                { // 240
                    message: "Do you think it’s better to take risks and fail, or to play it safe and never know what could have been?",
                    options: [
                        { text: "I’d rather take risks and learn from my failures.", nextOption: 311 },
                        { text: "It’s better to stay safe and avoid unnecessary regret.", nextOption: 246 }
                    ]
                },
                { // 241
                    message: "Are we truly in control of our destiny, or are we just following a path already laid out for us?",
                    options: [
                        { text: "I believe we have control over our future, even if it’s challenging.", nextOption: 121 },
                        { text: "I think we’re just following the paths created for us by circumstances.", nextOption: 298 }
                    ]
                },
                { // 242
                    message: "If you could erase one mistake from your past, would you do it, or would you leave it as a part of your journey?",
                    options: [
                        { text: "I think I’d erase it, to avoid the pain it caused.", nextOption: 214 },
                        { text: "I’d leave it; mistakes are what make us who we are.", nextOption: 37 }
                    ]
                },
                { // 243
                    message: "Sometimes, the greatest strength is to ask for help. Would you be able to let others in when you need it most?",
                    options: [
                        { text: "Yes, I think it’s important to rely on others when necessary.", nextOption: 54 },
                        { text: "I find it hard to ask for help. I prefer to deal with things on my own.", nextOption: 128 }
                    ]
                },
                { // 244
                    message: "If the world fell apart, could you rebuild it, or would you crumble under the weight of everything lost?",
                    options: [
                        { text: "I think I could rebuild, but it would be a long and painful process.", nextOption: 310 },
                        { text: "I’m not sure. I fear that I would break under the pressure.", nextOption: 77 }
                    ]
                },
                { // 245
                    message: "Do you believe that fate is a force that shapes us, or do we create our own paths?",
                    options: [
                        { text: "I believe fate plays a role, but we still have the power to change our lives.", nextOption: 58 },
                        { text: "I think we create our own destiny through our choices and actions.", nextOption: 92 }
                    ]
                },
                { // 246
                    message: "Would you sacrifice your happiness to protect someone you love, even if it meant living in pain?",
                    options: [
                        { text: "Yes, I’d do anything to protect the ones I care about, even at my own expense.", nextOption: 309 },
                        { text: "No, I think personal happiness is just as important as protecting others.", nextOption: 150 }
                    ]
                },
                { // 247
                    message: "How do you cope when the world around you is falling apart? Do you face it head-on or retreat into yourself?",
                    options: [
                        { text: "I face it head-on. Avoiding the chaos only makes it worse.", nextOption: 285 },
                        { text: "I retreat. Sometimes, it’s better to gather strength before confronting the storm.", nextOption: 110 }
                    ]
                },
                { // 248
                    message: "Is there ever a time when giving up is the right choice, or should we always keep pushing forward?",
                    options: [
                        { text: "I think there are times when giving up is the most honest choice.", nextOption: 56 },
                        { text: "I believe in never giving up. There's always a way through the struggle.", nextOption: 300 }
                    ]
                },
                { // 249
                    message: "How do you measure success? Is it by the things you achieve, or the person you become along the way?",
                    options: [
                        { text: "Success is about the journey and who I become through it.", nextOption: 29 },
                        { text: "I measure success by the achievements and milestones I reach.", nextOption: 189 }
                    ]
                },
                { // 250
                    message: "Can love heal all wounds, or is there a pain that even love cannot fix?",
                    options: [
                        { text: "I think love can heal almost anything, but some wounds are too deep.", nextOption: 245 },
                        { text: "Love is powerful, but it can’t always fix what’s broken inside.", nextOption: 18 }
                    ]
                },
                { // 251
                    message: "When you’re lost in the darkness, can you trust yourself to find your way, or do you need someone else to guide you?",
                    options: [
                        { text: "I believe I can find my way, even if it takes time.", nextOption: 101 },
                        { text: "Sometimes, it’s too hard to do it alone. I’d need someone to help me navigate.", nextOption: 250 }
                    ]
                },
                { // 252
                    message: "If you were given a second chance at life, would you take it, or would you keep walking the path you’ve chosen?",
                    options: [
                        { text: "I would take it, to see if I could do things differently.", nextOption: 66 },
                        { text: "I’m content with my path. I’ve made my choices, and I’ll live with them.", nextOption: 220 }
                    ]
                },
                { // 253
                    message: "When everything feels like it’s slipping through your fingers, do you try to hold on, or do you let go?",
                    options: [
                        { text: "I try to hold on, even when it seems impossible.", nextOption: 72 },
                        { text: "I think letting go is sometimes the only way to find peace.", nextOption: 167 }
                    ]
                },
                { // 254
                    message: "If you knew the world was going to end tomorrow, what would you do with the time you had left?",
                    options: [
                        { text: "I’d spend it with loved ones, making sure they knew how much they meant to me.", nextOption: 132 },
                        { text: "I’d try to do something meaningful or adventurous, leaving behind memories of who I was.", nextOption: 274 }
                    ]
                },
                { // 255
                    message: "Can you ever fully forgive someone who’s hurt you deeply, or is that something you’ll carry with you forever?",
                    options: [
                        { text: "I think I could forgive them, but the scars would always remain.", nextOption: 82 },
                        { text: "I don’t think I could ever forgive someone who betrayed me that deeply.", nextOption: 229 }
                    ]
                },
                { // 256
                    message: "What’s the greatest fear you face: not living up to your potential, or the consequences of trying?",
                    options: [
                        { text: "My greatest fear is not trying at all and never knowing what I could have accomplished.", nextOption: 312 },
                        { text: "I fear the consequences of trying and failing, even if it’s part of the journey.", nextOption: 95 }
                    ]
                },
                { // 257
                    message: "When you make a decision, do you consider the consequences for others, or do you focus solely on yourself?",
                    options: [
                        { text: "I always consider how my choices will affect the people around me.", nextOption: 89 },
                        { text: "I think I focus more on myself, though I do think about others occasionally.", nextOption: 125 }
                    ]
                },
                { // 258
                    message: "Do you find it easier to forgive others, or to forgive yourself?",
                    options: [
                        { text: "I find it easier to forgive others; forgiving myself is much harder.", nextOption: 220 },
                        { text: "I tend to forgive myself more easily. It's others I struggle with.", nextOption: 175 },
                        { text: "Forgiving both is equally difficult, but I try to make peace with both sides.", nextOption: 198 }
                    ]
                },
                { // 259
                    message: "Is there more strength in solitude or in the company of others?",
                    options: [
                        { text: "I believe there's strength in solitude. It’s when we truly learn who we are.", nextOption: 301 },
                        { text: "Strength lies in connection. People are stronger when they’re together.", nextOption: 185 },
                        { text: "It depends on the situation, but a balance of both is ideal.", nextOption: 270 }
                    ]
                },
                { // 260
                    message: "If you had to choose, would you sacrifice your dreams for the happiness of others, or pursue them regardless of the cost?",
                    options: [
                        { text: "I would sacrifice my dreams to make those I love happy.", nextOption: 201 },
                        { text: "I would pursue my dreams at any cost, even if it meant disappointing others.", nextOption: 350 },
                        { text: "It would depend on the situation, but I’d like to think I could balance both.", nextOption: 180 }
                    ]
                },
                { // 261
                    message: "How do you react when you’re pushed to your limits? Do you fight back, or do you retreat?",
                    options: [
                        { text: "I fight back. I refuse to let anything break me.", nextOption: 301 },
                        { text: "I tend to retreat, to regroup and come back stronger.", nextOption: 228 },
                        { text: "I try to stay calm and think things through before reacting.", nextOption: 199 }
                    ]
                },
                { // 262
                    message: "Do you believe in fate, or do you think we create our own path?",
                    options: [
                        { text: "I believe fate has a hand in shaping us, but our choices matter.", nextOption: 230 },
                        { text: "I think we create our own destiny with every decision we make.", nextOption: 270 },
                        { text: "I’m unsure, but I think there’s a balance between both.", nextOption: 165 }
                    ]
                },
                { // 263
                    message: "What’s more important to you: peace of mind or the pursuit of passion?",
                    options: [
                        { text: "Peace of mind is more important to me. Without it, nothing else matters.", nextOption: 295 },
                        { text: "Pursuing my passion is my top priority. I can handle chaos if I’m doing what I love.", nextOption: 167 },
                        { text: "I think both are essential. Finding a way to pursue passion while maintaining peace is ideal.", nextOption: 250 }
                    ]
                },
                { // 264
                    message: "If you could change one moment from your past, would you? Or do you believe everything happens for a reason?",
                    options: [
                        { text: "I would change it if I could. There’s a mistake I regret deeply.", nextOption: 170 },
                        { text: "I believe everything happens for a reason, even if it’s painful at the time.", nextOption: 310 },
                        { text: "I’d leave the past as it is. It’s shaped who I am today.", nextOption: 280 }
                    ]
                },
                { // 265
                    message: "When life gets hard, do you tend to push through or seek comfort?",
                    options: [
                        { text: "I push through. I believe in overcoming challenges on my own.", nextOption: 245 },
                        { text: "I seek comfort when things get tough. Sometimes, I need a break.", nextOption: 200 },
                        { text: "I try to find a balance, but I lean more toward pushing through.", nextOption: 193 }
                    ]
                },
                { // 266
                    message: "If you could only choose one, would you rather have love or power?",
                    options: [
                        { text: "I would choose love. It’s the most fulfilling thing in life.", nextOption: 310 },
                        { text: "Power is what I would choose. It gives you control over your destiny.", nextOption: 220 },
                        { text: "I think both are important, but if forced to choose, love would be the priority.", nextOption: 165 }
                    ]
                },
                { // 267
                    message: "Is it better to have loved and lost, or never to have loved at all?",
                    options: [
                        { text: "I believe it’s better to have loved and lost. The experience is worth the pain.", nextOption: 175 },
                        { text: "Never having loved is easier, but it’s also empty. Love gives life meaning.", nextOption: 180 },
                        { text: "It’s a complex question, but I think both sides have their merits.", nextOption: 150 }
                    ]
                },
                { // 268
                    message: "When you face failure, do you see it as an opportunity to learn or as a reflection of your worth?",
                    options: [
                        { text: "Failure is an opportunity to grow. I don’t see it as a failure of who I am.", nextOption: 249 },
                        { text: "I struggle with failure. Sometimes, it makes me question my worth.", nextOption: 275 },
                        { text: "I think failure is a mix of both. It teaches lessons, but it can be hard to shake off.", nextOption: 220 }
                    ]
                },
                { // 269
                    message: "What do you believe is the purpose of suffering? Is it a lesson, or just an unavoidable part of life?",
                    options: [
                        { text: "Suffering is a lesson. It teaches us resilience and wisdom.", nextOption: 260 },
                        { text: "Suffering is unavoidable. It’s just part of being human.", nextOption: 155 },
                        { text: "I think suffering can be both—a lesson and an unavoidable part of life.", nextOption: 190 }
                    ]
                },
                { // 270
                    message: "Is happiness something you chase, or something you let come naturally?",
                    options: [
                        { text: "I chase happiness. I believe I need to take action to find it.", nextOption: 220 },
                        { text: "I let happiness come naturally. It’s something I don’t try to force.", nextOption: 285 },
                        { text: "I think both are important—sometimes you need to chase it, and other times, you need to let go and let it come.", nextOption: 235 }
                    ]
                },
                { // 271
                    message: "When you’re afraid of something, do you confront it head-on or try to avoid it?",
                    options: [
                        { text: "I confront my fears. Facing them head-on is the only way to grow.", nextOption: 160 },
                        { text: "I avoid it as long as I can, but I eventually deal with it.", nextOption: 289 },
                        { text: "I try to find a balance. Sometimes confronting it is the best option, other times avoidance helps.", nextOption: 274 }
                    ]
                },
                { // 272
                    message: "If you could speak to your younger self, what advice would you give?",
                    options: [
                        { text: "I’d tell myself to trust the journey and not be afraid to take risks.", nextOption: 189 },
                        { text: "I’d tell myself to stop worrying about things that might never happen.", nextOption: 265 },
                        { text: "I’d advise myself to be kinder to others and to take care of my mental health.", nextOption: 170 }
                    ]
                },
                { // 273
                    message: "Do you believe in second chances, or do you think people should live with the consequences of their actions?",
                    options: [
                        { text: "I believe in second chances. Everyone makes mistakes, and we should learn from them.", nextOption: 305 },
                        { text: "People should face the consequences of their actions. There’s no growth without accountability.", nextOption: 229 },
                        { text: "It depends on the situation, but I think people can change if they truly try.", nextOption: 290 }
                    ]
                },
                { // 274
                    message: "What does success look like to you? Is it measured by accomplishments, happiness, or something else?",
                    options: [
                        { text: "Success is about happiness. If I’m happy, I consider myself successful.", nextOption: 308 },
                        { text: "Success is measured by accomplishments and the impact I’ve made.", nextOption: 320 },
                        { text: "Success is a mix of both. Happiness and accomplishments both matter.", nextOption: 260 }
                    ]
                },
                { // 275
                    message: "When facing a major decision, do you rely more on your intuition or logic?",
                    options: [
                        { text: "I rely more on intuition. It often guides me to the right choice.", nextOption: 228 },
                        { text: "Logic is my go-to. I like to weigh all the facts before making a decision.", nextOption: 190 },
                        { text: "I use both, depending on the situation. A balance between intuition and logic works best for me.", nextOption: 250 }
                    ]
                },
                { // 276
                    message: "When you face adversity, do you draw strength from your own resilience or from the support of others?",
                    options: [
                        { text: "I draw strength from my own resilience. I believe in self-reliance.", nextOption: 305 },
                        { text: "The support of others is crucial. I find strength in the people around me.", nextOption: 190 },
                        { text: "I think both are important. My own strength and the support of others help me get through tough times.", nextOption: 265 }
                    ]
                },
                { // 277
                    message: "Do you think happiness is a destination to reach or a journey to experience?",
                    options: [
                        { text: "Happiness is a destination. Once I get there, I’ll feel fulfilled.", nextOption: 315 },
                        { text: "Happiness is a journey. It’s about finding joy in the little things along the way.", nextOption: 230 },
                        { text: "I think it’s a bit of both. The destination is important, but the journey matters too.", nextOption: 260 }
                    ]
                },
                { // 278
                    message: "If you had the power to change one thing about the world, what would it be?",
                    options: [
                        { text: "I would change how people treat each other. Kindness and empathy should be the foundation.", nextOption: 290 },
                        { text: "I would focus on creating a world where everyone has access to education and opportunities.", nextOption: 350 },
                        { text: "I would work to eliminate poverty and inequality. No one should have to suffer in a world of abundance.", nextOption: 230 }
                    ]
                },
                { // 279
                    message: "When making a tough decision, do you trust your gut instinct or take time to analyze the situation?",
                    options: [
                        { text: "I trust my gut. It’s often more accurate than I give it credit for.", nextOption: 245 },
                        { text: "I take time to analyze the situation. I prefer to think things through thoroughly.", nextOption: 190 },
                        { text: "I try to balance both. Sometimes my gut tells me one thing, but I still take a step back to think it through.", nextOption: 270 }
                    ]
                },
                { // 280
                    message: "Is it better to be feared or loved in your personal relationships?",
                    options: [
                        { text: "I’d rather be loved. Genuine affection is more fulfilling than fear.", nextOption: 300 },
                        { text: "Being feared can sometimes be necessary, but love is always more powerful in the long run.", nextOption: 260 },
                        { text: "It’s a balance. Being loved creates trust, but sometimes a bit of respect and fear is needed too.", nextOption: 240 }
                    ]
                },
                { // 281
                    message: "Do you believe that your actions define you, or that your thoughts and intentions are what matter most?",
                    options: [
                        { text: "My actions define me. What I do speaks louder than what I think.", nextOption: 315 },
                        { text: "My thoughts and intentions matter most. I believe they shape who I am, even if my actions aren’t always perfect.", nextOption: 230 },
                        { text: "Both are equally important. Actions and intentions should align for a true sense of self.", nextOption: 275 }
                    ]
                },
                { // 282
                    message: "What do you value more: the pursuit of knowledge or the preservation of wisdom?",
                    options: [
                        { text: "I value the pursuit of knowledge. There’s always something new to learn.", nextOption: 190 },
                        { text: "Preserving wisdom is more important. Knowledge without wisdom can lead to poor decisions.", nextOption: 260 },
                        { text: "I think both are important. Knowledge and wisdom go hand in hand to guide us through life.", nextOption: 230 }
                    ]
                },
                { // 283
                    message: "Do you think it’s better to live a life of routine or embrace spontaneity?",
                    options: [
                        { text: "I prefer routine. It brings stability and peace to my life.", nextOption: 300 },
                        { text: "Spontaneity is the key to a fulfilling life. Living in the moment is the best way to experience the world.", nextOption: 265 },
                        { text: "I try to find a balance between the two. A little spontaneity mixed with routine keeps life interesting.", nextOption: 220 }
                    ]
                },
                { // 284
                    message: "When faced with failure, do you analyze what went wrong or move on quickly to avoid dwelling on it?",
                    options: [
                        { text: "I analyze failure. I want to learn from every setback.", nextOption: 240 },
                        { text: "I move on quickly. Dwelling on failure only slows me down.", nextOption: 220 },
                        { text: "I think it’s important to analyze, but also to let go quickly so I don’t get stuck in the past.", nextOption: 250 }
                    ]
                },
                { // 285
                    message: "Is it better to have a few close friends or a wide network of acquaintances?",
                    options: [
                        { text: "I prefer a few close friends. Quality over quantity is important to me.", nextOption: 270 },
                        { text: "A wide network can be valuable, but I appreciate the depth that comes with a few close friendships.", nextOption: 240 },
                        { text: "It’s all about balance. I want both deep connections and a broad network to support me.", nextOption: 200 }
                    ]
                },
                { // 286
                    message: "If you could live anywhere in the world, where would it be and why?",
                    options: [
                        { text: "I would live somewhere quiet and serene, close to nature, to find peace and balance.", nextOption: 310 },
                        { text: "I’d live in a bustling city with a rich culture and endless opportunities to grow and learn.", nextOption: 280 },
                        { text: "I want a balance of both—a place with vibrant culture and access to nature for peace.", nextOption: 260 }
                    ]
                },
                { // 287
                    message: "Is it more important to be respected or liked?",
                    options: [
                        { text: "Respect is more important to me. I’d rather earn respect than be liked for the wrong reasons.", nextOption: 305 },
                        { text: "Being liked is important for building strong connections and bonds.", nextOption: 250 },
                        { text: "Both are important. I’d like to be respected, but also to have positive relationships with others.", nextOption: 270 }
                    ]
                },
                { // 288
                    message: "When you feel lost, what helps you find your way again?",
                    options: [
                        { text: "I turn inward, focusing on my intuition to guide me.", nextOption: 320 },
                        { text: "I lean on the support of close friends and family to help me find direction.", nextOption: 265 },
                        { text: "I seek inspiration from outside sources—books, art, and nature all help me regain clarity.", nextOption: 240 }
                    ]
                },
                { // 289
                    message: "Do you value success more than happiness, or happiness more than success?",
                    options: [
                        { text: "I value happiness more. Success without happiness feels empty.", nextOption: 300 },
                        { text: "Success is more important. Achieving my goals brings me a sense of fulfillment.", nextOption: 220 },
                        { text: "Both are important. I want to be successful, but happiness is what makes the success worth it.", nextOption: 250 }
                    ]
                },
                { // 290
                    message: "Is it better to follow your heart or follow your head when making important decisions?",
                    options: [
                        { text: "I follow my heart. It’s where my true desires and passions lie.", nextOption: 265 },
                        { text: "I rely on my head. Logical thinking helps me make better, more calculated choices.", nextOption: 210 },
                        { text: "I think it’s a balance. I use my head for strategy and my heart for passion.", nextOption: 280 }
                    ]
                },
                { // 291
                    message: "Would you rather have the ability to predict the future or change the past?",
                    options: [
                        { text: "I’d rather predict the future. It gives me a chance to prepare and adapt.", nextOption: 320 },
                        { text: "I’d choose to change the past. I’d want to fix the mistakes I made.", nextOption: 250 },
                        { text: "I’d choose both. If I could, I’d use both powers to live a better life.", nextOption: 275 }
                    ]
                },
                { // 292
                    message: "Is it more important to be free or to be secure?",
                    options: [
                        { text: "Freedom is more important to me. I’d rather have autonomy than security.", nextOption: 310 },
                        { text: "Security is key. Without it, freedom can feel meaningless.", nextOption: 235 },
                        { text: "A balance of both. Freedom with some level of security is the ideal state.", nextOption: 290 }
                    ]
                },
                { // 293
                    message: "What’s more important to you: adventure or stability?",
                    options: [
                        { text: "Adventure is what drives me. I need excitement and new experiences in life.", nextOption: 315 },
                        { text: "Stability is essential. I need a sense of security to feel at ease.", nextOption: 270 },
                        { text: "I value both. A little adventure mixed with stability makes life more fulfilling.", nextOption: 250 }
                    ]
                },
                { // 294
                    message: "Do you think happiness is a choice or a state of being?",
                    options: [
                        { text: "I think happiness is a choice. We can decide to find joy, even in difficult circumstances.", nextOption: 265 },
                        { text: "Happiness is a state of being. It comes from within, and we must learn to cultivate it.", nextOption: 285 },
                        { text: "I think it’s a bit of both. We can choose happiness, but it’s also something that has to come naturally.", nextOption: 255 }
                    ]
                },
                { // 295
                    message: "Do you believe that everything happens for a reason, or do you think life is a series of random events?",
                    options: [
                        { text: "I believe everything happens for a reason. There’s a higher purpose in everything.", nextOption: 320 },
                        { text: "Life is a series of random events. We make our own meaning out of it.", nextOption: 275 },
                        { text: "I think both are true. Some things are meant to be, but others are just random chance.", nextOption: 260 }
                    ]
                },
                { // 296
                    message: "Is it better to be highly skilled in one thing or moderately skilled in many things?",
                    options: [
                        { text: "I’d rather be highly skilled in one thing. Mastery is important to me.", nextOption: 285 },
                        { text: "I value being moderately skilled in many things. It gives me versatility and adaptability.", nextOption: 270 },
                        { text: "Both have their advantages. It depends on the situation and what’s needed.", nextOption: 230 }
                    ]
                },
                { // 297
                    message: "Do you value peace more than passion, or passion more than peace?",
                    options: [
                        { text: "I value peace more. Inner peace is what gives me the clarity to pursue my goals.", nextOption: 290 },
                        { text: "Passion is more important to me. It fuels my ambition and gives me purpose.", nextOption: 250 },
                        { text: "I think both are important. Passion drives me, but peace gives me the balance to enjoy life.", nextOption: 270 }
                    ]
                },
                { // 298
                    message: "Do you find joy in the little moments or in grand, life-changing experiences?",
                    options: [
                        { text: "I find joy in the little moments. It’s the small things that make life beautiful.", nextOption: 275 },
                        { text: "Grand experiences bring me joy. I seek out transformative moments.", nextOption: 240 },
                        { text: "I appreciate both. A balance of small moments and big experiences keeps life interesting.", nextOption: 250 }
                    ]
                },
                { // 299
                    message: "When you encounter a challenge, do you face it head-on or take a step back to assess it first?",
                    options: [
                        { text: "I face it head-on. I believe challenges are meant to be conquered.", nextOption: 280 },
                        { text: "I take a step back. I prefer to analyze the situation thoroughly before acting.", nextOption: 230 },
                        { text: "I think it’s important to strike a balance. Sometimes jumping in is necessary, other times it’s better to think things through.", nextOption: 260 }
                    ]
                },
                { // 300
                    message: "Do you value loyalty or independence more in your relationships?",
                    options: [
                        { text: "Loyalty is more important to me. Trust and commitment form the foundation of any relationship.", nextOption: 320 },
                        { text: "Independence is key. I believe it’s important to maintain a sense of self, even in close relationships.", nextOption: 270 },
                        { text: "I think both are essential. A relationship needs both loyalty and independence to thrive.", nextOption: 250 }
                    ]
                },
                { // 301
                    message: "Do you believe that challenges make us stronger, or do you think they simply teach us to endure?",
                    options: [
                        { text: "Challenges make us stronger. They shape our character and resilience.", nextOption: 302 },
                        { text: "Challenges teach us to endure. They build our ability to persist despite adversity.", nextOption: 303 },
                        { text: "I think both are true. Challenges help us grow, but they also teach us how to cope with hardship.", nextOption: 304 }
                    ]
                },
                { // 302
                    message: "Do you think success is determined by hard work or by natural talent?",
                    options: [
                        { text: "Success is determined by hard work. Anyone can succeed with enough effort and dedication.", nextOption: 305 },
                        { text: "Natural talent plays a significant role, but hard work is still important to hone that talent.", nextOption: 306 },
                        { text: "I think both are important. Hard work can take you far, but natural talent gives you a head start.", nextOption: 307 }
                    ]
                },
                { // 303
                    message: "Would you rather have the ability to heal others or the ability to communicate with animals?",
                    options: [
                        { text: "I’d rather have the ability to heal others. It would allow me to make a real difference in people’s lives.", nextOption: 308 },
                        { text: "The ability to communicate with animals would be amazing. It would open up a whole new world of understanding.", nextOption: 309 },
                        { text: "I think both would be incredible. Healing others is important, but connecting with animals could bring a deeper sense of empathy.", nextOption: 310 }
                    ]
                },
                { // 304
                    message: "What’s more important to you: achieving your personal goals or helping others achieve theirs?",
                    options: [
                        { text: "Achieving my personal goals is most important. I need to fulfill my own potential before I can help others.", nextOption: 311 },
                        { text: "Helping others achieve their goals is more important. I find fulfillment in seeing others succeed.", nextOption: 312 },
                        { text: "A balance of both. I want to achieve my own goals, but I also want to contribute to the success of others.", nextOption: 313 }
                    ]
                },
                { // 305
                    message: "Do you think it’s more important to focus on the present moment or to plan for the future?",
                    options: [
                        { text: "The present moment is most important. We can only control what’s happening now.", nextOption: 314 },
                        { text: "Planning for the future is crucial. It’s important to have a vision and work towards it.", nextOption: 315 },
                        { text: "I think both are necessary. The present moment is where life happens, but planning for the future keeps us on track.", nextOption: 316 }
                    ]
                },
                { // 306
                    message: "Would you rather have a life of simplicity or a life full of adventure and challenges?",
                    options: [
                        { text: "A life of simplicity sounds ideal. I value peace and calm over constant excitement.", nextOption: 317 },
                        { text: "I’d prefer a life full of adventure and challenges. It’s through overcoming obstacles that we grow.", nextOption: 318 },
                        { text: "I think a little of both is the best option. I want some simplicity, but I also crave adventure.", nextOption: 319 }
                    ]
                },
                { // 307
                    message: "Do you believe that luck plays a large role in success, or do you think it’s all about hard work and determination?",
                    options: [
                        { text: "Luck plays a role, but hard work and determination are what ultimately lead to success.", nextOption: 320 },
                        { text: "Success is all about hard work and determination. Luck might help, but it’s the effort that counts.", nextOption: 321 },
                        { text: "Luck definitely has an impact, but it’s the balance of hard work and timing that leads to success.", nextOption: 322 }
                    ]
                },
                { // 308
                    message: "Is it better to be an optimist or a realist in life?",
                    options: [
                        { text: "I prefer to be an optimist. A positive outlook can create opportunities even in tough situations.", nextOption: 323 },
                        { text: "Realism is better. Understanding things as they truly are helps you navigate life more effectively.", nextOption: 324 },
                        { text: "A bit of both. Optimism helps me stay hopeful, but realism helps me stay grounded.", nextOption: 325 }
                    ]
                },
                { // 309
                    message: "When you think about your legacy, what do you hope to leave behind?",
                    options: [
                        { text: "I hope to leave behind a legacy of kindness and compassion, making a positive impact on those around me.", nextOption: 326 },
                        { text: "I want to leave a legacy of accomplishment and success, showing that hard work pays off.", nextOption: 327 },
                        { text: "I hope to leave behind a balanced legacy, one that reflects both my achievements and the love I shared with others.", nextOption: 328 }
                    ]
                },
                { // 310
                    message: "Do you believe it’s more important to make your own path in life or to follow the example set by others?",
                    options: [
                        { text: "Making my own path is crucial. I want to create my own journey, not follow in someone else’s footsteps.", nextOption: 329 },
                        { text: "I believe in following the example set by others. Learning from those who have gone before me can lead to success.", nextOption: 330 },
                        { text: "I think a balance of both is best. It’s important to be inspired by others, but it’s also important to carve out my own way.", nextOption: 331 }
                    ]
                },
                { // 311
                    message: "Is it more important to be constantly moving forward or to take time to reflect on where you’ve been?",
                    options: [
                        { text: "I value constantly moving forward. Progress is what keeps me going.", nextOption: 332 },
                        { text: "Taking time to reflect is more important. Understanding where I’ve been helps me better navigate where I’m going.", nextOption: 333 },
                        { text: "Both are essential. I need to move forward, but I also need to reflect to understand my progress.", nextOption: 334 }
                    ]
                },
                { // 312
                    message: "Would you rather have a deep connection with a few people or many shallow connections with lots of people?",
                    options: [
                        { text: "I’d rather have a deep connection with a few people. Quality over quantity is what matters most to me.", nextOption: 335 },
                        { text: "Many shallow connections suit me just fine. I like having a wide range of relationships.", nextOption: 336 },
                        { text: "I think a balance of both is ideal. Deep connections are important, but it’s also nice to have a wide circle of acquaintances.", nextOption: 337 }
                    ]
                },
                { // 313
                    message: "When making an important decision, do you seek advice from others or trust your own judgment?",
                    options: [
                        { text: "I trust my own judgment. I believe in my ability to make the right decision for myself.", nextOption: 338 },
                        { text: "I seek advice from others. I value the perspectives and experiences of people I trust.", nextOption: 339 },
                        { text: "I try to do both. I consider my own judgment, but I also value the input of others.", nextOption: 340 }
                    ]
                },
                { // 314
                    message: "Is it more important to be in a relationship or to focus on personal growth?",
                    options: [
                        { text: "Personal growth is more important. I need to focus on becoming the best version of myself.", nextOption: 341 },
                        { text: "Being in a relationship is essential. It’s about building meaningful connections and sharing life with others.", nextOption: 342 },
                        { text: "I think both are important. Personal growth and relationships complement each other in a fulfilling life.", nextOption: 343 }
                    ]
                },
                { // 315
                    message: "Would you rather have the ability to change the past or see into the future?",
                    options: [
                        { text: "Changing the past would allow me to fix my mistakes and make different choices.", nextOption: 344 },
                        { text: "Seeing into the future would give me the chance to prepare for what’s coming.", nextOption: 345 },
                        { text: "Both would be valuable. Changing the past could right wrongs, and seeing the future could help me make better choices.", nextOption: 346 }
                    ]
                },
                { // 316
                    message: "Do you think people are inherently good or inherently flawed?",
                    options: [
                        { text: "I believe people are inherently good, but circumstances can influence behavior.", nextOption: 317 },
                        { text: "People are inherently flawed, but we have the capacity for growth and improvement.", nextOption: 0 }
                    ]
                },
                { // 317
                    message: "Is it more important to be liked by others or to be respected?",
                    options: [
                        { text: "Being respected is more important. It’s about earning admiration for who you truly are.", nextOption: 318 },
                        { text: "Being liked matters more. I value connection and positive relationships above all.", nextOption: 319 }
                    ]
                },
                { // 318
                    message: "Would you rather be feared or loved?",
                    options: [
                        { text: "I’d rather be loved. Genuine affection and trust are more valuable in the long run.", nextOption: 320 },
                        { text: "Being feared could command respect, but I think love brings deeper connections.", nextOption: 0 }
                    ]
                },
                { // 319
                    message: "Do you believe in fate or do we create our own destiny?",
                    options: [
                        { text: "I believe we create our own destiny. Our choices shape our future.", nextOption: 321 },
                        { text: "Fate plays a role. Sometimes things happen for a reason, even if we don’t understand it.", nextOption: 0 }
                    ]
                },
                { // 320
                    message: "Is it better to be an independent person or to rely on others for support?",
                    options: [
                        { text: "Being independent is more important. I want to be self-sufficient and confident in my own abilities.", nextOption: 322 },
                        { text: "Relying on others is crucial. Life is about building supportive networks and trusting others.", nextOption: 0 }
                    ]
                },
                { // 321
                    message: "Do you think the journey is more important than the destination?",
                    options: [
                        { text: "The journey is where the real growth happens. It’s about learning along the way.", nextOption: 323 },
                        { text: "The destination matters most. Reaching a goal gives purpose to the journey.", nextOption: 324 }
                    ]
                },
                { // 322
                    message: "Would you rather live in the past, present, or future?",
                    options: [
                        { text: "I’d prefer to live in the present. It’s the only moment we can truly experience.", nextOption: 0 },
                        { text: "Living in the future sounds intriguing. It would be fascinating to see what’s to come.", nextOption: 325 }
                    ]
                },
                { // 323
                    message: "Do you prefer stability or the thrill of change?",
                    options: [
                        { text: "Stability is essential. I like having a steady foundation to build upon.", nextOption: 326 },
                        { text: "I thrive on change. New experiences and challenges keep life exciting.", nextOption: 0 }
                    ]
                },
                { // 324
                    message: "Do you believe that money can buy happiness?",
                    options: [
                        { text: "Money can help with comfort and opportunities, but true happiness comes from within.", nextOption: 327 },
                        { text: "Money definitely makes life easier, but it’s not the key to lasting happiness.", nextOption: 328 }
                    ]
                },
                { // 325
                    message: "Is it more important to be open-minded or to stand by your principles?",
                    options: [
                        { text: "Being open-minded is crucial. I think we should always be willing to learn and adapt.", nextOption: 0 },
                        { text: "Standing by your principles is important. Our values guide our decisions and actions.", nextOption: 329 }
                    ]
                },
                { // 326
                    message: "Do you value logic or emotions more in making decisions?",
                    options: [
                        { text: "Logic is more important. I prefer to think through things rationally.", nextOption: 330 },
                        { text: "Emotions are key. I believe our feelings are often the best guides for decision-making.", nextOption: 0 }
                    ]
                },
                { // 327
                    message: "Is it more important to have freedom or security in life?",
                    options: [
                        { text: "Freedom is essential. I value independence and the ability to make my own choices.", nextOption: 0 },
                        { text: "Security is more important. I need stability and a sense of safety to thrive.", nextOption: 331 }
                    ]
                },
                { // 328
                    message: "Would you rather have a small circle of close friends or a large network of acquaintances?",
                    options: [
                        { text: "A small circle of close friends is better. Quality over quantity matters most to me.", nextOption: 332 },
                        { text: "A large network of acquaintances is valuable. It offers more opportunities and connections.", nextOption: 0 }
                    ]
                },
                { // 329
                    message: "Do you prefer to spend your time in solitude or in social situations?",
                    options: [
                        { text: "I enjoy solitude. It helps me recharge and reflect on my thoughts.", nextOption: 333 },
                        { text: "Social situations are more enjoyable. I find energy and inspiration in connecting with others.", nextOption: 0 }
                    ]
                },
                { // 330
                    message: "Is it better to live a life full of excitement or a life full of peace?",
                    options: [
                        { text: "Excitement is key. I want a life full of adventure and new experiences.", nextOption: 334 },
                        { text: "Peace is more important. I value calm and serenity in my life.", nextOption: 0 }
                    ]
                },
                { // 331
                    message: "Would you rather be famous or remain anonymous?",
                    options: [
                        { text: "I’d rather remain anonymous. I value my privacy and prefer not to be in the spotlight.", nextOption: 335 },
                        { text: "Fame could be interesting. It would bring opportunities and influence.", nextOption: 0 }
                    ]
                },
                { // 332
                    message: "Do you believe in second chances?",
                    options: [
                        { text: "I believe in second chances. Everyone deserves the opportunity to make things right.", nextOption: 336 },
                        { text: "Second chances can be dangerous. Sometimes it’s better to move on from past mistakes.", nextOption: 0 }
                    ]
                },
                { // 333
                    message: "Do you think it’s possible to truly change as a person?",
                    options: [
                        { text: "People can change, but it takes a lot of effort and self-awareness.", nextOption: 337 },
                        { text: "Change is difficult, but I think it’s possible with determination and support.", nextOption: 0 }
                    ]
                },
                { // 334
                    message: "Would you rather be a leader or a follower?",
                    options: [
                        { text: "I’d rather be a leader. I like to guide and inspire others.", nextOption: 338 },
                        { text: "Being a follower can be valuable too. I’m comfortable learning from those with more experience.", nextOption: 0 }
                    ]
                },
                { // 335
                    message: "Do you think it’s more important to dream big or to set achievable goals?",
                    options: [
                        { text: "Dreaming big is important. It helps me aim high and push my limits.", nextOption: 0 },
                        { text: "Setting achievable goals is better. They keep me grounded and focused on realistic progress.", nextOption: 339 }
                    ]
                },
                { // 336
                    message: "Would you rather have a life filled with passion or a life filled with comfort?",
                    options: [
                        { text: "Passion is essential. I want to live a life full of excitement and meaning.", nextOption: 340 },
                        { text: "Comfort is more important. I value security and peace of mind above all.", nextOption: 0 }
                    ]
                },
                { // 337
                    message: "Would you rather focus on personal growth or external success?",
                    options: [
                        { text: "Personal growth is my priority. It’s about becoming the best version of myself.", nextOption: 338 },
                        { text: "External success is key. I value achievements and recognition in the world.", nextOption: 0 }
                    ]
                },
                { // 338
                    message: "Is it better to seek truth or to seek happiness?",
                    options: [
                        { text: "Truth is more important. Understanding the world as it is brings clarity.", nextOption: 0 },
                        { text: "Happiness is the goal. I believe in finding joy in the journey, even if the truth is hard.", nextOption: 339 }
                    ]
                },
                { // 339
                    message: "Do you think it’s better to make decisions based on logic or intuition?",
                    options: [
                        { text: "Logic guides better decisions. It's clearer and more reliable for me.", nextOption: 340 },
                        { text: "Intuition is my guide. I trust my gut to lead me in the right direction.", nextOption: 0 }
                    ]
                },
                { // 340
                    message: "Would you prefer to have unlimited time or unlimited money?",
                    options: [
                        { text: "Unlimited time would be amazing. I could explore everything I want without pressure.", nextOption: 0 },
                        { text: "Unlimited money could bring opportunities and freedom to live life fully.", nextOption: 341 }
                    ]
                },
                { // 341
                    message: "Is it more important to be a good person or to be a successful person?",
                    options: [
                        { text: "Being a good person is my priority. Integrity and kindness matter more than success.", nextOption: 342 },
                        { text: "Success is important. It defines the impact I have in the world.", nextOption: 0 }
                    ]
                },
                { // 342
                    message: "Would you rather be in control of your destiny or let life surprise you?",
                    options: [
                        { text: "I’d prefer to control my destiny. Planning and effort guide me toward my goals.", nextOption: 343 },
                        { text: "Letting life surprise me sounds exciting. I want to embrace the unknown.", nextOption: 0 }
                    ]
                },
                { // 343
                    message: "Do you think happiness is a choice or a result of circumstances?",
                    options: [
                        { text: "Happiness is a choice. I believe we can choose to focus on the positive.", nextOption: 344 },
                        { text: "Happiness is a result of circumstances. External factors play a significant role.", nextOption: 0 }
                    ]
                },
                { // 344
                    message: "Would you prefer to live a life full of adventure or a life full of routine?",
                    options: [
                        { text: "Adventure excites me. I crave new experiences and challenges.", nextOption: 345 },
                        { text: "Routine provides comfort. I find peace in structure and predictability.", nextOption: 0 }
                    ]
                },
                { // 345
                    message: "Do you think it’s more important to focus on the present or plan for the future?",
                    options: [
                        { text: "The present matters most. Living fully in the moment brings true satisfaction.", nextOption: 0 },
                        { text: "Planning for the future is key. Preparing for what's to come leads to success.", nextOption: 346 }
                    ]
                },
                { // 346
                    message: "Would you rather have the ability to read minds or be invisible?",
                    options: [
                        { text: "Being invisible would be incredible. I could move freely without being noticed.", nextOption: 347 },
                        { text: "Reading minds would be fascinating. Understanding others' thoughts would bring new insights.", nextOption: 0 }
                    ]
                },
                { // 347
                    message: "Is it better to be remembered for your achievements or for your kindness?",
                    options: [
                        { text: "Kindness is more important. I want to leave a legacy of positive impact on others.", nextOption: 348 },
                        { text: "Achievements define me. I want to be remembered for my success and contributions.", nextOption: 0 }
                    ]
                },
                { // 348
                    message: "Would you prefer to have everything you want instantly or work hard to earn it?",
                    options: [
                        { text: "Earning things through hard work is more fulfilling. The journey is what makes it valuable.", nextOption: 349 },
                        { text: "Getting everything instantly sounds tempting. I’d love to avoid delays and obstacles.", nextOption: 0 }
                    ]
                },
                { // 349
                    message: "Is it more important to forgive others or to protect yourself from harm?",
                    options: [
                        { text: "Forgiving others is essential. It brings peace and closure, even if it’s hard.", nextOption: 350 },
                        { text: "Protecting myself comes first. I need to ensure my own well-being before considering others.", nextOption: 0 }
                    ]
                },
                { // 350
                    message: "Would you rather live with no regrets or have the chance to change your past?",
                    options: [
                        { text: "Living with no regrets is better. I’d rather embrace my choices and learn from them.", nextOption: 0 },
                        { text: "Changing my past could be tempting. There are moments I’d love to redo or improve.", nextOption: 351 }
                    ]
                },
                { // 351
                    message: "Would you rather have a perfect memory or be able to forget anything at will?",
                    options: [
                        { text: "A perfect memory would be incredible. I could recall every detail, every lesson learned.", nextOption: 352 },
                        { text: "Being able to forget things at will sounds liberating. I could leave behind painful memories.", nextOption: 353 }
                    ]
                },
                { // 352
                    message: "Is it more important to love yourself or to love others?",
                    options: [
                        { text: "Loving myself is crucial. Self-love is the foundation for all other relationships.", nextOption: 354 },
                        { text: "Loving others is what matters. I believe love is best when shared and given to those around me.", nextOption: 355 }
                    ]
                },
                { // 353
                    message: "Would you rather never age or never need sleep?",
                    options: [
                        { text: "Never aging sounds amazing. I’d love to stay at my best and enjoy life longer.", nextOption: 356 },
                        { text: "Never needing sleep would be fantastic. I could accomplish so much more without rest!", nextOption: 357 }
                    ]
                },
                { // 354
                    message: "Do you think success is more about effort or opportunity?",
                    options: [
                        { text: "Effort is key to success. Hard work and perseverance pay off in the long run.", nextOption: 358 },
                        { text: "Opportunity plays a big role. Being in the right place at the right time can make all the difference.", nextOption: 359 }
                    ]
                },
                { // 355
                    message: "Would you rather have the ability to heal others or to heal yourself instantly?",
                    options: [
                        { text: "Healing others would be incredible. I could help those in pain and make a difference.", nextOption: 360 },
                        { text: "Healing myself instantly would be a great power. I’d never have to suffer from illness or injury.", nextOption: 361 }
                    ]
                },
                { // 356
                    message: "Would you prefer to be an expert in one thing or knowledgeable in many things?",
                    options: [
                        { text: "Being an expert in one thing would be great. Mastery and deep understanding would be so rewarding.", nextOption: 362 },
                        { text: "Being knowledgeable in many things sounds exciting. I love the idea of having diverse skills and interests.", nextOption: 363 }
                    ]
                },
                { // 357
                    message: "Is it better to take risks or to play it safe?",
                    options: [
                        { text: "Taking risks can lead to growth and new experiences. I’m all for stepping out of my comfort zone.", nextOption: 364 },
                        { text: "Playing it safe ensures stability and security. I prefer to avoid unnecessary risks.", nextOption: 365 }
                    ]
                },
                { // 358
                    message: "Would you rather experience extreme highs or avoid extreme lows?",
                    options: [
                        { text: "Extreme highs would be thrilling. I’d love to experience the excitement and intensity of life.", nextOption: 366 },
                        { text: "Avoiding extreme lows is more important. Stability and emotional balance are my priorities.", nextOption: 367 }
                    ]
                },
                { // 359
                    message: "Would you prefer to work alone or in a team?",
                    options: [
                        { text: "Working alone suits me. I enjoy the focus and independence it brings.", nextOption: 368 },
                        { text: "Working in a team is great. Collaboration and sharing ideas make projects more enjoyable.", nextOption: 369 }
                    ]
                },
                { // 360
                    message: "Would you rather be famous for a short time or be well-known among a small group of people for a lifetime?",
                    options: [
                        { text: "Fame for a short time would be exciting. I’d love to experience it, even if it’s brief.", nextOption: 370 },
                        { text: "Being well-known among a small group sounds fulfilling. Long-lasting relationships matter more.", nextOption: 371 }
                    ]
                },
                { // 361
                    message: "Is it more important to be ambitious or content?",
                    options: [
                        { text: "Ambition drives me. I’m always striving for something more and pushing my limits.", nextOption: 372 },
                        { text: "Contentment is key. I want to be at peace with where I am in life, without needing more.", nextOption: 373 }
                    ]
                },
                { // 362
                    message: "Would you rather have the power of telekinesis or the ability to manipulate time?",
                    options: [
                        { text: "Telekinesis would be incredible. I could move things with my mind and have so much control.", nextOption: 374 },
                        { text: "Manipulating time sounds amazing. I could pause, rewind, or fast-forward time as needed.", nextOption: 375 }
                    ]
                },
                { // 363
                    message: "Would you rather have a job that you’re passionate about but pays little or a job you don’t like but pays well?",
                    options: [
                        { text: "Passion over pay. Doing something I love is worth more than a high salary.", nextOption: 376 },
                        { text: "A high-paying job is tempting. Financial stability is important for my future.", nextOption: 377 }
                    ]
                },
                { // 364
                    message: "Would you prefer to be surrounded by people who challenge you or people who support you?",
                    options: [
                        { text: "People who challenge me help me grow. I appreciate being pushed out of my comfort zone.", nextOption: 378 },
                        { text: "Supportive people are essential. I need encouragement to feel secure and confident.", nextOption: 379 }
                    ]
                },
                { // 365
                    message: "Would you rather have a few close friends or many acquaintances?",
                    options: [
                        { text: "A few close friends is more meaningful. I prefer deep, lasting connections.", nextOption: 380 },
                        { text: "Many acquaintances can be fun. I enjoy having a wide network of people to interact with.", nextOption: 381 }
                    ]
                },
                { // 366
                    message: "Would you rather live in a world where everyone is equal or in a world where there is a clear leader?",
                    options: [
                        { text: "Equality is key. I believe everyone should have the same opportunities and rights.", nextOption: 382 },
                        { text: "A clear leader can provide direction. It’s easier to have someone guiding the way.", nextOption: 383 }
                    ]
                },
                { // 367
                    message: "Would you rather be able to speak any language or understand any subject instantly?",
                    options: [
                        { text: "Speaking any language would be amazing. I could connect with people from all around the world.", nextOption: 384 },
                        { text: "Understanding any subject instantly would be powerful. I could master any topic at will.", nextOption: 385 }
                    ]
                },
                { // 368
                    message: "Would you rather live in the mountains or by the sea?",
                    options: [
                        { text: "The mountains appeal to me. The peace and beauty of nature would be so calming.", nextOption: 386 },
                        { text: "The sea is where I’d prefer to be. I love the sound of the waves and the expansive view.", nextOption: 387 }
                    ]
                },
                { // 369
                    message: "Would you rather have unlimited resources but no freedom or limited resources with total freedom?",
                    options: [
                        { text: "Unlimited resources with no freedom isn’t worth it. I value my freedom too much.", nextOption: 388 },
                        { text: "Limited resources with freedom sounds ideal. The ability to choose my path is priceless.", nextOption: 389 }
                    ]
                },
                { // 370
                    message: "Would you rather know the meaning of life or the secrets of the universe?",
                    options: [
                        { text: "Knowing the meaning of life would give me clarity and purpose.", nextOption: 390 },
                        { text: "The secrets of the universe would be fascinating. I’d love to understand the mysteries of existence.", nextOption: 391 }
                    ]
                },
                { // 371
                    message: "Would you rather create something new or improve something that already exists?",
                    options: [
                        { text: "Creating something new excites me. I’d love to bring fresh ideas into the world.", nextOption: 392 },
                        { text: "Improving something that already exists feels rewarding. It’s satisfying to make something better.", nextOption: 393 }
                    ]
                },
                { // 372
                    message: "Would you rather be an important leader or an influential advisor?",
                    options: [
                        { text: "Being an important leader is my goal. I’d like to make decisions and guide others.", nextOption: 394 },
                        { text: "Being an influential advisor seems rewarding. I’d enjoy providing guidance without the pressure of leadership.", nextOption: 395 }
                    ]
                },
                { // 373
                    message: "Would you rather have a perfect relationship or perfect health?",
                    options: [
                        { text: "A perfect relationship is my dream. Love and companionship are what matter most to me.", nextOption: 396 },
                        { text: "Perfect health would be incredible. I’d love to live a long, strong, and active life.", nextOption: 397 }
                    ]
                },
                { // 374
                    message: "Would you rather know the meaning of life or the secrets of the universe?",
                    options: [
                        { text: "Knowing the meaning of life would give me clarity and purpose.", nextOption: 398 },
                        { text: "The secrets of the universe would be fascinating. I’d love to understand the mysteries of existence.", nextOption: 399 }
                    ]
                },
                { // 375
                    message: "Would you rather change one thing about your past or get a glimpse of your future?",
                    options: [
                        { text: "Changing one thing about my past could change my present. It’s tempting to undo certain mistakes.", nextOption: 400 },
                        { text: "A glimpse of my future sounds intriguing. It could give me insight into where I’m headed.", nextOption: 401 }
                    ]
                },
                { // 376
                    message: "Would you rather have the ability to communicate with animals or speak every human language?",
                    options: [
                        { text: "Communicating with animals would be amazing. I could understand and bond with all creatures.", nextOption: 377 },
                        { text: "Speaking every human language is incredibly powerful. I could connect with anyone, anywhere.", nextOption: 378 }
                    ]
                },
                { // 377
                    message: "Would you prefer to be able to travel anywhere instantly or have unlimited resources to explore the world?",
                    options: [
                        { text: "Instant travel would be incredible. I could go anywhere, anytime, without restrictions.", nextOption: 379 },
                        { text: "Unlimited resources would make exploration so fulfilling. I could fully immerse myself in new experiences.", nextOption: 380 }
                    ]
                },
                { // 378
                    message: "Would you rather always be able to tell the truth or always be able to lie convincingly?",
                    options: [
                        { text: "Always telling the truth would be freeing. Honesty and transparency are key values for me.", nextOption: 381 },
                        { text: "Being able to lie convincingly sounds intriguing. It could be useful in certain situations.", nextOption: 382 }
                    ]
                },
                { // 379
                    message: "Would you prefer to be able to change your appearance at will or control your emotions at will?",
                    options: [
                        { text: "Changing my appearance sounds fun. I could look however I want and fit in anywhere.", nextOption: 383 },
                        { text: "Controlling my emotions at will is powerful. I’d love to stay calm and composed in any situation.", nextOption: 384 }
                    ]
                },
                { // 380
                    message: "Would you rather be able to read minds or influence people’s decisions?",
                    options: [
                        { text: "Reading minds would be fascinating. I could truly understand what people are thinking.", nextOption: 385 },
                        { text: "Influencing decisions sounds powerful. I could guide people’s choices in the direction I believe is best.", nextOption: 386 }
                    ]
                },
                { // 381
                    message: "Would you rather live in a world where everything is predictable or one filled with surprises?",
                    options: [
                        { text: "A predictable world would be comforting. I could plan everything out and feel in control.", nextOption: 387 },
                        { text: "A world full of surprises would be exciting. I love the unpredictability of life.", nextOption: 388 }
                    ]
                },
                { // 382
                    message: "Would you rather always have an answer to everything or never need answers?",
                    options: [
                        { text: "Always having answers would be amazing. It would give me confidence in any situation.", nextOption: 389 },
                        { text: "Never needing answers sounds freeing. I’d be able to trust my intuition and live in the moment.", nextOption: 390 }
                    ]
                },
                { // 383
                    message: "Would you prefer to have your dream job or live your dream life?",
                    options: [
                        { text: "My dream job would be perfect. I’d be so fulfilled and passionate every day.", nextOption: 391 },
                        { text: "Living my dream life sounds more important. The balance of happiness and freedom is priceless.", nextOption: 392 }
                    ]
                },
                { // 384
                    message: "Would you rather be able to see the future or change your past?",
                    options: [
                        { text: "Seeing the future would give me insight into what’s coming next. I could prepare for anything.", nextOption: 393 },
                        { text: "Changing my past would be tempting. I could fix mistakes and make better choices.", nextOption: 394 }
                    ]
                },
                { // 385
                    message: "Would you prefer to live in a big city or a small town?",
                    options: [
                        { text: "A big city has so much to offer. The hustle and bustle is energizing, and there’s always something new.", nextOption: 395 },
                        { text: "A small town sounds peaceful. I’d enjoy the close-knit community and slower pace of life.", nextOption: 396 }
                    ]
                },
                { // 386
                    message: "Would you rather find true love or be financially secure for life?",
                    options: [
                        { text: "True love would be priceless. I believe that love is the most important thing in life.", nextOption: 397 },
                        { text: "Financial security for life sounds amazing. I’d never have to worry about money again.", nextOption: 398 }
                    ]
                },
                { // 387
                    message: "Would you rather have unlimited creativity or unlimited focus?",
                    options: [
                        { text: "Unlimited creativity sounds incredible. I could come up with endless new ideas and inventions.", nextOption: 399 },
                        { text: "Unlimited focus would be powerful. I could achieve anything by staying laser-focused on my goals.", nextOption: 400 }
                    ]
                },
                { // 388
                    message: "Would you rather never face failure or never experience regret?",
                    options: [
                        { text: "Never facing failure would be incredible. I’d feel unstoppable and confident in everything I do.", nextOption: 401 },
                        { text: "Never experiencing regret sounds liberating. I’d be able to embrace my decisions without looking back.", nextOption: 402 }
                    ]
                },
                { // 389
                    message: "Would you rather be able to live forever or experience the best life possible in a short time?",
                    options: [
                        { text: "Living forever would be fascinating. I could witness history unfold and experience everything.", nextOption: 403 },
                        { text: "Experiencing the best life possible in a short time sounds more meaningful. Quality over quantity.", nextOption: 404 }
                    ]
                },
                { // 390
                    message: "Would you prefer to explore the deep ocean or outer space?",
                    options: [
                        { text: "Exploring the deep ocean is a dream. There’s so much mystery and undiscovered life down there.", nextOption: 405 },
                        { text: "Outer space would be amazing to explore. I’d love to see the stars and the vastness of the universe.", nextOption: 406 }
                    ]
                },
                { // 391
                    message: "Would you rather be able to control the weather or control gravity?",
                    options: [
                        { text: "Controlling the weather would be powerful. I could create ideal conditions wherever I go.", nextOption: 407 },
                        { text: "Controlling gravity sounds incredible. I could manipulate the environment and defy physics.", nextOption: 408 }
                    ]
                },
                { // 392
                    message: "Would you prefer to live in a world where everyone tells the truth or one where everyone is kind?",
                    options: [
                        { text: "Everyone telling the truth sounds ideal. It would create transparency and honesty in all relationships.", nextOption: 409 },
                        { text: "Everyone being kind would be amazing. The world would be so much better if people treated each other with compassion.", nextOption: 410 }
                    ]
                },
                { // 393
                    message: "Would you rather always feel like you’re on the right path or constantly question your decisions?",
                    options: [
                        { text: "Always feeling like I’m on the right path would give me peace of mind and confidence.", nextOption: 411 },
                        { text: "Constantly questioning my decisions would be tiring, but it could lead to growth and better choices.", nextOption: 412 }
                    ]
                },
                { // 394
                    message: "Would you prefer to be a master at one thing or moderately skilled at many things?",
                    options: [
                        { text: "Mastery of one thing sounds ideal. Being an expert would bring me pride and deep knowledge.", nextOption: 413 },
                        { text: "Being moderately skilled at many things would be fun. I’d love to have a variety of talents and experiences.", nextOption: 414 }
                    ]
                },
                { // 395
                    message: "Would you rather be able to live anywhere in the world or experience every culture in the world?",
                    options: [
                        { text: "Living anywhere in the world would be amazing. I could choose my ideal environment and lifestyle.", nextOption: 415 },
                        { text: "Experiencing every culture in the world sounds exciting. I’d love to immerse myself in different ways of life.", nextOption: 416 }
                    ]
                },
                { // 396
                    message: "Would you rather have the ability to create something new every day or improve something old every day?",
                    options: [
                        { text: "Creating something new every day sounds thrilling. I could continuously innovate and bring fresh ideas into the world.", nextOption: 417 },
                        { text: "Improving something old every day is rewarding. Making existing things better gives me a sense of progress.", nextOption: 418 }
                    ]
                },
                { // 397
                    message: "Would you rather have a never-ending supply of knowledge or a never-ending supply of resources?",
                    options: [
                        { text: "A never-ending supply of knowledge would be incredible. I could learn about anything and understand the world in depth.", nextOption: 419 },
                        { text: "A never-ending supply of resources would give me endless opportunities to create and build.", nextOption: 420 }
                    ]
                },
                { // 398
                    message: "Would you rather always be surrounded by people or always be alone?",
                    options: [
                        { text: "Being surrounded by people sounds great. I love the energy and companionship of a crowd.", nextOption: 421 },
                        { text: "Being alone can be peaceful. It’s nice to have time to reflect and focus on myself.", nextOption: 422 }
                    ]
                },
                { // 399
                    message: "Would you rather live with no regrets or never experience fear?",
                    options: [
                        { text: "Living with no regrets would be freeing. I’d embrace my decisions and experiences fully.", nextOption: 423 },
                        { text: "Never experiencing fear sounds empowering. I could approach every challenge with confidence.", nextOption: 424 }
                    ]
                },
                { // 400
                    message: "Would you prefer to live in the moment or plan for the future?",
                    options: [
                        { text: "Living in the moment is important. I’d want to embrace the present and make the most of today.", nextOption: 425 },
                        { text: "Planning for the future gives me direction. I prefer to know what’s coming next and prepare accordingly.", nextOption: 426 }
                    ]
                },
                // to be countinued.
        
        
        
        



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
