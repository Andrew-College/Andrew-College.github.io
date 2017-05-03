```lua 
game = {}

game_menu = {
  -- Colour for selected menu item
  selected = 1,
  -- Colour for unselected menu item
  not_selected = 9,
  -- three menu items
  menu_items = {
    start = {"test", false, 0, 0, 25, 13, nil},
    first = {"this", false, 0, 15, 25, 28, nil},
    second = {"menu", false, 0, 30, 25, 43, nil}
  },
  mouse = { 0, 0, 0 }
}

-- when game_menu is the current logic in-use, this will be the update function 
game_menu.update = function()
  game.mouse = { stat(32), stat(33), stat(34) }
  for idx, elem in pairs(game_menu.menu_items) do
    elem[2] =
      between(game.mouse[1], elem[3] + 50, elem[5] + 50) and
      between(game.mouse[2], elem[4] + 30, elem[6] + 30)
    if elem[2] and game.mouse[3] == 1 then
      game = elem[7]
      return
    end
  end
end
```