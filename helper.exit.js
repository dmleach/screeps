var helperExit = {

    getDestination: function(position) {
        exitDestination = new RoomPosition(0, 0, '');
        var adjacentRooms = Game.map.describeExits(position.roomName);

        if (position.x == 0) {
            exitDestination.roomName = adjacentRooms[FIND_EXIT_LEFT];
            exitDestination.x = 49;
            exitDestination.y = position.y;
        } else if (position.x == 49) {
            exitDestination.roomName = adjacentRooms[FIND_EXIT_RIGHT];
            exitDestination.x = 0;
            exitDestination.y = position.y;
        } else if (position.y == 0) {
            exitDestination.roomName = adjacentRooms[FIND_EXIT_TOP];
            exitDestination.x = position.x;
            exitDestination.y = 49;
        } else if (position.y == 49) {
            exitDestination.roomName = adjacentRooms[FIND_EXIT_BOTTOM];
            exitDestination.x = position.x;
            exitDestination.y = 0;
        }

        return exitDestination;
    },

    isExit: function(position) {
        return (position.x == 0 || position.x == 49 || position.y == 0 || position.y == 49);
    }

}

module.exports = helperExit;
