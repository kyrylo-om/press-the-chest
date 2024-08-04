chest1.style.marginBottom = "0px"
chest1.style.marginTop = "0px"
chest1.style.height = "300px"
chest2.style.marginBottom = "0px"
chest2.style.marginTop = "0px"
chest2.style.height = "300px"
chest3.style.marginBottom = "0px"
chest3.style.marginTop = "0px"
chest3.style.height = "300px"
item1.style.width = "140px"
item1.style.height = "140px"
item1.style.marginTop = "120px"
item1.style.marginLeft = "80px"
item2.style.width = "140px"
item2.style.height = "140px"
item2.style.marginTop = "120px"
item2.style.marginLeft = "80px"
item3.style.width = "140px"
item3.style.height = "140px"
item3.style.marginTop = "120px"
item3.style.marginLeft = "80px"
chest1.addEventListener('click', openChest1)
chest2.addEventListener('click', openChest2)
chest3.addEventListener('click', openChest3)
item1.addEventListener('mouseover', showInformation)
item2.addEventListener('mouseover', showInformation)
item3.addEventListener('mouseover', showInformation)
item1.addEventListener('mouseout', hideInformation)
item2.addEventListener('mouseout', hideInformation)
item3.addEventListener('mouseout', hideInformation)
slot1.addEventListener('click', showAdditional1)
slot2.addEventListener('click', showAdditional2)
slot3.addEventListener('click', showAdditional3)
slot4.addEventListener('click', showAdditional4)
slot5.addEventListener('click', showAdditional5)
slot6.addEventListener('click', showAdditional6)
slot7.addEventListener('click', showAdditional7)
slot8.addEventListener('click', showAdditional8)
slot9.addEventListener('click', showAdditional9)
crinvitem1.addEventListener('click', pick1)
crinvitem2.addEventListener('click', pick2)
crinvitem3.addEventListener('click', pick3)
crinvitem4.addEventListener('click', pick4)
crinvitem5.addEventListener('click', pick5)
crinvitem6.addEventListener('click', pick6)
crinvitem7.addEventListener('click', pick7)
crinvitem8.addEventListener('click', pick8)
shortcut1.addEventListener('click', openShop)
shortcut2.addEventListener('click', openCrtable)
button1.addEventListener('click', sell)
button2.addEventListener('click', to_inventory)
let healthscore = 3
let slot1_filled = false
let slot2_filled = false
let slot3_filled = false
let slot4_filled = false
let slot5_filled = false
let slot6_filled = false
let slot7_filled = false
let slot8_filled = false
let slot9_filled = false
let price1 = 100
let price2 = 90
let price3 = 80
let price4 = 70
let price5 = 70
let price6 = 40
let price7 = 10
chest1.style.transition = "all 0.3s ease-in-out"
chest2.style.transition = "all 0.3s ease-in-out"
chest3.style.transition = "all 0.3s ease-in-out"
let chest_1_active = false
let chest_2_active = false
let chest_3_active = false
let active_by_player = false
let chest_open_sound = new Audio('music/chestopen.mp3')
let level_up_sound = new Audio('music/levelup.mp3')
let orb_sound = new Audio('music/orb.mp3')
let wood_click_sound = new Audio('music/woodclick.mp3')
let hit_sound = new Audio('music/hit.mp3')
let fuse_sound = new Audio('music/fuse.mp3')
let explosion_sound = new Audio('music/explode.mp3')
let sell_sound = new Audio('music/sell.mp3')
let hurt_sound = new Audio('music/hurt.mp3')
let bruh_sound = new Audio('music/bruh.mp3')
let image_1 = "url(\"img/items/apple.png\")"
let image_2 = "url(\"img/items/emerald.png\")"
let image_3 = "url(\"img/items/diamond.png\")"
let image_4 = "url(\"img/items/flesh.png\")"
let image_5 = "url(\"img/items/gold.png\")"
let image_6 = "url(\"img/items/powder.png\")"
let image_7 = "url(\"img/items/iron.png\")"
let tnt_image = "url(\"img/items/tnt.png\")"
let i = 0
let speed = 0
let gold = 1000
let actionn = ""
let recipe = ""
let random1 = 0
let random2 = 0
let random3 = 0
let randomtnt = 0
let score = 0
let actual_score = 0
let sellprice = 0
let levelcount = 1
let is_game_over = false
let actual_slot = 0
let animation_interval
let movedown_interval
let movedown_items_interval
let item_disappear_interval
let explode_animation_interval
let explode_interval
let minus_opacity_interval
let plus_opacity_interval
function openChest1() {
    if(chest_1_active == false && chest_2_active == false && chest_3_active == false) {
        animation_interval = setInterval(animation, 34)
        chest_1_active = true
        chest_open_sound.play()
        active_by_player = true
        generate_random_item()
        if(randomtnt == 0) {
            setTimeout(claimItem, 800)
        }
        else {
            setTimeout(function() {
                showButtons()
                button1.style.visibility = "visible"
                button2.style.visibility = "visible"
            }, 800)
            if(random1 == 1) { 
                sellprice = 20
                score = 20
                recipe = "золотого яблока"
            }
            if(random1 == 2) { 
                sellprice = 80
                score = 50
                recipe = "глаза эндера, пузырька удачи и тотема бессмертия"
            }
            if(random1 == 3) { 
                sellprice = 60
                score = 50
                recipe = "звезды незера и пузырька удачи"
            }
            if(random1 == 4) { 
                sellprice = 10
                score = 10
                recipe = "мусор"
            }
            if(random1 == 5) { 
                sellprice = 60
                score = 40
                recipe = "золотого яблока, обезвреживающего устройства и тотема бессмертия"
            }
            if(random1 == 6) { 
                sellprice = 40
                score = 40
                recipe = "глаза эндера и звезды незера"
            }
            if(random1 == 0) { 
                sellprice = 50
                score = 30
                recipe = "нагрудника и обезвреживающего устройства"
            }
            actual_score = actual_score + score
            update_text()
        }
    }
}
function openChest2() {
    if(chest_1_active == false && chest_2_active == false && chest_3_active == false) {
        animation_interval = setInterval(animation, 34)
        chest_2_active = true
        chest_open_sound.play()
        active_by_player = true
        generate_random_item()
        if(randomtnt == 1) {
            setTimeout(claimItem, 800)
        }
        else {
            setTimeout(function() {
                showButtons()
                button1.style.visibility = "visible"
                button2.style.visibility = "visible"
            }, 800)
            if(random2 == 1) { 
                sellprice = 20
                score = 20
                recipe = "золотого яблока"
            }
            if(random2 == 2) { 
                sellprice = 80
                score = 50
                recipe = "глаза эндера, пузырька удачи и тотема бессмертия"
            }
            if(random2 == 3) { 
                sellprice = 60
                score = 50
                recipe = "звезды незера и пузырька удачи"
            }
            if(random2 == 4) { 
                sellprice = 10
                score = 10
                recipe = "мусор"
            }
            if(random2 == 5) { 
                sellprice = 60
                score = 40
                recipe = "золотого яблока, обезвреживающего устройства и тотема бессмертия"
            }
            if(random2 == 6) { 
                sellprice = 40
                score = 40
                recipe = "глаза эндера и звезды незера"
            }
            if(random2 == 0) { 
                sellprice = 50
                score = 30
                recipe = "нагрудника и обезвреживающего устройства"
            }
            actual_score = actual_score + score
            update_text()
        }
    }
}
function openChest3() {
    if(chest_1_active == false && chest_2_active == false && chest_3_active == false) {
        animation_interval = setInterval(animation, 34)
        chest_3_active = true
        chest_open_sound.play()
        active_by_player = true
        generate_random_item()
        if(randomtnt == 2) {
            setTimeout(claimItem, 800)
        }
        else {
            setTimeout(function() {
                showButtons()
                button1.style.visibility = "visible"
                button2.style.visibility = "visible"
            }, 800)
            if(random3 == 1) { 
                sellprice = 20
                score = 20
                recipe = "золотого яблока"
            }
            if(random3 == 2) { 
                sellprice = 80
                score = 50
                recipe = "глаза эндера, пузырька удачи и тотема бессмертия"
            }
            if(random3 == 3) { 
                sellprice = 60
                score = 50
                recipe = "звезды незера и пузырька удачи"
            }
            if(random3 == 4) { 
                sellprice = 10
                score = 10
                recipe = "мусор"
            }
            if(random3 == 5) { 
                sellprice = 60
                score = 40
                recipe = "золотого яблока, обезвреживающего устройства и тотема бессмертия"
            }
            if(random3 == 6) { 
                sellprice = 40
                score = 40
                recipe = "глаза эндера и звезды незера"
            }
            if(random3 == 0) { 
                sellprice = 50
                score = 30
                recipe = "нагрудника и обезвреживающего устройства"
            }
            actual_score = actual_score + score
            update_text()
        }
    }
}
function sell() 
{
    hideButtons()
    actionn = "sell"
    claimItem()
    orb_sound.play()
    if(chest_1_active == true) {
        if(random1 == 1) { sellprice = 20 }
        if(random1 == 2) { sellprice = 80 }
        if(random1 == 3) { sellprice = 60 }
        if(random1 == 4) { sellprice = 10 }
        if(random1 == 5) { sellprice = 60 }
        if(random1 == 6) { sellprice = 40 }
        if(random1 == 0) { sellprice = 50 }
        gold = gold + sellprice
        actual_score = actual_score + 20
        update_text()
    }
    if(chest_2_active == true) {
        if(random2 == 1) { sellprice = 20 }
        if(random2 == 2) { sellprice = 80 }
        if(random2 == 3) { sellprice = 60 }
        if(random2 == 4) { sellprice = 10 }
        if(random2 == 5) { sellprice = 60 }
        if(random2 == 6) { sellprice = 40 }
        if(random2 == 0) { sellprice = 50 }
        gold = gold + sellprice
        actual_score = actual_score + 20
        update_text()
    }
    if(chest_3_active == true) {
        if(random3 == 1) { sellprice = 20 }
        if(random3 == 2) { sellprice = 80 }
        if(random3 == 3) { sellprice = 60 }
        if(random3 == 4) { sellprice = 10 }
        if(random3 == 5) { sellprice = 60 }
        if(random3 == 6) { sellprice = 40 }
        if(random3 == 0) { sellprice = 50 }
        gold = gold + sellprice
        actual_score = actual_score + 20
        update_text()
    }
}
function to_inventory()
{
    actionn = "inv"
    claimItem()
    wood_click_sound.play()
    hideButtons()
}
function showInformation()
{
    if(active_by_player == true && (chest_1_active == true && randomtnt != 0 || chest_2_active == true && randomtnt != 1 || chest_3_active == true && randomtnt != 2)) {
        if(chest_1_active == true) {
            if(recipe == "мусор") {
                downtext1.innerHTML = recipe
            }
            else {
                downtext1.innerHTML = "используеться для крафта " + recipe
            }
            uptext1.innerHTML = "продать за " + sellprice + " монет"
        }
        if(chest_2_active == true) {
            if(recipe == "мусор") {
                downtext2.innerHTML = recipe
            }
            else {
                downtext2.innerHTML = "используеться для крафта " + recipe
            }
            uptext2.innerHTML = "продать за " + sellprice + " монет"
        }
        if(chest_3_active == true) {
            if(recipe == "мусор") {
                downtext3.innerHTML = recipe
            }
            else {
                downtext3.innerHTML = "используеться для крафта " + recipe
            }
            uptext3.innerHTML = "продать за " + sellprice + " монет"
        }
    }
}
function hideInformation()
{
    uptext1.innerHTML = ""
    downtext1.innerHTML = ""
    uptext2.innerHTML = ""
    downtext2.innerHTML = ""
    uptext3.innerHTML = ""
    downtext3.innerHTML = ""
}
function claimItem() 
{
    if(actionn == "inv") {
        fillSlot("game")
    }
    if(active_by_player == true) {
        if(chest_1_active == true) {
            if(randomtnt == 0) {
                tnt_explode()
                is_game_over = true
                fuse_sound.play()
                setTimeout(function() {
                    explosion_sound.play()
                    clearInterval(explode_interval)
                    i = 0
                    explode_animation_interval = setInterval(explode_animation, 40)
                    item1.style.width = "400px"
                    item1.style.height = "400px"
                    item1.style.marginLeft = "-50px"
                    item1.style.marginTop = "-120px"
                    healthscore --
                    update_health()
                }, 2000)
            }
        }
        if(chest_2_active == true) {
            if(randomtnt == 1) {
                tnt_explode()
                is_game_over = true
                fuse_sound.play()
                setTimeout(function() {
                    explosion_sound.play()
                    clearInterval(explode_interval)
                    i = 0
                    explode_animation_interval = setInterval(explode_animation, 40)
                    item2.style.width = "400px"
                    item2.style.height = "400px"
                    item2.style.marginLeft = "-50px"
                    item2.style.marginTop = "-120px"
                    healthscore --
                    update_health()
                }, 2000)
            }
        }
        if(chest_3_active == true) {
            if(randomtnt == 2) {
                tnt_explode()
                is_game_over = true
                fuse_sound.play()
                setTimeout(function() {
                    explosion_sound.play()
                    clearInterval(explode_interval)
                    i = 0
                    explode_animation_interval = setInterval(explode_animation, 40)
                    item3.style.width = "400px"
                    item3.style.height = "400px"
                    item3.style.marginLeft = "-50px"
                    item3.style.marginTop = "-120px"
                    healthscore --
                    update_health()
                }, 2000)
            }
        }
        if(is_game_over == false) {
            clearr()
            item_disappear_interval = setInterval(item_disappear, 1)
        }
    }
}
function openShop()
{
    if(crtableid.style.visibility == "visible") {
        crtableid.style.visibility = "hidden"
        crtableid.style.marginTop = "-850px"
    }
    if(shopid.style.visibility == "hidden") {
        shopid.style.visibility = "visible"
        shopid.style.marginTop = "-50px"
        orb_sound.play()
    }
    else if(shopid.style.visibility == "visible") {
        shopid.style.visibility = "hidden"
        shopid.style.marginTop = "-850px"
    }
}
function openCrtable()
{
    if(shopid.style.visibility == "visible") {
        shopid.style.visibility = "hidden"
        shopid.style.marginTop = "-850px"
    }
    if(crtableid.style.visibility == "hidden") {
        crtableid.style.visibility = "visible"
        crtableid.style.marginTop = "-50px"
        wood_click_sound.play()
    }
    else if(crtableid.style.visibility == "visible") {
        crtableid.style.visibility = "hidden"
        crtableid.style.marginTop = "-850px"
    }
}
function showButtons()
{
    let op = 0;
    setTimeout(function func() {
        if (op > 1) {
             return;
        }
        button1.style.opacity = op;
        button2.style.opacity = op;
        op += 0.1;
        setTimeout (func, 10);
     }, 20); 
}
function hideButtons()
{
    let op = 1;
    setTimeout(function func() {
        if (op < 0) {
            button1.style.visibility = "hidden"
            button2.style.visibility = "hidden"
            return;
        }
        button1.style.opacity = op;
        button2.style.opacity = op;
        op -= 0.1;
        setTimeout (func, 10);
     }, 20); 
}
function fillSlot(action)
{
    if(action == "game") {
        if(chest_1_active == true && randomtnt != 0) {
            if(slot1_filled == false) {
                slot1.style.backgroundImage = item1.style.backgroundImage
                slot1_filled = true
                return
            }
            else if(slot1_filled == true) {
                if(slot1.style.backgroundImage == item1.style.backgroundImage) {
                    if(count1.innerHTML == "") {count1.innerHTML = 2}
                    else {count1.innerHTML = parseInt(count1.innerHTML) + 1}
                    return
                }
            }
            if(slot2_filled == false) {
                slot2.style.backgroundImage = item1.style.backgroundImage
                slot2_filled = true
                return
            }
            else if(slot2_filled == true) {
                if(slot2.style.backgroundImage == item1.style.backgroundImage) {
                    if(count2.innerHTML == "") {count2.innerHTML = 2}
                    else {count2.innerHTML = parseInt(count2.innerHTML) + 1}
                    return
                }
            }
            if(slot3_filled == false) {
                slot3.style.backgroundImage = item1.style.backgroundImage
                slot3_filled = true
                return
            }
            else if(slot3_filled == true) {
                if(slot3.style.backgroundImage == item1.style.backgroundImage) {
                    if(count3.innerHTML == "") {count3.innerHTML = 2}
                    else {count3.innerHTML = parseInt(count3.innerHTML) + 1}
                    return
                }
            }
            if(slot4_filled == false) {
                slot4.style.backgroundImage = item1.style.backgroundImage
                slot4_filled = true
                return
            }
            else if(slot4_filled == true) {
                if(slot4.style.backgroundImage == item1.style.backgroundImage) {
                    if(count4.innerHTML == "") {count4.innerHTML = 2}
                    else {count4.innerHTML = parseInt(count4.innerHTML) + 1}
                    return
                }
            }
            if(slot5_filled == false) {
                slot5.style.backgroundImage = item1.style.backgroundImage
                slot5_filled = true
                return
            }
            else if(slot5_filled == true) {
                if(slot5.style.backgroundImage == item1.style.backgroundImage) {
                    if(count5.innerHTML == "") {count5.innerHTML = 2}
                    else {count5.innerHTML = parseInt(count5.innerHTML) + 1}
                    return
                }
            }
            if(slot6_filled == false) {
                slot6.style.backgroundImage = item1.style.backgroundImage
                slot6_filled = true
                return
            }
            else if(slot6_filled == true) {
                if(slot6.style.backgroundImage == item1.style.backgroundImage) {
                    if(count6.innerHTML == "") {count6.innerHTML = 2}
                    else {count6.innerHTML = parseInt(count6.innerHTML) + 1}
                    return
                }
            }
            if(slot7_filled == false) {
                slot7.style.backgroundImage = item1.style.backgroundImage
                slot7_filled = true
                return
            }
            else if(slot7_filled == true) {
                if(slot7.style.backgroundImage == item1.style.backgroundImage) {
                    if(count7.innerHTML == "") {count7.innerHTML = 2}
                    else {count7.innerHTML = parseInt(count7.innerHTML) + 1}
                    return
                }
            }
            if(slot8_filled == false) {
                slot8.style.backgroundImage = item1.style.backgroundImage
                slot8_filled = true
                return
            }
            else if(slot8_filled == true) {
                if(slot8.style.backgroundImage == item1.style.backgroundImage) {
                    if(count8.innerHTML == "") {count8.innerHTML = 2}
                    else {count8.innerHTML = parseInt(count8.innerHTML) + 1}
                    return
                }
            }
            if(slot9_filled == false) {
                slot9.style.backgroundImage = item1.style.backgroundImage
                slot9_filled = true
                return
            }
            else if(slot9_filled == true) {
                if(slot9.style.backgroundImage == item1.style.backgroundImage) {
                    if(count9.innerHTML == "") {count9.innerHTML = 2}
                    else {count9.innerHTML = parseInt(count9.innerHTML) + 1}
                    return
                }
            }
        }
        if(chest_2_active == true && randomtnt != 1) {
            if(slot1_filled == false) {
                slot1.style.backgroundImage = item2.style.backgroundImage
                slot1_filled = true
                return
            }
            else if(slot1_filled == true) {
                if(slot1.style.backgroundImage == item2.style.backgroundImage) {
                    if(count1.innerHTML == "") {count1.innerHTML = 2}
                    else {count1.innerHTML = parseInt(count1.innerHTML) + 1}
                    return
                }
            }
            if(slot2_filled == false) {
                slot2.style.backgroundImage = item2.style.backgroundImage
                slot2_filled = true
                return
            }
            else if(slot2_filled == true) {
                if(slot2.style.backgroundImage == item2.style.backgroundImage) {
                    if(count2.innerHTML == "") {count2.innerHTML = 2}
                    else {count2.innerHTML = parseInt(count2.innerHTML) + 1}
                    return
                }
            }
            if(slot3_filled == false) {
                slot3.style.backgroundImage = item2.style.backgroundImage
                slot3_filled = true
                return
            }
            else if(slot3_filled == true) {
                if(slot3.style.backgroundImage == item2.style.backgroundImage) {
                    if(count3.innerHTML == "") {count3.innerHTML = 2}
                    else {count3.innerHTML = parseInt(count3.innerHTML) + 1}
                    return
                }
            }
            if(slot4_filled == false) {
                slot4.style.backgroundImage = item2.style.backgroundImage
                slot4_filled = true
                return
            }
            else if(slot4_filled == true) {
                if(slot4.style.backgroundImage == item2.style.backgroundImage) {
                    if(count4.innerHTML == "") {count4.innerHTML = 2}
                    else {count4.innerHTML = parseInt(count4.innerHTML) + 1}
                    return
                }
            }
            if(slot5_filled == false) {
                slot5.style.backgroundImage = item2.style.backgroundImage
                slot5_filled = true
                return
            }
            else if(slot5_filled == true) {
                if(slot5.style.backgroundImage == item2.style.backgroundImage) {
                    if(count5.innerHTML == "") {count5.innerHTML = 2}
                    else {count5.innerHTML = parseInt(count5.innerHTML) + 1}
                    return
                }
            }
            if(slot6_filled == false) {
                slot6.style.backgroundImage = item2.style.backgroundImage
                slot6_filled = true
                return
            }
            else if(slot6_filled == true) {
                if(slot6.style.backgroundImage == item2.style.backgroundImage) {
                    if(count6.innerHTML == "") {count6.innerHTML = 2}
                    else {count6.innerHTML = parseInt(count6.innerHTML) + 1}
                    return
                }
            }
            if(slot7_filled == false) {
                slot7.style.backgroundImage = item2.style.backgroundImage
                slot7_filled = true
                return
            }
            else if(slot7_filled == true) {
                if(slot7.style.backgroundImage == item2.style.backgroundImage) {
                    if(count7.innerHTML == "") {count7.innerHTML = 2}
                    else {count7.innerHTML = parseInt(count7.innerHTML) + 1}
                    return
                }
            }
            if(slot8_filled == false) {
                slot8.style.backgroundImage = item2.style.backgroundImage
                slot8_filled = true
                return
            }
            else if(slot8_filled == true) {
                if(slot8.style.backgroundImage == item2.style.backgroundImage) {
                    if(count8.innerHTML == "") {count8.innerHTML = 2}
                    else {count8.innerHTML = parseInt(count8.innerHTML) + 1}
                    return
                }
            }
            if(slot9_filled == false) {
                slot9.style.backgroundImage = item2.style.backgroundImage
                slot9_filled = true
                return
            }
            else if(slot9_filled == true) {
                if(slot9.style.backgroundImage == item2.style.backgroundImage) {
                    if(count9.innerHTML == "") {count9.innerHTML = 2}
                    else {count9.innerHTML = parseInt(count9.innerHTML) + 1}
                    return
                }
            }
        }
        if(chest_3_active == true && randomtnt != 2) {
            if(slot1_filled == false) {
                slot1.style.backgroundImage = item3.style.backgroundImage
                slot1_filled = true
                return
            }
            else if(slot1_filled == true) {
                if(slot1.style.backgroundImage == item3.style.backgroundImage) {
                    if(count1.innerHTML == "") {count1.innerHTML = 2}
                    else {count1.innerHTML = parseInt(count1.innerHTML) + 1}
                    return
                }
            }
            if(slot2_filled == false) {
                slot2.style.backgroundImage = item3.style.backgroundImage
                slot2_filled = true
                return
            }
            else if(slot2_filled == true) {
                if(slot2.style.backgroundImage == item3.style.backgroundImage) {
                    if(count2.innerHTML == "") {count2.innerHTML = 2}
                    else {count2.innerHTML = parseInt(count2.innerHTML) + 1}
                    return
                }
            }
            if(slot3_filled == false) {
                slot3.style.backgroundImage = item3.style.backgroundImage
                slot3_filled = true
                return
            }
            else if(slot3_filled == true) {
                if(slot3.style.backgroundImage == item3.style.backgroundImage) {
                    if(count3.innerHTML == "") {count3.innerHTML = 2}
                    else {count3.innerHTML = parseInt(count3.innerHTML) + 1}
                    return
                }
            }
            if(slot4_filled == false) {
                slot4.style.backgroundImage = item3.style.backgroundImage
                slot4_filled = true
                return
            }
            else if(slot4_filled == true) {
                if(slot4.style.backgroundImage == item3.style.backgroundImage) {
                    if(count4.innerHTML == "") {count4.innerHTML = 2}
                    else {count4.innerHTML = parseInt(count4.innerHTML) + 1}
                    return
                }
            }
            if(slot5_filled == false) {
                slot5.style.backgroundImage = item3.style.backgroundImage
                slot5_filled = true
                return
            }
            else if(slot5_filled == true) {
                if(slot5.style.backgroundImage == item3.style.backgroundImage) {
                    if(count5.innerHTML == "") {count5.innerHTML = 2}
                    else {count5.innerHTML = parseInt(count5.innerHTML) + 1}
                    return
                }
            }
            if(slot6_filled == false) {
                slot6.style.backgroundImage = item3.style.backgroundImage
                slot6_filled = true
                return
            }
            else if(slot6_filled == true) {
                if(slot6.style.backgroundImage == item3.style.backgroundImage) {
                    if(count6.innerHTML == "") {count6.innerHTML = 2}
                    else {count6.innerHTML = parseInt(count6.innerHTML) + 1}
                    return
                }
            }
            if(slot7_filled == false) {
                slot7.style.backgroundImage = item3.style.backgroundImage
                slot7_filled = true
                return
            }
            else if(slot7_filled == true) {
                if(slot7.style.backgroundImage == item3.style.backgroundImage) {
                    if(count7.innerHTML == "") {count7.innerHTML = 2}
                    else {count7.innerHTML = parseInt(count7.innerHTML) + 1}
                    return
                }
            }
            if(slot8_filled == false) {
                slot8.style.backgroundImage = item3.style.backgroundImage
                slot8_filled = true
                return
            }
            else if(slot8_filled == true) {
                if(slot8.style.backgroundImage == item3.style.backgroundImage) {
                    if(count8.innerHTML == "") {count8.innerHTML = 2}
                    else {count8.innerHTML = parseInt(count8.innerHTML) + 1}
                    return
                }
            }
            if(slot9_filled == false) {
                slot9.style.backgroundImage = item3.style.backgroundImage
                slot9_filled = true
                return
            }
            else if(slot9_filled == true) {
                if(slot9.style.backgroundImage == item3.style.backgroundImage) {
                    if(count9.innerHTML == "") {count9.innerHTML = 2}
                    else {count9.innerHTML = parseInt(count9.innerHTML) + 1}
                    return
                }
            }
        }
    }
    if(action != "game") {
        if(slot1_filled == false) {
            if(eval("countshop" + action).innerHTML == "1") {
                slot1.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot1_filled = true
            }
            else if(eval("countshop" + action) != 1) {
                slot1.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot1_filled = true
                count1.innerHTML = eval("countshop" + action).innerHTML
            }
            return
        }
        else if(slot1_filled == true) {
            if(slot1.style.backgroundImage == eval("product" + action).style.backgroundImage) {
                if(count1.innerHTML == "") {count1.innerHTML = 1 + parseInt(eval("countshop" + action).innerHTML)}
                else {count1.innerHTML = parseInt(count1.innerHTML) + parseInt(eval("countshop" + action).innerHTML)}
                return
            }
        }
        if(slot2_filled == false) {
            if(eval("countshop" + action).innerHTML == "1") {
                slot2.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot2_filled = true
            }
            else if(eval("countshop" + action) != 1) {
                slot2.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot2_filled = true
                count2.innerHTML = eval("countshop" + action).innerHTML
            }
            return
        }
        else if(slot2_filled == true) {
            if(slot2.style.backgroundImage == eval("product" + action).style.backgroundImage) {
                if(count2.innerHTML == "") {count2.innerHTML = 1 + parseInt(eval("countshop" + action).innerHTML)}
                else {count2.innerHTML = parseInt(count2.innerHTML) + parseInt(eval("countshop" + action).innerHTML)}
                return
            }
        }
        if(slot3_filled == false) {
            if(eval("countshop" + action).innerHTML == "1") {
                slot3.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot3_filled = true
            }
            else if(eval("countshop" + action) != 1) {
                slot3.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot3_filled = true
                count3.innerHTML = eval("countshop" + action).innerHTML
            }
            return
        }
        else if(slot3_filled == true) {
            if(slot3.style.backgroundImage == eval("product" + action).style.backgroundImage) {
                if(count3.innerHTML == "") {count3.innerHTML = 1 + parseInt(eval("countshop" + action).innerHTML)}
                else {count3.innerHTML = parseInt(count3.innerHTML) + parseInt(eval("countshop" + action).innerHTML)}
                return
            }
        }
        if(slot4_filled == false) {
            if(eval("countshop" + action).innerHTML == "1") {
                slot4.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot4_filled = true
            }
            else if(eval("countshop" + action) != 1) {
                slot4.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot4_filled = true
                count4.innerHTML = eval("countshop" + action).innerHTML
            }
            return
        }
        else if(slot4_filled == true) {
            if(slot4.style.backgroundImage == eval("product" + action).style.backgroundImage) {
                if(count4.innerHTML == "") {count4.innerHTML = 1 + parseInt(eval("countshop" + action).innerHTML)}
                else {count4.innerHTML = parseInt(count4.innerHTML) + parseInt(eval("countshop" + action).innerHTML)}
                return
            }
        }
        if(slot5_filled == false) {
            if(eval("countshop" + action).innerHTML == "1") {
                slot5.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot5_filled = true
            }
            else if(eval("countshop" + action) != 1) {
                slot5.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot5_filled = true
                count5.innerHTML = eval("countshop" + action).innerHTML
            }
            return
        }
        else if(slot5_filled == true) {
            if(slot5.style.backgroundImage == eval("product" + action).style.backgroundImage) {
                if(count5.innerHTML == "") {count5.innerHTML = 1 + parseInt(eval("countshop" + action).innerHTML)}
                else {count5.innerHTML = parseInt(count5.innerHTML) + parseInt(eval("countshop" + action).innerHTML)}
                return
            }
        }
        if(slot6_filled == false) {
            if(eval("countshop" + action).innerHTML == "1") {
                slot6.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot6_filled = true
            }
            else if(eval("countshop" + action) != 1) {
                slot6.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot6_filled = true
                count6.innerHTML = eval("countshop" + action).innerHTML
            }
            return
        }
        else if(slot6_filled == true) {
            if(slot6.style.backgroundImage == eval("product" + action).style.backgroundImage) {
                if(count6.innerHTML == "") {count6.innerHTML = 1 + parseInt(eval("countshop" + action).innerHTML)}
                else {count6.innerHTML = parseInt(count6.innerHTML) + parseInt(eval("countshop" + action).innerHTML)}
                return
            }
        }
        if(slot7_filled == false) {
            if(eval("countshop" + action).innerHTML == "1") {
                slot7.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot7_filled = true
            }
            else if(eval("countshop" + action) != 1) {
                slot7.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot7_filled = true
                count7.innerHTML = eval("countshop" + action).innerHTML
            }
            return
        }
        else if(slot7_filled == true) {
            if(slot7.style.backgroundImage == eval("product" + action).style.backgroundImage) {
                if(count7.innerHTML == "") {count7.innerHTML = 1 + parseInt(eval("countshop" + action).innerHTML)}
                else {count7.innerHTML = parseInt(count7.innerHTML) + parseInt(eval("countshop" + action).innerHTML)}
                return
            }
        }
        if(slot8_filled == false) {
            if(eval("countshop" + action).innerHTML == "1") {
                slot8.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot8_filled = true
            }
            else if(eval("countshop" + action) != 1) {
                slot8.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot8_filled = true
                count8.innerHTML = eval("countshop" + action).innerHTML
            }
            return
        }
        else if(slot8_filled == true) {
            if(slot8.style.backgroundImage == eval("product" + action).style.backgroundImage) {
                if(count8.innerHTML == "") {count8.innerHTML = 1 + parseInt(eval("countshop" + action).innerHTML)}
                else {count8.innerHTML = parseInt(count8.innerHTML) + parseInt(eval("countshop" + action).innerHTML)}
                return
            }
        }
        if(slot9_filled == false) {
            if(eval("countshop" + action).innerHTML == "1") {
                slot9.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot9_filled = true
            }
            else if(eval("countshop" + action) != 1) {
                slot9.style.backgroundImage = eval("product" + action).style.backgroundImage
                slot9_filled = true
                count9.innerHTML = eval("countshop" + action).innerHTML
            }
            return
        }
        else if(slot9_filled == true) {
            if(slot9.style.backgroundImage == eval("product" + action).style.backgroundImage) {
                if(count9.innerHTML == "") {count9.innerHTML = 1 + parseInt(eval("countshop" + action).innerHTML)}
                else {count9.innerHTML = parseInt(count9.innerHTML) + parseInt(eval("countshop" + action).innerHTML)}
                return
            }
        }
    }
}
function animation() 
{
    if(i == 6) {
        disappear()
    }
    i++
    if(chest_1_active == true) {
        chest1.style.backgroundImage = "url(img/chest_animation/chest_frame" + i + ".png)"
    }
    if(chest_2_active == true) {
        chest2.style.backgroundImage = "url(img/chest_animation/chest_frame" + i + ".png)"
    }
    if(chest_3_active == true) {
        chest3.style.backgroundImage = "url(img/chest_animation/chest_frame" + i + ".png)"
    }
    if(i > 14) {
        clearInterval(animation_interval)
        i = 0
    }
}
function update_health()
{
    if(healthscore == 2) {
        heart3.style.backgroundImage = "url()"
    }
    if(healthscore == 1) {
        heart2.style.backgroundImage = "url()"
    }
    if(healthscore == 0) {
        heart1.style.backgroundImage = "url()"
        hurt_sound.play()
    }
}
function disappear() 
{
    if(chest_1_active == true) {
        chest1.style.transition = "none"
    }
    if(chest_2_active == true) {
        chest2.style.transition = "none"
    }
    if(chest_3_active == true) {
        chest3.style.transition = "none"
    }
    movedown_interval = setInterval(movedown, 10)
}
function appear()
{
    chest1.style.backgroundImage = "url('img/chest_animation/chest_frame1.png')"
    chest2.style.backgroundImage = "url('img/chest_animation/chest_frame1.png')"
    chest3.style.backgroundImage = "url('img/chest_animation/chest_frame1.png')"
    chest1.style.transition = "none"
    chest2.style.transition = "none"
    chest3.style.transition = "none"
    appear_movedown_interval = setInterval(appear_movedown, 10)
}
function movedown() 
{
    speed = speed + 0.3
    if(parseInt(chest1.style.marginTop) <= 130) {
        if(chest_1_active == true) {
            chest1.style.marginTop = parseInt(chest1.style.marginTop) + speed + "px"
        }
    }
    if(parseInt(chest1.style.marginTop) >= 130) {
        if(chest_1_active == true) {
            chest1.style.height = parseInt(chest1.style.height) - speed + "px"
            chest1.style.marginTop = parseInt(chest1.style.marginTop) + speed + "px"
        }
    }
    if(parseInt(chest2.style.marginTop) <= 130) {
        if(chest_2_active == true) {
            chest2.style.marginTop = parseInt(chest2.style.marginTop) + speed + "px"
        }
    }
    if(parseInt(chest2.style.marginTop) >= 130) {
        if(chest_2_active == true) {
            chest2.style.height = parseInt(chest2.style.height) - speed + "px"
            chest2.style.marginTop = parseInt(chest2.style.marginTop) + speed + "px"
        }
    }
    if(parseInt(chest3.style.marginTop) <= 130) {
        if(chest_3_active == true) {
            chest3.style.marginTop = parseInt(chest3.style.marginTop) + speed + "px"
        }
    }
    if(parseInt(chest3.style.marginTop) >= 130) {
        if(chest_3_active == true) {
            chest3.style.height = parseInt(chest3.style.height) - speed + "px"
            chest3.style.marginTop = parseInt(chest3.style.marginTop) + speed + "px"
        }
    }
    if(chest_1_active == true) {
        if(active_by_player == true) {
            if(parseInt(chest1.style.height) <= 3) {
                clearInterval(movedown_interval)
                speed = 0
            }
        }
        if(active_by_player == false) {
            if(parseInt(chest1.style.height) <= 3) {
                clearInterval(movedown_interval)
                speed = 0
                clearInterval(movedown_items_interval)
                movedown_items_interval = setInterval(movedown_items, 10)
            }
        }
    }
    if(chest_2_active == true) {
        if(active_by_player == true) {
            if(parseInt(chest2.style.height) <= 3) {
                clearInterval(movedown_interval)
                speed = 0
            }
        }
        if(active_by_player == false) {
            if(parseInt(chest2.style.height) <= 3) {
                clearInterval(movedown_interval)
                speed = 0
                clearInterval(movedown_items_interval)
                movedown_items_interval = setInterval(movedown_items, 10)
            }
        }
    }
    if(chest_3_active == true) {
        if(active_by_player == true) {
            if(parseInt(chest3.style.height) <= 3) {
                clearInterval(movedown_interval)
                speed = 0
            }
        }
        if(active_by_player == false) {
            if(parseInt(chest3.style.height) <= 3) {
                clearInterval(movedown_interval)
                speed = 0
                clearInterval(movedown_items_interval)
                movedown_items_interval = setInterval(movedown_items, 10)
            }
        }
    }
}
function appear_movedown()
{
    speed = speed + 0.3
    if(parseInt(chest1.style.marginTop) <= 0) {
        chest1.style.marginTop = parseInt(chest1.style.marginTop) + speed + "px"
        chest2.style.marginTop = parseInt(chest2.style.marginTop) + speed + "px"
        chest3.style.marginTop = parseInt(chest3.style.marginTop) + speed + "px"
    }
    if(parseInt(chest1.style.marginTop) >= -1) {
        chest1.style.transition = "all 0.3s ease-in-out"
        chest2.style.transition = "all 0.3s ease-in-out"
        chest3.style.transition = "all 0.3s ease-in-out"
    }
    if(parseInt(chest1.style.marginTop) >= 0) {
        clearInterval(appear_movedown_interval)
        reset()
    }
}
function movedown_items()
{
    speed = speed + 0.3
    if(parseInt(item1.style.marginTop) <= 290 && randomtnt != 0) {
        item1.style.marginTop = parseInt(item1.style.marginTop) + speed + "px"
    }
    if(parseInt(item1.style.marginTop) >= 290 && randomtnt != 0) {
        item1.style.height = parseInt(item1.style.height) - speed + "px"
        item1.style.marginTop = parseInt(item1.style.marginTop) + speed + "px"
    }
    if(parseInt(item1.style.marginTop) <= 255 && randomtnt == 0) {
        item1.style.marginTop = parseInt(item1.style.marginTop) + speed + "px"
    }
    if(parseInt(item1.style.marginTop) >= 255 && randomtnt == 0) {
        item1.style.height = parseInt(item1.style.height) - speed + "px"
        item1.style.marginTop = parseInt(item1.style.marginTop) + speed + "px"
    }
    if(parseInt(item2.style.marginTop) <= 290 && randomtnt != 1) {
        item2.style.marginTop = parseInt(item2.style.marginTop) + speed + "px"
    }
    if(parseInt(item2.style.marginTop) >= 290 && randomtnt != 1) {
        item2.style.height = parseInt(item2.style.height) - speed + "px"
        item2.style.marginTop = parseInt(item2.style.marginTop) + speed + "px"
    }
    if(parseInt(item2.style.marginTop) <= 255 && randomtnt == 1) {
        item2.style.marginTop = parseInt(item2.style.marginTop) + speed + "px"
    }
    if(parseInt(item2.style.marginTop) >= 255 && randomtnt == 1) {
        item2.style.height = parseInt(item2.style.height) - speed + "px"
        item2.style.marginTop = parseInt(item2.style.marginTop) + speed + "px"
    }
    if(parseInt(item3.style.marginTop) <= 290 && randomtnt != 2) {
        item3.style.marginTop = parseInt(item3.style.marginTop) + speed + "px"
    }
    if(parseInt(item3.style.marginTop) >= 290 && randomtnt != 2) {
        item3.style.height = parseInt(item3.style.height) - speed + "px"
        item3.style.marginTop = parseInt(item3.style.marginTop) + speed + "px"
    }
    if(parseInt(item3.style.marginTop) <= 255 && randomtnt == 2) {
        item3.style.marginTop = parseInt(item3.style.marginTop) + speed + "px"
    }
    if(parseInt(item3.style.marginTop) >= 255 && randomtnt == 2) {
        item3.style.height = parseInt(item3.style.height) - speed + "px"
        item3.style.marginTop = parseInt(item3.style.marginTop) + speed + "px"
    }
    if(chest_1_active == false) {
        if(parseInt(item2.style.height) <= 15) {
            clearInterval(movedown_items_interval)
            speed = 0
            new_level()
        }
    }
    if(chest_2_active == false) {
        if(parseInt(item1.style.height) <= 15) {
            clearInterval(movedown_items_interval)
            speed = 0
            new_level()
        }
    }
    if(chest_3_active == false) {
        if(parseInt(item2.style.height) <= 15) {
            clearInterval(movedown_items_interval)
            speed = 0
            new_level()
        }
    }
}
function item_disappear()
{
    if(chest_1_active == true && active_by_player == true) {
        item1.style.width = parseInt(item1.style.width) - 10 + "px"
        item1.style.height = parseInt(item1.style.height) - 10 + "px"
        item1.style.marginTop = parseInt(item1.style.marginTop) + 5 + "px"
        item1.style.marginLeft = parseInt(item1.style.marginLeft) + 5 + "px"
    }
    if(chest_2_active == true && active_by_player == true) {
        item2.style.width = parseInt(item2.style.width) - 10 + "px"
        item2.style.height = parseInt(item2.style.height) - 10 + "px"
        item2.style.marginTop = parseInt(item2.style.marginTop) + 5 + "px"
        item2.style.marginLeft = parseInt(item2.style.marginLeft) + 5 + "px"
    }
    if(chest_3_active == true && active_by_player == true) {
        item3.style.width = parseInt(item3.style.width) - 10 + "px"
        item3.style.height = parseInt(item3.style.height) - 10 + "px"
        item3.style.marginTop = parseInt(item3.style.marginTop) + 5 + "px"
        item3.style.marginLeft = parseInt(item3.style.marginLeft) + 5 + "px"
    }
    if(parseInt(item1.style.width) <= 0 || parseInt(item2.style.width) <= 0 || parseInt(item3.style.width) <= 0) {
        clearInterval(item_disappear_interval)
    }
}
function clearr() 
{
    setTimeout(function() {
        active_by_player = false
        chest_open_sound.play()
        if(chest_1_active == true) {
            chest_1_active = false
            chest_2_active = true
            chest_3_active = true
        }
        else if(chest_2_active == true) {
            chest_1_active = true
            chest_2_active = false
            chest_3_active = true
        }
        else if(chest_3_active == true) {
            chest_1_active = true
            chest_2_active = true
            chest_3_active = false
        }
        animation_interval = setInterval(animation, 34)
    }, 200)
}
function new_level() 
{
    chest1.style.backgroundImage = "url('')"
    chest2.style.backgroundImage = "url('')"
    chest3.style.backgroundImage = "url('')"
    chest1.style.marginBottom = "0px"
    chest1.style.marginTop = "-360px"
    chest1.style.height = "300px"
    chest2.style.marginBottom = "0px"
    chest2.style.marginTop = "-360px"
    chest2.style.height = "300px"
    chest3.style.marginBottom = "0px"
    chest3.style.marginTop = "-360px"
    chest3.style.height = "300px"
    item1.style.backgroundImage = "url('')"
    item2.style.backgroundImage = "url('')"
    item3.style.backgroundImage = "url('')"
    item1.style.width = "140px"
    item1.style.height = "140px"
    item1.style.marginTop = "120px"
    item1.style.marginLeft = "80px"
    item2.style.width = "140px"
    item2.style.height = "140px"
    item2.style.marginTop = "120px"
    item2.style.marginLeft = "80px"
    item3.style.width = "140px"
    item3.style.height = "140px"
    item3.style.marginTop = "120px"
    item3.style.marginLeft = "80px"
    appear()
}
function reset()
{
    chest_1_active = false
    chest_2_active = false
    chest_3_active = false
    active_by_player = false
    speed = 0
    clearInterval(movedown_items_interval)
    chest1.style.marginBottom = "0px"
    levelcount ++
    update_text()
}
function update_text() 
{
    goldtext.innerHTML = gold + "<img src='img/coin.png' style='width: 45px; position: absolute; margin-top: -16px; margin-left: -10px'>"
    shopgoldtext.innerHTML = "ЗОЛОТО: " + gold + "<img src='img/coin.png' style='width: 100px; position: absolute; margin-top: -35px; margin-left: -10px'>"
    scoretext.innerHTML = "УРОВЕНЬ " + levelcount + " | ОЧКИ: " + actual_score
    score = 0
}
function generate_random_item() 
{
    item1.style.width = "140px"
    item1.style.height = "140px"
    item1.style.marginTop = "120px"
    item1.style.marginLeft = "80px"
    item2.style.width = "140px"
    item2.style.height = "140px"
    item2.style.marginTop = "120px"
    item2.style.marginLeft = "80px"
    item3.style.width = "140px"
    item3.style.height = "140px"
    item3.style.marginTop = "120px"
    item3.style.marginLeft = "80px"
    random1 = Math.floor(1 - 0.5 + Math.random() * (6 - 1 + 1));
    if(random1 == 1) { item1.style.backgroundImage = image_1 }
    if(random1 == 2) { item1.style.backgroundImage = image_2 }
    if(random1 == 3) { item1.style.backgroundImage = image_3 }
    if(random1 == 4) { item1.style.backgroundImage = image_4 }
    if(random1 == 5) { item1.style.backgroundImage = image_5 }
    if(random1 == 6) { item1.style.backgroundImage = image_6 }
    if(random1 == 0) { item1.style.backgroundImage = image_7 }
    random2 = Math.floor(1 - 0.5 + Math.random() * (6 - 1 + 1));
    if(random2 == 1) { item2.style.backgroundImage = image_1 }
    if(random2 == 2) { item2.style.backgroundImage = image_2 }
    if(random2 == 3) { item2.style.backgroundImage = image_3 }
    if(random2 == 4) { item2.style.backgroundImage = image_4 }
    if(random2 == 5) { item2.style.backgroundImage = image_5 }
    if(random2 == 6) { item2.style.backgroundImage = image_6 }
    if(random2 == 0) { item2.style.backgroundImage = image_7 }
    random3 = Math.floor(1 - 0.5 + Math.random() * (6 - 1 + 1));
    if(random3 == 1) { item3.style.backgroundImage = image_1 }
    if(random3 == 2) { item3.style.backgroundImage = image_2 }
    if(random3 == 3) { item3.style.backgroundImage = image_3 }
    if(random3 == 4) { item3.style.backgroundImage = image_4 }
    if(random3 == 5) { item3.style.backgroundImage = image_5 }
    if(random3 == 6) { item3.style.backgroundImage = image_6 }
    if(random3 == 0) { item3.style.backgroundImage = image_7 }
    randomtnt = Math.floor(1 - 0.5 + Math.random() * (2 - 1 + 1));
    if(randomtnt == 0) {
        item1.style.backgroundImage = tnt_image
        random1 = -2
        item1.style.width = "170px"
        item1.style.height = "170px"
        item1.style.marginTop = "110px"
        item1.style.marginLeft = "70px"
    }
    if(randomtnt == 1) {
        item2.style.backgroundImage = tnt_image
        random2 = -2
        item2.style.width = "170px"
        item2.style.height = "170px"
        item2.style.marginTop = "110px"
        item2.style.marginLeft = "70px"
    }
    if(randomtnt == 2) {
        item3.style.backgroundImage = tnt_image
        random3 = -2
        item3.style.width = "170px"
        item3.style.height = "170px"
        item3.style.marginTop = "110px"
        item3.style.marginLeft = "70px"
    }
}
function tnt_explode()
{
    explode_interval = setInterval(function() {
        if(chest_1_active == true) {
            if(item1.style.backgroundImage == "url(\"img/items/tnt.png\")") {
                item1.style.backgroundImage = "url('img/items/exploding_tnt.png')"
            }
            else if(item1.style.backgroundImage == "url(\"img/items/exploding_tnt.png\")") {
                item1.style.backgroundImage = "url('img/items/tnt.png')"
            }
        }
        if(chest_2_active == true) {
            if(item2.style.backgroundImage == "url(\"img/items/tnt.png\")") {
                item2.style.backgroundImage = "url('img/items/exploding_tnt.png')"
            }
            else if(item2.style.backgroundImage == "url(\"img/items/exploding_tnt.png\")") {
                item2.style.backgroundImage = "url('img/items/tnt.png')"
            }
        }
        if(chest_3_active == true) {
            if(item3.style.backgroundImage == "url(\"img/items/tnt.png\")") {
                item3.style.backgroundImage = "url('img/items/exploding_tnt.png')"
            }
            else if(item3.style.backgroundImage == "url(\"img/items/exploding_tnt.png\")") {
                item3.style.backgroundImage = "url('img/items/tnt.png')"
            }
        }
    }, 280)
    speed = -4
    activate_tnt_interval = setInterval(function() {
        speed = speed + 0.3
        if(chest_1_active == true) {
            if(parseInt(item1.style.marginTop) <= 110) {
                item1.style.marginTop = parseInt(item1.style.marginTop) + speed + "px"
            }
        }
        if(chest_2_active == true) {
            if(parseInt(item2.style.marginTop) <= 110) {
                item2.style.marginTop = parseInt(item2.style.marginTop) + speed + "px"
            }
        }
        if(chest_3_active == true) {
            if(parseInt(item3.style.marginTop) <= 110) {
                item3.style.marginTop = parseInt(item3.style.marginTop) + speed + "px"
            }
        }
        if(parseInt(item1.style.marginTop) >= 110 && chest_1_active == true || parseInt(item2.style.marginTop) >= 110 && chest_2_active == true || parseInt(item3.style.marginTop) >= 110 && chest_3_active == true) {
            clearInterval(activate_tnt_interval)
            speed = 0
        }
    }, 20)
}
function explode_animation() 
{
    i++
    if(chest_1_active == true) {
        item1.style.backgroundImage = "url(img/explode_animation/explode_frame" + i + ".png)"
    }
    if(chest_2_active == true) {
        item2.style.backgroundImage = "url(img/explode_animation/explode_frame" + i + ".png)"
    }
    if(chest_3_active == true) {
        item3.style.backgroundImage = "url(img/explode_animation/explode_frame" + i + ".png)"
    }
    if(i > 17) {
        clearInterval(explode_animation_interval)
        i = 0
        is_game_over = false
        clearr()
        item_disappear_interval = setInterval(item_disappear, 1)
    }
}
function shopchangecountm(number)
{
    if(parseInt(eval("countshop" + number).innerHTML) > 1) {
        eval("countshop" + number).innerHTML = parseInt(eval("countshop" + number).innerHTML) - 1
        eval("shopprice" + number).innerHTML = parseInt(eval("shopprice" + number).innerHTML) - parseInt(eval("price" + number))
    }
}
function shopchangecountp(number)
{
    if(parseInt(eval("countshop" + number).innerHTML) <= 8) {
        eval("countshop" + number).innerHTML = parseInt(eval("countshop" + number).innerHTML) + 1
        eval("shopprice" + number).innerHTML = parseInt(eval("shopprice" + number).innerHTML) + eval("price" + number)
    }
}
function buyitem(number) 
{
    if(parseInt(eval("shopprice" + number).innerHTML) <= gold) {
        actual_score = actual_score + 10 * eval("countshop" + number).innerHTML
        update_text()
        shophelptext.innerHTML = ""
        gold = gold - parseInt(eval("shopprice" + number).innerHTML)
        update_text()
        if(number == 7) {
            bruh_sound.play()
        }
        else {
            level_up_sound.play()
        }
        fillSlot(number)
    }
    else {
        shophelptext.innerHTML = "у тебя недостаточно монет"
    }
}
function showAdditional1()
{
    if(slot1_filled == true) {
        if(invbutton1.style.visibility == "hidden") {
            clear_inv_buttons()
            invbutton1.style.visibility = "visible"
        }
        else if(invbutton1.style.visibility == "visible") {
            invbutton1.style.visibility = "hidden"
        }
    }
}
function showAdditional2()
{
    if(slot2_filled == true) {
        if(invbutton2.style.visibility == "hidden") {
            clear_inv_buttons()
            invbutton2.style.visibility = "visible"
        }
        else if(invbutton2.style.visibility == "visible") {
            invbutton2.style.visibility = "hidden"
        }
    }
}
function showAdditional3()
{
    if(slot3_filled == true) {
        if(invbutton3.style.visibility == "hidden") {
            clear_inv_buttons()
            invbutton3.style.visibility = "visible"
        }
        else if(invbutton3.style.visibility == "visible") {
            invbutton3.style.visibility = "hidden"
        }
    }
}
function showAdditional4()
{
    if(slot4_filled == true) {
        if(invbutton4.style.visibility == "hidden") {
            clear_inv_buttons()
            invbutton4.style.visibility = "visible"
        }
        else if(invbutton4.style.visibility == "visible") {
            invbutton4.style.visibility = "hidden"
        }
    }
}
function showAdditional5()
{
    if(slot5_filled == true) {
        if(invbutton5.style.visibility == "hidden") {
            clear_inv_buttons()
            invbutton5.style.visibility = "visible"
        }
        else if(invbutton5.style.visibility == "visible") {
            invbutton5.style.visibility = "hidden"
        }
    }
}
function showAdditional6()
{
    if(slot6_filled == true) {
        if(invbutton6.style.visibility == "hidden") {
            clear_inv_buttons()
            invbutton6.style.visibility = "visible"
        }
        else if(invbutton6.style.visibility == "visible") {
            invbutton6.style.visibility = "hidden"
        }
    }
}
function showAdditional7()
{
    if(slot7_filled == true) {
        if(invbutton7.style.visibility == "hidden") {
            clear_inv_buttons()
            invbutton7.style.visibility = "visible"
        }
        else if(invbutton7.style.visibility == "visible") {
            invbutton7.style.visibility = "hidden"
        }
    }
}
function showAdditional8()
{
    if(slot8_filled == true) {
        if(invbutton8.style.visibility == "hidden") {
            clear_inv_buttons()
            invbutton8.style.visibility = "visible"
        }
        else if(invbutton8.style.visibility == "visible") {
            invbutton8.style.visibility = "hidden"
        }
    }
}
function showAdditional9()
{
    if(slot9_filled == true) {
        if(invbutton9.style.visibility == "hidden") {
            clear_inv_buttons()
            invbutton9.style.visibility = "visible"
        }
        else if(invbutton9.style.visibility == "visible") {
            invbutton9.style.visibility = "hidden"
        }
    }
}
function clear_inv_buttons()
{
    invbutton1.style.visibility = "hidden"
    invbutton2.style.visibility = "hidden"
    invbutton3.style.visibility = "hidden"
    invbutton4.style.visibility = "hidden"
    invbutton5.style.visibility = "hidden"
    invbutton6.style.visibility = "hidden"
    invbutton7.style.visibility = "hidden"
    invbutton8.style.visibility = "hidden"
    invbutton9.style.visibility = "hidden"
}
function sell_from_inv(number) 
{
    if(eval("invbutton" + number).style.visibility == "visible") {
        orb_sound.play()
        if(eval("slot" + number).style.backgroundImage == image_1) {
            gold = gold + 20
        }
        if(eval("slot" + number).style.backgroundImage == image_2) {
            gold = gold + 80
        }
        if(eval("slot" + number).style.backgroundImage == image_3) {
            gold = gold + 60
        }
        if(eval("slot" + number).style.backgroundImage == image_4) {
            gold = gold + 10
        }
        if(eval("slot" + number).style.backgroundImage == image_5) {
            gold = gold + 60
        }
        if(eval("slot" + number).style.backgroundImage == image_6) {
            gold = gold + 40
        }
        if(eval("slot" + number).style.backgroundImage == image_7) {
            gold = gold + 50
        }
        update_text()
        if(eval("count" + number).innerHTML != "" && parseInt(eval("count" + number).innerHTML) > 1) {
            eval("count" + number).innerHTML = parseInt(eval("count" + number).innerHTML) - 1
            if(eval("count" + number).innerHTML == 1) {
                eval("count" + number).innerHTML = ""
            }
        }
        else {
            eval("slot" + number).style.backgroundImage = "url('')"
            eval("count" + number).innerHTML = ""
            if(number != 9) {
                for(let i = 1; i < 9; i++) {
                    if(eval("slot" + i + "_filled == true")) {
                        
                    }
                    else if(eval("slot" + i + "_filled == false")) {
                        eval("slot" + number).style.backgroundImage = eval("slot" + (i - 1)).style.backgroundImage
                        eval("slot" + (i - 1)).style.backgroundImage = "url('')"
                        eval("count" + number).innerHTML = eval("count" + (i - 1)).innerHTML
                        eval("count" + (i - 1)).innerHTML = ""
                        setTimeout(function() {
                            eval("slot" + (i - 1) + "_filled = false")
                        }, 10)
                        break
                    }
                }
            }
        }
    }
}
function pick1() {
    crinvitem1.style.boxShadow = "0 0 10px rgba(0,0,0,0.5)"
}
function pick2() {
    
}
function pick3() {
    
}
function pick4() {
    
}
function pick5() {
    
}
function pick6() {
    
}
function pick7() {
    
}
function pick8() {
    
}