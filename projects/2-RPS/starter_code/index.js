// This function returns the selection of the computer
            var userPoint = 0;
            var aiPoint = 0;
            
            /**
             * Randomly selects a number representing a throw. 
             * @return {[type]} [description]
             */
            function getAISelection() {
                
            }
            
            // This function picks the winner
            function pickWinner( userValue, aiValue ) {
                
            }

            
            /**
             * Sets the scoreboard with the correct points. 
             */
            function setScore() {
                
            }
            
            
            
            /**
             * This function captures the click and picks the winner. 
             * @param  {[type]} evt [description]
             * @return {[type]}     [description]
             */
            function evaluate( evt ){
                var userValue = evt.target.getAttribute('id');
                var aiValue = getAISelection();

                var winner = pickWinner(userValue, aiValue );

                if ( 'user' === winner ) {
                    $('#message').delay(50).text('You have won!, Click a box to play again');
                } else if ( winner === 'draw' ) {
                    $('#message').delay(50).text('Draw! Click a box to play again');
                } else {
                    $('#message').delay(50).text('You have lost!, Click a box to play again');
                }
            }

            /**
             * This function runs on page load. 
             */
            $(document).ready(function(){
                
            });