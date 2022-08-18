let userPlayer = "white";
let aiPlayer = "black";
let userPlayerTurn = true;
let userResult = 0;
let aiResult = 0;
let drawingQueue = [];
let ind = 0;
let checkSth = 0;
let checkSth1 = 0;
let checkSth2 = 0;
let tempValStepOne;
let tempValStepTwo;
let tempValStepThree;
let tempValStepFour;
let tempValStepFive;
let darkSquareArray = [];


//points for certain achivments:
//pawns on line 1-7 => 2,4,6,8,10,12,16
//king => 24
//if opponetnt pawns count > 4 king +1 point for moving back to line 1
//if opponennt pawns count < 4 king gets points for aproching opponetnts pawns 
//some changes here!!! and more!!!

class GameState {
    constructor (path, A1, C1, E1, G1, B2, D2, F2, H2, A3, C3, E3, G3, B4, D4, F4, H4, A5, C5, E5, G5, B6, D6, F6, H6, A7, C7, E7, G7, B8, D8, F8, H8, border, playerWhiteMoveOptions, playerBlackMoveOptions) {
        this.path = path;
        this.A1 = A1; 
        this.C1 = C1; 
        this.E1 = E1; 
        this.G1 = G1; 
        this.B2 = B2; 
        this.D2 = D2; 
        this.F2 = F2; 
        this.H2 = H2; 
        this.A3 = A3; 
        this.C3 = C3; 
        this.E3 = E3; 
        this.G3 = G3; 
        this.B4 = B4; 
        this.D4 = D4; 
        this.F4 = F4; 
        this.H4 = H4; 
        this.A5 = A5; 
        this.C5 = C5; 
        this.E5 = E5; 
        this.G5 = G5; 
        this.B6 = B6; 
        this.D6 = D6; 
        this.F6 = F6; 
        this.H6 = H6; 
        this.A7 = A7; 
        this.C7 = C7; 
        this.E7 = E7; 
        this.G7 = G7; 
        this.B8 = B8; 
        this.D8 = D8; 
        this.F8 = F8; 
        this.H8 = H8; 
        this.border = border; 
        this.playerWhiteMoveOptions = playerWhiteMoveOptions;
        this.playerBlackMoveOptions = playerBlackMoveOptions;

        this.playerWhiteMoveOptions.A1 = {
            moveOptions: [this.B2],
            jumpOptions: [this.C3],
            moveOptionsKing: [this.B2],
            jumpOptionsKing: [this.C3],
        }; 
        this.playerWhiteMoveOptions.C1 = {
            moveOptions: [this.B2, this.D2],
            jumpOptions: [this.A3, this.E3],
            moveOptionsKing: [this.B2, this.D2],
            jumpOptionsKing: [this.A3, this.E3],
        }; 
        this.playerWhiteMoveOptions.E1 = {
            moveOptions: [this.D2, this.F2],
            jumpOptions: [this.C3, this.G3],
            moveOptionsKing: [this.D2, this.F2],
            jumpOptionsKing: [this.C3, this.G3],
        }; 
        this.playerWhiteMoveOptions.G1 = {
            moveOptions: [this.F2, this.H2],
            jumpOptions: [this.E3, this.border],
            moveOptionsKing: [this.F2, this.H2],
            jumpOptionsKing: [this.E3, this.border],
        }; 
        this.playerWhiteMoveOptions.B2 = {
            moveOptions: [this.A3, this.C3],
            jumpOptions: [this.border, this.D4],
            moveOptionsKing: [this.A3, this.C3, this.C1, this.A1],
            jumpOptionsKing: [this.border, this.D4, this.border, this.border],
        }; 
        this.playerWhiteMoveOptions.D2 =  {
            moveOptions: [this.C3, this.E3],
            jumpOptions: [this.B4, this.F4],
            moveOptionsKing: [this.C3, this.E3, this.E1, this.C1],
            jumpOptionsKing: [this.B4, this.F4, this.border, this.border],
        }; 
        this.playerWhiteMoveOptions.F2 = {
            moveOptions: [this.E3, this.G3],
            jumpOptions: [this.D4, this.H4],
            moveOptionsKing: [this.E3, this.G3, this.G1, this.E1],
            jumpOptionsKing: [this.D4, this.H4, this.border, this.border],
        }; 
        this.playerWhiteMoveOptions.H2 = {
            moveOptions: [this.G3],
            jumpOptions: [this.F4],
            moveOptionsKing: [this.G3, this.G1],
            jumpOptionsKing: [this.F4, this.border],
        }; 
        this.playerWhiteMoveOptions.A3 = {
            moveOptions: [this.B4],
            jumpOptions: [this.C5],
            moveOptionsKing: [this.B4, this.B2],
            jumpOptionsKing: [this.C5, this.C1],
        }; 
        this.playerWhiteMoveOptions.C3 = {
            moveOptions: [this.B4, this.D4],
            jumpOptions: [this.A5, this.E5],
            moveOptionsKing: [this.B4, this.D4,this.D2, this.B2],
            jumpOptionsKing: [this.A5, this.E5, this.E1, this.A1],
        }; 
        this.playerWhiteMoveOptions.E3 = {
            moveOptions: [this.D4, this.F4],
            jumpOptions: [this.C5, this.G5],
            moveOptionsKing: [this.D4, this.F4, this.F2, this.D2],
            jumpOptionsKing: [this.C5, this.G5, this.G1, this.C1],
        }; 
        this.playerWhiteMoveOptions.G3 = {
            moveOptions: [this.F4, this.H4],
            jumpOptions: [this.E5, this.border],
            moveOptionsKing: [this.F4, this.H4, this.H2, this.F2],
            jumpOptionsKing: [this.E5, this.border, this.border, this.E1],
        }; 
        this.playerWhiteMoveOptions.B4 =  {
            moveOptions: [this.A5, this.C5],
            jumpOptions: [this.border, this.D6],
            moveOptionsKing: [this.A5, this.C5, this.C3, this.A3],
            jumpOptionsKing: [this.border, this.D6, this.D2, this.border],
        }; 
        this.playerWhiteMoveOptions.D4 = {
            moveOptions: [this.C5, this.E5],
            jumpOptions: [this.B6, this.F6],
            moveOptionsKing: [this.C5, this.E5, this.E3, this.C3],
            jumpOptionsKing: [this.B6, this.F6, this.F2, this.B2],
        }; 
        this.playerWhiteMoveOptions.F4 = {
            moveOptions: [this.E5, this.G5],
            jumpOptions: [this.D6, this.H6],
            moveOptionsKing: [this.E5, this.G5, this.G3, this.E3],
            jumpOptionsKing: [this.D6, this.H6, this.H2, this.D2],
        }; 
        this.playerWhiteMoveOptions.H4 = {
            moveOptions: [this.G5],
            jumpOptions: [this.F6],
            moveOptionsKing: [this.G5, this.G3],
            jumpOptionsKing: [this.F6, this.F2],
        }; 
        this.playerWhiteMoveOptions.A5 = {
            moveOptions: [this.B6],
            jumpOptions: [this.C7],
            moveOptionsKing: [this.B6, this.B4],
            jumpOptionsKing: [this.C7, this.C3],
        }; 
        this.playerWhiteMoveOptions.C5 = {
            moveOptions: [this.B6, this.D6],
            jumpOptions: [this.A7, this.E7],
            moveOptionsKing: [this.B6, this.D6, this.D4, this.B4],
            jumpOptionsKing: [this.A7, this.E7, this.E3, this.A3],
        }; 
        this.playerWhiteMoveOptions.E5 = {
            moveOptions: [this.D6, this.F6],
            jumpOptions: [this.C7, this.G7],
            moveOptionsKing: [this.D6, this.F6, this.F4, this.D4],
            jumpOptionsKing: [this.C7, this.G7, this.G3, this.C3],
        }; 
        this.playerWhiteMoveOptions.G5 = {
            moveOptions: [this.F6, this.H6],
            jumpOptions: [this.E7, this.border],
            moveOptionsKing: [this.F6, this.H6, this.H4, this.F4],
            jumpOptionsKing: [this.E7, this.border, this.border, this.E3],
        }; 
        this.playerWhiteMoveOptions.B6 = {
            moveOptions: [this.A7, this.C7],
            jumpOptions: [this.border, this.D8],
            moveOptionsKing: [this.A7, this.C7, this.C5, this.A5],
            jumpOptionsKing: [this.border, this.D8, this.D4, this.border],
        }; 
        this.playerWhiteMoveOptions.D6 = {
            moveOptions: [this.C7, this.E7],
            jumpOptions: [this.B8, this.F8],
            moveOptionsKing: [this.C7, this.E7, this.E5, this.C5],
            jumpOptionsKing: [this.B8, this.F8, this.F4, this.B4],
        }; 
        this.playerWhiteMoveOptions.F6 = {
            moveOptions: [this.E7, this.G7],
            jumpOptions: [this.D8, this.H8],
            moveOptionsKing: [this.E7, this.G7, this.G5, this.E5],
            jumpOptionsKing: [this.D8, this.H8, this.H4, this.D4],
        }; 
        this.playerWhiteMoveOptions.H6 = {
            moveOptions: [this.G7],
            jumpOptions: [this.F8],
            moveOptionsKing: [this.G7, this.G5],
            jumpOptionsKing: [this.F8, this.F4],
        }; 
        this.playerWhiteMoveOptions.A7 = {
            moveOptions: [this.B8],
            jumpOptions: [this.border],
            moveOptionsKing: [this.B8, this.B6],
            jumpOptionsKing: [this.border, this.C5],
        }; 
        this.playerWhiteMoveOptions.C7 = {
            moveOptions: [this.B8, this.D8],
            jumpOptions: [this.border, this.border],
            moveOptionsKing: [this.B8, this.D8, this.D6, this.B6],
            jumpOptionsKing: [this.border, this.border, this.E5, this.A5],
        }; 
        this.playerWhiteMoveOptions.E7 = {
            moveOptions: [this.D8, this.F8],
            jumpOptions: [this.border, this.border],
            moveOptionsKing: [this.D8, this.F8, this.F6, this.D6],
            jumpOptionsKing: [this.border, this.border, this.G5, this.C5],
        }; 
        this.playerWhiteMoveOptions.G7 = {
            moveOptions: [this.F8, this.H8],
            jumpOptions: [this.border, this.border],
            moveOptionsKing: [this.F8, this.H8, this.H6, this.F6],
            jumpOptionsKing: [this.border, this.border, this.border, this.E5],
        }; 
        this.playerWhiteMoveOptions.B8 = {
            moveOptions: [this.border],
            jumpOptions: [this.border],
            moveOptionsKing: [this.C7, this.A7],
            jumpOptionsKing: [this.D6, this.border],
        }; 
        this.playerWhiteMoveOptions.D8 = {
            moveOptions: [this.border],
            jumpOptions: [this.border],
            moveOptionsKing: [this.E7, this.C7],
            jumpOptionsKing: [this.F6, this.B6],
        }; 
        this.playerWhiteMoveOptions.F8 = {
            moveOptions: [this.border],
            jumpOptions: [this.border],
            moveOptionsKing: [this.G7, this.E7],
            jumpOptionsKing: [this.H6, this.D6],
        }; 
        this.playerWhiteMoveOptions.H8 = {
            moveOptions: [this.border],
            jumpOptions: [this.border],
            moveOptionsKing: [this.G7],
            jumpOptionsKing: [this.F6],
        }; 

        this.playerBlackMoveOptions.A1 = {
            moveOptions: [this.border],
            jumpOptions: [this.border],
            moveOptionsKing: [this.B2],
            jumpOptionsKing: [this.C3],
        }; 
        this.playerBlackMoveOptions.C1 = {
            moveOptions: [this.border],
            jumpOptions: [this.border],
            moveOptionsKing: [this.B2, this.D2],
            jumpOptionsKing: [this.A3, this.E3],
        }; 
        this.playerBlackMoveOptions.E1 = {
            moveOptions: [this.border],
            jumpOptions: [this.border],
            moveOptionsKing: [this.D2, this.F2],
            jumpOptionsKing: [this.C3, this.G3],
        }; 
        this.playerBlackMoveOptions.G1 = {
            moveOptions: [this.border],
            jumpOptions: [this.border],
            moveOptionsKing: [this.F2, this.H2],
            jumpOptionsKing: [this.E3, this.border],
        }; 
        this.playerBlackMoveOptions.B2 = {
            moveOptions: [this.C1, this.A1],
            jumpOptions: [this.border, this.border],
            moveOptionsKing: [this.C1, this.A1, this.A3, this.C3],
            jumpOptionsKing: [this.border, this.border, this.border, this.D4],
        }; 
        this.playerBlackMoveOptions.D2 = {
            moveOptions: [this.E1, this.C1],
            jumpOptions: [this.border, this.border],
            moveOptionsKing: [this.E1, this.C1, this.C3, this.E3],
            jumpOptionsKing: [this.border, this.border, this.B4, this.F4],
        }; 
        this.playerBlackMoveOptions.F2 = {
            moveOptions: [this.G1, this.E1],
            jumpOptions: [this.border, this.border],
            moveOptionsKing: [this.G1, this.E1, this.E3, this.G3],
            jumpOptionsKing: [this.border, this.border, this.D4, this.H4],
        }; 
        this.playerBlackMoveOptions.H2 = {
            moveOptions: [this.G1],
            jumpOptions: [this.border],
            moveOptionsKing: [this.G1, this.G3],
            jumpOptionsKing: [this.border, this.F4],
        }; 
        this.playerBlackMoveOptions.A3 = {
            moveOptions: [this.B2],
            jumpOptions: [this.C1],
            moveOptionsKing: [this.B2, this.B4],
            jumpOptionsKing: [this.C1, this.C5],
        }; 
        this.playerBlackMoveOptions.C3 = {
            moveOptions: [this.D2, this.B2],
            jumpOptions: [this.E1, this.A1],
            moveOptionsKing: [this.D2, this.B2, this.B4, this.D4],
            jumpOptionsKing: [this.E1, this.A1, this.A5, this.E5],
        }; 
        this.playerBlackMoveOptions.E3 = {
            moveOptions: [this.F2, this.D2],
            jumpOptions: [this.G1, this.C1],
            moveOptionsKing: [this.F2, this.D2, this.D4, this.F4],
            jumpOptionsKing: [this.G1, this.C1, this.C5, this.G5],
        }; 
        this.playerBlackMoveOptions.G3 = {
            moveOptions: [this.H2, this.F2],
            jumpOptions: [this.border, this.E1],
            moveOptionsKing: [this.H2, this.F2, this.F4, this.H4],
            jumpOptionsKing: [this.border, this.E1, this.E5, this.border],
        }; 
        this.playerBlackMoveOptions.B4 = {
            moveOptions: [this.C3, this.A3],
            jumpOptions: [this.D2, this.border],
            moveOptionsKing: [this.C3, this.A3, this.A5, this.C5],
            jumpOptionsKing: [this.D2, this.border, this.border, this.D6],
        }; 
        this.playerBlackMoveOptions.D4 = {
            moveOptions: [this.E3, this.C3],
            jumpOptions: [this.F2, this.B2],
            moveOptionsKing: [this.E3, this.C3, this.C5, this.E5],
            jumpOptionsKing: [this.F2, this.B2, this.B6, this.F6],
        }; 
        this.playerBlackMoveOptions.F4 = {
            moveOptions: [this.G3, this.E3],
            jumpOptions: [this.H2, this.D2],
            moveOptionsKing: [this.G3, this.E3, this.E5, this.G5],
            jumpOptionsKing: [this.H2, this.D2, this.D6, this.H6],
        }; 
        this.playerBlackMoveOptions.H4 = {
            moveOptions: [this.G3],
            jumpOptions: [this.F2],
            moveOptionsKing: [this.G3, this.G5],
            jumpOptionsKing: [this.F2, this.F6],
        }; 
        this.playerBlackMoveOptions.A5 = {
            moveOptions: [this.B4],
            jumpOptions: [this.C3],
            moveOptionsKing: [this.B4, this.B6],
            jumpOptionsKing: [this.C3, this.C7],
        }; 
        this.playerBlackMoveOptions.C5 = {
            moveOptions: [this.D4, this.B4],
            jumpOptions: [this.E3, this.A3],
            moveOptionsKing: [this.D4, this.B4, this.B6, this.D6],
            jumpOptionsKing: [this.E3, this.A3, this.A7, this.E7],
        }; 
        this.playerBlackMoveOptions.E5 = {
            moveOptions: [this.F4, this.D4],
            jumpOptions: [this.G3, this.C3],
            moveOptionsKing: [this.F4, this.D4, this.D6, this.F6],
            jumpOptionsKing: [this.G3, this.C3, this.C7, this.G7],
        }; 
        this.playerBlackMoveOptions.G5 = {
            moveOptions: [this.H4, this.F4],
            jumpOptions: [this.border, this.E3],
            moveOptionsKing: [this.H4, this.F4, this.F6, this.H6],
            jumpOptionsKing: [this.border, this.E3, this.E7, this.border],
        }; 
        this.playerBlackMoveOptions.B6 = {
            moveOptions: [this.C5, this.A5],
            jumpOptions: [this.D4, this.border],
            moveOptionsKing: [this.C5, this.A5, this.A7, this.C7],
            jumpOptionsKing: [this.D4, this.border, this.border, this.D8],
        }; 
        this.playerBlackMoveOptions.D6 = {
            moveOptions: [this.E5, this.C5],
            jumpOptions: [this.F4, this.B4],
            moveOptionsKing: [this.E5, this.C5, this.C7, this.E7],
            jumpOptionsKing: [this.F4, this.B4, this.B8, this.F8],
        }; 
        this.playerBlackMoveOptions.F6 = {
            moveOptions: [this.G5, this.E5],
            jumpOptions: [this.H4, this.D4],
            moveOptionsKing: [this.G5, this.E5, this.E7, this.G7],
            jumpOptionsKing: [this.H4, this.D4, this.D8, this.H8],
        }; 
        this.playerBlackMoveOptions.H6 = {
            moveOptions: [this.G5],
            jumpOptions: [this.F4],
            moveOptionsKing: [this.G5, this.G7],
            jumpOptionsKing: [this.F4, this.F8],
        }; 
        this.playerBlackMoveOptions.A7 = {
            moveOptions: [this.B6],
            jumpOptions: [this.C5],
            moveOptionsKing: [this.B6, this.B8],
            jumpOptionsKing: [this.C5, this.border],
        }; 
        this.playerBlackMoveOptions.C7 = {
            moveOptions: [this.D6, this.B6],
            jumpOptions: [this.E5, this.A5],
            moveOptionsKing: [this.D6, this.B6, this.B8, this.D8],
            jumpOptionsKing: [this.E5, this.A5, this.border, this.border],
        }; 
        this.playerBlackMoveOptions.E7 = {
            moveOptions: [this.F6, this.D6],
            jumpOptions: [this.G5, this.C5],
            moveOptionsKing: [this.F6, this.D6, this.D8, this.F8],
            jumpOptionsKing: [this.G5, this.C5, this.border, this.border],
        }; 
        this.playerBlackMoveOptions.G7 = {
            moveOptions: [this.H6, this.F6],
            jumpOptions: [this.border, this.E5],
            moveOptionsKing: [this.H6, this.F6, this.F8, this.H8],
            jumpOptionsKing: [this.border, this.E5, this.border, this.border],
        }; 
        this.playerBlackMoveOptions.B8 = {
            moveOptions: [this.C7, this.A7],
            jumpOptions: [this.D6, this.border],
            moveOptionsKing: [this.C7, this.A7],
            jumpOptionsKing: [this.D6, this.border],
        }; 
        this.playerBlackMoveOptions.D8 = {
            moveOptions: [this.E7, this.C7],
            jumpOptions: [this.F6, this.B6],
            moveOptionsKing: [this.E7, this.C7],
            jumpOptionsKing: [this.F6, this.B6],
        }; 
        this.playerBlackMoveOptions.F8 = {
            moveOptions: [this.G7, this.E7],
            jumpOptions: [this.H6, this.D6],
            moveOptionsKing: [this.G7, this.E7],
            jumpOptionsKing: [this.H6, this.D6],
        }; 
        this.playerBlackMoveOptions.H8 = {
            moveOptions: [this.G7],
            jumpOptions: [this.F6],
            moveOptionsKing: [this.G7],
            jumpOptionsKing: [this.F6],
        }; 
    }
}

let gameState = new GameState(
    [],
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 1,
        column: 1,
        fieldName: "A1"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 1,
        column: 3,
        fieldName: "C1"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 1,
        column: 5,
        fieldName: "E1"
    },
    { 
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 1,
        column: 7,
        fieldName: "G1"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 2,
        column: 2,
        fieldName: "B2"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 2,
        column: 4,
        fieldName: "D2"
    },
    {  
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 2,
        column: 6,
        fieldName: "F2"
    },
    {       
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 2,
        column: 8,
        fieldName: "H2"
    },
    {       
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 3,
        column: 1,
        fieldName: "A3"
    },
    {       
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 3,
        column: 3,
        fieldName: "C3"
    },
    {       
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 3,
        column: 5,
        fieldName: "E3"
    },
    {       
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 3,
        column: 7,
        fieldName: "G3"
    },
    {       
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 4,
        column: 2,
        fieldName: "B4"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false  ,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 4,
        column: 4,
        fieldName: "D4"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 4,
        column: 6,
        fieldName: "F4"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 4,
        column: 8,
        fieldName: "H4"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 5,
        column: 1,
        fieldName: "A5"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 5,
        column: 3,
        fieldName: "C5"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 5,
        column: 5,
        fieldName: "E5"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 5,
        column: 7,
        fieldName: "G5"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 6,
        column: 2,
        fieldName: "B6"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 6,
        column: 4,
        fieldName: "D6"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 6,
        column: 6,
        fieldName: "F6"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 6,
        column: 8,
        fieldName: "H6"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 7,
        column: 1,
        fieldName: "A7"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 7,
        column: 3,
        fieldName: "C7"
    },
    { 
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 7,
        column: 5,
        fieldName: "E7"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 7,
        column: 7,
        fieldName: "G7"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 8,
        column: 2,
        fieldName: "B8"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 8,
        column: 4,
        fieldName: "D8"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 8,
        column: 6,
        fieldName: "F8"
    },
    {
        isFree: true,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 8,
        column: 8,
        fieldName: "H8"
    },
    {
        isFree: false,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 0,
        column: 0
    },
    {
        isFree: false,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 0,
        column: 0
    },
    {
        isFree: false,
        hasAiPawn: false,
        hasUserPawn: false,
        hasAiKing: false,
        hasUserKing: false,
        rowNumber: 0,
        column: 0
    }
)


let isFieldChoosen;
let validMove;
let myPreviousTarget;

let chooseField = (e) => {
    

    console.log("start of next move!!!");
    console.log(gameState);

    let myTarget = e.target.id
    let arrayWithMovingOptions;
    validMove = false;

    if (e.target.id === "pawn180" || e.target.id === "pawn") {
        myTarget = e.target.parentNode.id
    }

    if (e.target.id === "king180" || e.target.id === "king") {
        myTarget = e.target.parentNode.id
    }
    
    if (isFieldChoosen) {
        
        for (const key in gameState) {
            if (myPreviousTarget === gameState[key].fieldName) {

                let hasUserPawn = gameState[key].hasUserPawn;
                let hasUserKing = gameState[key].hasUserKing;
                

                if (hasUserKing) {
                    if (userPlayer === "white") {
                        arrayWithMovingOptions = gameState.playerWhiteMoveOptions[key].moveOptionsKing;
                    } else if (userPlayer === "black") {
                        arrayWithMovingOptions = gameState.playerBlackMoveOptions[key].moveOptionsKing;
                    }
                } else {
                    if (userPlayer === "white") {
                        arrayWithMovingOptions = gameState.playerWhiteMoveOptions[key].moveOptions;
                    } else if (userPlayer === "black") {
                        arrayWithMovingOptions = gameState.playerBlackMoveOptions[key].moveOptions;
                    }
                }
                
                
                for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                    
                    if (arrayWithMovingOptions[i].fieldName) {
                        document.getElementById(arrayWithMovingOptions[i].fieldName).style.opacity = "100%"

                    }
                }

                
                if (hasUserPawn || hasUserKing) {
                    for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                        if (myTarget === arrayWithMovingOptions[i].fieldName) {
                           
                            let isFreeAhead = arrayWithMovingOptions[i].isFree;
                            if (isFreeAhead) {
                                //change gamestate, change to AI turn
                                //redraw borad with new state
                                //return from function
                                console.log("this is valid move!!!!");
                                console.log("move user pawn from ", myPreviousTarget, " to field ", myTarget);

                                for (const key in gameState) {
                                    if (gameState[key].fieldName) {
                                        document.getElementById(gameState[key].fieldName).removeEventListener("click", chooseField);
                                    }
                                }

                                if (hasUserPawn) {
                                    gameState[key].hasUserPawn = false;
                                    gameState[key].isFree = true;
                                    arrayWithMovingOptions[i].hasUserPawn = true;
                                    arrayWithMovingOptions[i].isFree = false;
                                }
                                
                                if (hasUserKing) {
                                    gameState[key].hasUserKing = false;
                                    gameState[key].isFree = true;
                                    arrayWithMovingOptions[i].hasUserKing = true;
                                    arrayWithMovingOptions[i].isFree = false;
                                }

                                validMove = true;

                                

                                console.log(gameState);
                                drawBoard(gameState);
                                userPlayerTurn = false;
                                setTimeout(() => {
                                    chooseBestMove(gameState, aiPlayer, userPlayer);
                                }, 10)
                                
                            }
                            
                        }
                        
                    }
                }
                
            }
        }
        
    }

    myPreviousTarget = myTarget;
    console.log("field clicked now: ", myTarget);

    if (!validMove) {

        for (const key in gameState) {
            if (myTarget === gameState[key].fieldName) {
    
                let hasUserPawn = gameState[key].hasUserPawn;
                let hasUserKing = gameState[key].hasUserKing;
                
                if (hasUserPawn) {
                    isFieldChoosen = true;
                    if (userPlayer === "white") {
                        arrayWithMovingOptions = gameState.playerWhiteMoveOptions[key].moveOptions;
                    } else if (userPlayer === "black") {
                        arrayWithMovingOptions = gameState.playerBlackMoveOptions[key].moveOptions;
                    }
        
        
                    for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                        if (arrayWithMovingOptions[i].isFree) {
                            document.getElementById(arrayWithMovingOptions[i].fieldName).style.opacity = "80%"
                        }
                    }
                }
    
                if (hasUserKing) {
                    isFieldChoosen = true;
                    if (userPlayer === "white") {
                        arrayWithMovingOptions = gameState.playerWhiteMoveOptions[key].moveOptionsKing;
                    } else if (userPlayer === "black") {
                        arrayWithMovingOptions = gameState.playerBlackMoveOptions[key].moveOptionsKing;
                    }
        
        
                    for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                        if (arrayWithMovingOptions[i].isFree) {
                            document.getElementById(arrayWithMovingOptions[i].fieldName).style.opacity = "80%"
                        }
                    }
                }
    
    
            }
        }
    }
    
}


// let chooseSide = () => {
//     let coinflip = Math.floor(Math.random() * 2)
//     coinflip = 1
//     if (coinflip === 0) {
//         aiPlayer = "white";
//         userPlayer = "black";
//         gameState.A1.isFree = false;
//         gameState.C1.isFree = false;
//         gameState.E1.isFree = false;
//         gameState.G1.isFree = false;
//         gameState.B2.isFree = false;
//         gameState.D2.isFree = false;
//         gameState.F2.isFree = false;
//         gameState.H2.isFree = false;
//         gameState.A3.isFree = false;
//         gameState.C3.isFree = false;
//         gameState.E3.isFree = false;
//         gameState.G3.isFree = false;
//         gameState.A1.hasAiPawn = true;
//         gameState.C1.hasAiPawn = true;
//         gameState.E1.hasAiPawn = true;
//         gameState.G1.hasAiPawn = true;
//         gameState.B2.hasAiPawn = true;
//         gameState.D2.hasAiPawn = true;
//         gameState.F2.hasAiPawn = true;
//         gameState.H2.hasAiPawn = true;
//         gameState.A3.hasAiPawn = true;
//         gameState.C3.hasAiPawn = true;
//         gameState.E3.hasAiPawn = true;
//         gameState.G3.hasAiPawn = true;
//         gameState.B6.isFree = false;
//         gameState.D6.isFree = false;
//         gameState.F6.isFree = false;
//         gameState.H6.isFree = false;
//         gameState.A7.isFree = false;
//         gameState.C7.isFree = false;
//         gameState.E7.isFree = false;
//         gameState.G7.isFree = false;
//         gameState.B8.isFree = false;
//         gameState.D8.isFree = false;
//         gameState.F8.isFree = false;
//         gameState.H8.isFree = false;
//         gameState.B6.hasUserPawn = true;
//         gameState.D6.hasUserPawn = true;
//         gameState.F6.hasUserPawn = true;
//         gameState.H6.hasUserPawn = true;
//         gameState.A7.hasUserPawn = true;
//         gameState.C7.hasUserPawn = true;
//         gameState.E7.hasUserPawn = true;
//         gameState.G7.hasUserPawn = true;
//         gameState.B8.hasUserPawn = true;
//         gameState.D8.hasUserPawn = true;
//         gameState.F8.hasUserPawn = true;
//         gameState.H8.hasUserPawn = true;
//         userPlayerTurn = false;
//     } else {
//         aiPlayer = "black";
//         userPlayer = "white";
//         gameState.A1.isFree = false;
//         gameState.C1.isFree = false;
//         gameState.E1.isFree = false;
//         gameState.G1.isFree = false;
//         gameState.B2.isFree = false;
//         gameState.D2.isFree = false;
//         gameState.F2.isFree = false;
//         gameState.H2.isFree = false;
//         gameState.A3.isFree = false;
//         gameState.C3.isFree = false;
//         gameState.E3.isFree = false;
//         gameState.G3.isFree = false;
//         gameState.A1.hasUserPawn = true;
//         gameState.C1.hasUserPawn = true;
//         gameState.E1.hasUserPawn = true;
//         gameState.G1.hasUserPawn = true;
//         gameState.B2.hasUserPawn = true;
//         gameState.D2.hasUserPawn = true;
//         gameState.F2.hasUserPawn = true;
//         gameState.H2.hasUserPawn = true;
//         gameState.A3.hasUserPawn = true;
//         gameState.C3.hasUserPawn = true;
//         gameState.E3.hasUserPawn = true;
//         gameState.G3.hasUserPawn = true;
//         gameState.B6.isFree = false;
//         gameState.D6.isFree = false;
//         gameState.F6.isFree = false;
//         gameState.H6.isFree = false;
//         gameState.A7.isFree = false;
//         gameState.C7.isFree = false;
//         gameState.E7.isFree = false;
//         gameState.G7.isFree = false;
//         gameState.B8.isFree = false;
//         gameState.D8.isFree = false;
//         gameState.F8.isFree = false;
//         gameState.H8.isFree = false;
//         gameState.B6.hasAiPawn = true;
//         gameState.D6.hasAiPawn = true;
//         gameState.F6.hasAiPawn = true;
//         gameState.H6.hasAiPawn = true;
//         gameState.A7.hasAiPawn = true;
//         gameState.C7.hasAiPawn = true;
//         gameState.E7.hasAiPawn = true;
//         gameState.G7.hasAiPawn = true;
//         gameState.B8.hasAiPawn = true;
//         gameState.D8.hasAiPawn = true;
//         gameState.F8.hasAiPawn = true;
//         gameState.H8.hasAiPawn = true;
//         userPlayerTurn = true;
//     }
// }


let chooseSide = () => {
    let coinflip = 1
    if (coinflip === 0) {
        aiPlayer = "white";
        userPlayer = "black";
        gameState.A1.isFree = false;
        gameState.C1.isFree = false;
        gameState.E1.isFree = false;
        gameState.G1.isFree = true;
        gameState.B2.isFree = true;
        gameState.D2.isFree = true;
        gameState.F2.isFree = false;
        gameState.H2.isFree = false;
        gameState.A3.isFree = true;
        gameState.C3.isFree = true;
        gameState.C5.isFree = true;
        gameState.E3.isFree = true;
        gameState.G3.isFree = false;
        gameState.F4.isFree = true;
        gameState.D4.isFree = false;
        
        
        gameState.A1.hasAiPawn = true;
        gameState.C1.hasAiPawn = true;
        gameState.E1.hasAiPawn = true;
        gameState.G1.hasAiPawn = false;
        gameState.B2.hasAiPawn = false;
        gameState.D2.hasAiPawn = false;
        gameState.F2.hasAiPawn = true;
        gameState.H2.hasAiPawn = true;
        gameState.A3.hasAiPawn = false;
        gameState.C3.hasAiPawn = false;
        gameState.C5.hasUserPawn = false;
        gameState.E3.hasAiPawn = false;
        gameState.G3.hasAiPawn = true;
        gameState.F4.hasUserPawn = false;
        gameState.D4.hasUserKing = true;

        gameState.B4.isFree = false;
        gameState.A5.isFree = false;
        gameState.G5.isFree = false;
        gameState.B6.isFree = false;
        gameState.D6.isFree = true;
        gameState.F6.isFree = false;
        gameState.H6.isFree = false;
        gameState.A7.isFree = true;
        gameState.C7.isFree = true;
        gameState.E7.isFree = false;
        gameState.G7.isFree = true;
        gameState.B8.isFree = true;
        gameState.D8.isFree = false;
        gameState.F8.isFree = true;
        gameState.H8.isFree = false;

        gameState.B4.hasUserPawn = true;
        gameState.A5.hasAiPawn = true;
        gameState.G5.hasAiPawn = true;
        gameState.B6.hasAiPawn = true;
        gameState.D6.hasAiPawn = false;
        gameState.F6.hasUserPawn = true;
        gameState.H6.hasAiPawn = true;
        gameState.A7.hasUserPawn = false;
        gameState.C7.hasUserPawn = false;
        gameState.E7.hasUserPawn = true;
        gameState.G7.hasUserPawn = false;
        gameState.B8.hasUserPawn = false;
        gameState.D8.hasUserPawn = true;
        gameState.F8.hasUserPawn = false;
        gameState.H8.hasUserPawn = true;
        userPlayerTurn = false;

    } else {
        aiPlayer = "black";
        userPlayer = "white";
        gameState.A1.isFree = false;
        gameState.C1.isFree = false;
        gameState.E1.isFree = false;
        gameState.G1.isFree = false;
        gameState.B2.isFree = false;
        gameState.D2.isFree = false;
        gameState.F2.isFree = false;
        gameState.H2.isFree = false;
        gameState.A3.isFree = false;
        gameState.C3.isFree = false;
        gameState.E3.isFree = false;
        gameState.G3.isFree = false;
        gameState.A1.hasUserPawn = true;
        gameState.C1.hasUserPawn = true;
        gameState.E1.hasUserPawn = true;
        gameState.G1.hasUserPawn = true;
        gameState.B2.hasUserPawn = true;
        gameState.D2.hasUserPawn = true;
        gameState.F2.hasUserPawn = true;
        gameState.H2.hasUserPawn = true;
        gameState.A3.hasUserPawn = true;
        gameState.C3.hasUserPawn = true;
        gameState.E3.hasUserPawn = true;
        gameState.G3.hasUserPawn = true;
        gameState.B6.isFree = false;
        gameState.D6.isFree = false;
        gameState.F6.isFree = false;
        gameState.H6.isFree = false;
        gameState.A7.isFree = false;
        gameState.C7.isFree = false;
        gameState.E7.isFree = false;
        gameState.G7.isFree = false;
        gameState.B8.isFree = false;
        gameState.D8.isFree = false;
        gameState.F8.isFree = false;
        gameState.H8.isFree = false;
        gameState.B6.hasAiPawn = true;
        gameState.D6.hasAiPawn = true;
        gameState.F6.hasAiPawn = true;
        gameState.H6.hasAiPawn = true;
        gameState.A7.hasAiPawn = true;
        gameState.C7.hasAiPawn = true;
        gameState.E7.hasAiPawn = true;
        gameState.G7.hasAiPawn = true;
        gameState.B8.hasAiPawn = true;
        gameState.D8.hasAiPawn = true;
        gameState.F8.hasAiPawn = true;
        gameState.H8.hasAiPawn = true;
        userPlayerTurn = true;
    }
}


let startGame = (gameStateProp) => {
   
    chooseSide();
    
    console.log("AI players has color:", aiPlayer);
    console.log("user players has color:", userPlayer);
    
    drawBoard(gameStateProp)
    
    chooseBestMove(gameStateProp, aiPlayer, userPlayer);
    
}


let calculateAiResult = (player, gameStateCalc) => {
    
    aiResult = 0;
    
    for (const key in gameStateCalc) {
        if (gameStateCalc[key].hasAiPawn && player === "white") {
            if (gameStateCalc[key].rowNumber === 1) {
                aiResult += 2 
            } else if (gameStateCalc[key].rowNumber === 2) {
                aiResult += 4 
            } else if (gameStateCalc[key].rowNumber === 3) {
                aiResult += 6 
            } else if (gameStateCalc[key].rowNumber === 4) {
                aiResult += 8 
            } else if (gameStateCalc[key].rowNumber === 5) {
                aiResult += 10 
            } else if (gameStateCalc[key].rowNumber === 6) {
                aiResult += 12 
            } else if (gameStateCalc[key].rowNumber === 7) {
                aiResult += 16 
            }
        } else if (gameStateCalc[key].hasAiPawn && player === "black") {
            if (gameStateCalc[key].rowNumber === 8) {
                aiResult += 2 
            } else if (gameStateCalc[key].rowNumber === 7) {
                aiResult += 4 
            } else if (gameStateCalc[key].rowNumber === 6) {
                aiResult += 6 
            } else if (gameStateCalc[key].rowNumber === 5) {
                aiResult += 8 
            } else if (gameStateCalc[key].rowNumber === 4) {
                aiResult += 10 
            } else if (gameStateCalc[key].rowNumber === 3) {
                aiResult += 12 
            } else if (gameStateCalc[key].rowNumber === 2) {
                aiResult += 16 
            }
        }

        if (gameStateCalc[key].hasAiKing && player === "white") {
            if (gameStateCalc[key].rowNumber === 1) {
                aiResult += 31 
            } else if (gameStateCalc[key].rowNumber === 2) {
                aiResult += 30 
            } else if (gameStateCalc[key].rowNumber === 3) {
                aiResult += 29 
            } else if (gameStateCalc[key].rowNumber === 4) {
                aiResult += 28 
            } else if (gameStateCalc[key].rowNumber === 5) {
                aiResult += 27 
            } else if (gameStateCalc[key].rowNumber === 6) {
                aiResult += 26 
            } else if (gameStateCalc[key].rowNumber === 7) {
                aiResult += 25 
            } else if (gameStateCalc[key].rowNumber === 8) {
                aiResult += 24 
            }
        } else if (gameStateCalc[key].hasAiKing && player === "black") {
            if (gameStateCalc[key].rowNumber === 8) {
                aiResult += 31 
            } else if (gameStateCalc[key].rowNumber === 7) {
                aiResult += 30 
            } else if (gameStateCalc[key].rowNumber === 6) {
                aiResult += 29 
            } else if (gameStateCalc[key].rowNumber === 5) {
                aiResult += 28 
            } else if (gameStateCalc[key].rowNumber === 4) {
                aiResult += 27 
            } else if (gameStateCalc[key].rowNumber === 3) {
                aiResult += 26 
            } else if (gameStateCalc[key].rowNumber === 2) {
                aiResult += 25 
            } else if (gameStateCalc[key].rowNumber === 1) {
                aiResult += 24 
            }
        }
    }
    
}


let calculateUserResult = (player, gameStateCalc) => {

    userResult = 0;

    for (const key in gameStateCalc) {
        if (gameStateCalc[key].hasUserPawn && player === "white") {
            if (gameStateCalc[key].rowNumber === 1) {
                userResult += 2 
            } else if (gameStateCalc[key].rowNumber === 2) {
                userResult += 4 
            } else if (gameStateCalc[key].rowNumber === 3) {
                userResult += 6 
            } else if (gameStateCalc[key].rowNumber === 4) {
                userResult += 8 
            } else if (gameStateCalc[key].rowNumber === 5) {
                userResult += 10 
            } else if (gameStateCalc[key].rowNumber === 6) {
                userResult += 12 
            } else if (gameStateCalc[key].rowNumber === 7) {
                userResult += 16 
            }
        } else if (gameStateCalc[key].hasUserPawn && player === "black") {
            if (gameStateCalc[key].rowNumber === 8) {
                userResult += 2 
            } else if (gameStateCalc[key].rowNumber === 7) {
                userResult += 4 
            } else if (gameStateCalc[key].rowNumber === 6) {
                userResult += 6 
            } else if (gameStateCalc[key].rowNumber === 5) {
                userResult += 8 
            } else if (gameStateCalc[key].rowNumber === 4) {
                userResult += 10 
            } else if (gameStateCalc[key].rowNumber === 3) {
                userResult += 12 
            } else if (gameStateCalc[key].rowNumber === 2) {
                userResult += 16 
            }
        }

        if (gameStateCalc[key].hasUserKing && player === "white") {
            if (gameStateCalc[key].rowNumber === 1) {
                userResult += 31 
            } else if (gameStateCalc[key].rowNumber === 2) {
                userResult += 30 
            } else if (gameStateCalc[key].rowNumber === 3) {
                userResult += 29 
            } else if (gameStateCalc[key].rowNumber === 4) {
                userResult += 28 
            } else if (gameStateCalc[key].rowNumber === 5) {
                userResult += 27 
            } else if (gameStateCalc[key].rowNumber === 6) {
                userResult += 26 
            } else if (gameStateCalc[key].rowNumber === 7) {
                userResult += 25 
            } else if (gameStateCalc[key].rowNumber === 8) {
                userResult += 24 
            }
        } else if (gameStateCalc[key].hasUserKing && player === "black") {
            if (gameStateCalc[key].rowNumber === 8) {
                userResult += 31 
            } else if (gameStateCalc[key].rowNumber === 7) {
                userResult += 30 
            } else if (gameStateCalc[key].rowNumber === 6) {
                userResult += 29 
            } else if (gameStateCalc[key].rowNumber === 5) {
                userResult += 28 
            } else if (gameStateCalc[key].rowNumber === 4) {
                userResult += 27 
            } else if (gameStateCalc[key].rowNumber === 3) {
                userResult += 26 
            } else if (gameStateCalc[key].rowNumber === 2) {
                userResult += 25 
            } else if (gameStateCalc[key].rowNumber === 1) {
                userResult += 24 
            }
        }
    }
}



let drawSequence = (arrayWithParams) => {

    if (ind < arrayWithParams.length) {
        setTimeout(() => {
            drawBoard(arrayWithParams[ind]);
            ind++;
            drawSequence(arrayWithParams);
        }, 2000)
    }
}



let findForcedMoves = (gameStateProp, field) => {

    let returnObject = {
        forcedMove: false,
        newGameState: [],
        highestValue: null,
    }

    let promotionFields;
    let seventhRow;
    let isPromoted;
    let isSeventhRow;
    
    for (const key in gameStateProp) {
        
        if (field === "none" || key === field) {
            
            if (gameStateProp[key].hasAiPawn) {
                let arrayWithMovingOptions;
                let arrayWithJumpingOptions;
                
    
                if (aiPlayer === "white") {
                    arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerWhiteMoveOptions[key].jumpOptions;
                    promotionFields = ["B8", "D8", "F8", "H8"];
                    seventhRow  = ["A7", "C7", "E7", "G7"];

                } else if (aiPlayer === "black") {
                    arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerBlackMoveOptions[key].jumpOptions;
                    promotionFields = ["A1", "C1", "E1", "G1"];
                    seventhRow = ["B2", "D2", "F2", "H2"];
                }
    
                 
                for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                    if (arrayWithMovingOptions[i].hasUserPawn || arrayWithMovingOptions[i].hasUserKing) {
    
                        let opponentType;
                        if (arrayWithMovingOptions[i].hasUserPawn) {
                            opponentType = "pawn"
                        } else if (arrayWithMovingOptions[i].hasUserKing) {
                            opponentType = "king"
                        }
                        if (arrayWithJumpingOptions[i].isFree) {
                            console.log("you have to jump your pawn from: ", key, "to square: ", arrayWithJumpingOptions[i].fieldName );
    
                            isPromoted = promotionFields.includes(arrayWithJumpingOptions[i].fieldName);
                            isSeventhRow = seventhRow.includes(arrayWithJumpingOptions[i].fieldName);
                            
                            gameStateProp[key].hasAiPawn = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptions[i].hasUserPawn = false;
                            arrayWithMovingOptions[i].hasUserKing = false;
                            arrayWithMovingOptions[i].isFree = true;
                            arrayWithJumpingOptions[i].isFree = false;

                            
                            //just for pawn part of function
                            if (isPromoted) {
                                arrayWithJumpingOptions[i].hasAiKing = true;
                            } else {
                                arrayWithJumpingOptions[i].hasAiPawn = true;
                            }
                            
                            //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));


                            if (returnObject.forcedMove) {

                                let doCalculation = true;
                                let alternativePath = []
                                

                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                if (!isPromoted && !isSeventhRow) {
                                    let isAnotherForcedMove = findForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isAnotherForcedMove.forcedMove) {
                                        doCalculation = false;
                                        if (isAnotherForcedMove.highestValue > returnObject.highestValue) {
                                            returnObject.newGameState = alternativePath;
                                            for (let j = 0; j < isAnotherForcedMove.newGameState.length; j++) {
                                                returnObject.newGameState.push(isAnotherForcedMove.newGameState[j]);
                                            }
                                            returnObject.highestValue = isAnotherForcedMove.highestValue;
                                            // set temp val one to isAnotherForcedMove.highestValue
                                        }
                                       
                                    }
                                }

                                if (doCalculation) {
                                    let nextStep = findSecondForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        if (nextStep.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStep.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    } else {
                                        let nextStepNoForced = findSecondMove(gameStateProp);
                                        if (nextStepNoForced.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStepNoForced.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    }
                                }
                                
                                
                            } else {
                                
                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)))
                                returnObject.forcedMove = true;

                                if (!isPromoted && !isSeventhRow) {
                                    let isForcedMove = findForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isForcedMove.forcedMove) {
                                        returnObject.highestValue = isForcedMove.highestValue;
                                        for (let j = 0; j < isForcedMove.newGameState.length; j++) {
                                            returnObject.newGameState.push(isForcedMove.newGameState[j])
                                            
                                        }
                                    }
                                    
                                }
                                
                                if (returnObject.highestValue === null) {

                                    let nextStep = findSecondForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        returnObject.highestValue = nextStep.lowestValue;
                                    } else {
                                        let nextStepNoForced = findSecondMove(gameStateProp);

                                        returnObject.highestValue = nextStepNoForced.lowestValue;
                                    }
                                }
                                
                                
                            }


                            if (opponentType === "pawn") {
                                arrayWithMovingOptions[i].hasUserPawn = true;
                            } else if (opponentType === "king") {
                                arrayWithMovingOptions[i].hasUserKing = true;
                            }
    
                            gameStateProp[key].hasAiPawn = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptions[i].hasAiPawn = false;
                            arrayWithJumpingOptions[i].hasAiKing = false;
                            arrayWithMovingOptions[i].isFree = false;
                            arrayWithJumpingOptions[i].isFree = true;
                            
                        }
    
                        
                    }
    
                }
    
            }
    
            if (gameStateProp[key].hasAiKing) {
    
                let arrayWithMovingOptionsKing;
                let arrayWithJumpingOptionsKing;
    
                if (aiPlayer === "white") {
                    arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].jumpOptionsKing;
                } else if (aiPlayer === "black") {
                    arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerBlackMoveOptions[key].jumpOptionsKing;
                }
    
                for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                    if (arrayWithMovingOptionsKing[i].hasUserPawn || arrayWithMovingOptionsKing[i].hasUserKing) {
                        let opponentTypeWhenKing;
                        if (arrayWithMovingOptionsKing[i].hasUserPawn) {
                            opponentTypeWhenKing = "pawn"
                        } else if (arrayWithMovingOptionsKing[i].hasUserKing) {
                            opponentTypeWhenKing = "king"
                        }
                        if (arrayWithJumpingOptionsKing[i].isFree) {
                            console.log("you have to jump your king from: ", key, "to square: ", arrayWithJumpingOptionsKing[i].fieldName );
                            
                            gameStateProp[key].hasAiKing = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptionsKing[i].hasUserPawn = false;
                            arrayWithMovingOptionsKing[i].hasUserKing = false;
                            arrayWithMovingOptionsKing[i].isFree = true;
                            arrayWithJumpingOptionsKing[i].hasAiKing = true;
                            arrayWithJumpingOptionsKing[i].isFree = false;
                            

                            if (returnObject.forcedMove) {
                                
                                let doCalculation = true;
                                let alternativePath = []


                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                let isAnotherForcedMoveWhenKing = findForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isAnotherForcedMoveWhenKing.forcedMove) {
                                    doCalculation = false;
                                    if (isAnotherForcedMoveWhenKing.highestValue > returnObject.highestValue) {
                                        returnObject.newGameState = alternativePath;
                                        for (let j = 0; j < isAnotherForcedMoveWhenKing.newGameState.length; j++) {
                                            returnObject.newGameState.push(isAnotherForcedMoveWhenKing.newGameState[j]);
                                        }
                                        returnObject.highestValue = isAnotherForcedMoveWhenKing.highestValue;
                                    }
                                    
                                }


                                if (doCalculation) {
                                    let nextStep = findSecondForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        if (nextStep.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStep.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    } else {
                                        let nextStepNoForced = findSecondMove(gameStateProp);
                                        if (nextStepNoForced.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStepNoForced.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    }
                                }

                               
                            } else {
                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)));
                                returnObject.forcedMove = true;

                                let isForcedMoveWhenKing = findForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isForcedMoveWhenKing.forcedMove) {
                                    returnObject.highestValue = isForcedMoveWhenKing.highestValue;
                                    for (let j = 0; j < isForcedMoveWhenKing.newGameState.length; j++) {
                                        returnObject.newGameState.push(isForcedMoveWhenKing.newGameState[j]);
                                    }

                                }


                                if (returnObject.highestValue === null) {
                                    let nextStep = findSecondForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        returnObject.highestValue = nextStep.lowestValue;
                                    } else {
                                        let nextStepNoForced = findSecondMove(gameStateProp);

                                        returnObject.highestValue = nextStepNoForced.lowestValue
                                    }
                                }
                                

                            }

                            

                            if (opponentTypeWhenKing === "pawn") {
                                arrayWithMovingOptionsKing[i].hasUserPawn = true;
                            } else if (opponentTypeWhenKing === "king") {
                                arrayWithMovingOptionsKing[i].hasUserKing = true;
                            }
    
                            gameStateProp[key].hasAiKing = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptionsKing[i].hasAiKing = false;
                            arrayWithMovingOptionsKing[i].isFree = false;
                            arrayWithJumpingOptionsKing[i].isFree = true;
                        }
                    }
    
                }
            }

            tempValStepOne = returnObject.highestValue;

        }
        
        
        
            
    }

   return returnObject;
}

let findFirstMove = (gameStateProp) => {
    
    let returnObject = {
        newGameState: [],
        highestValue: null,
    }
    
    let promotionFields;
    let isPromoted;
    let hasNoPawns = true;
    let hasNoMoves = true;

    for (const key in gameStateProp) {

        
        if (gameStateProp[key].hasAiPawn) {
            
            let arrayWithMovingOptions;
            hasNoPawns = false;

            if (aiPlayer === "white") {
                arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                promotionFields = ["B8", "D8", "F8", "H8"];
            } else if (aiPlayer === "black") {
                arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                promotionFields = ["A1", "C1", "E1", "G1"];
            }
            
            for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                if (arrayWithMovingOptions[i].isFree) {

                    hasNoMoves = false;
                    isPromoted = promotionFields.includes(arrayWithMovingOptions[i].fieldName);

                    gameStateProp[key].hasAiPawn = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptions[i].isFree = false;
                    
                    if (isPromoted) {
                        arrayWithMovingOptions[i].hasAiKing = true;
                    } else {
                        arrayWithMovingOptions[i].hasAiPawn = true;
                    }

                    //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));
                    //console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!! you moved pawn from ", key, "to square: ", arrayWithMovingOptions[i].fieldName);
                    
                    
                    let isForcedInSecond = findSecondForcedMoves(gameStateProp, "none");

                    if (isForcedInSecond.forcedMove) {
                        if (isForcedInSecond.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {

                            returnObject.newGameState = [];
                            returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)));
                            returnObject.highestValue = isForcedInSecond.lowestValue;
                        }
                    
                        
                    } else {
                        let nextMove = findSecondMove(gameStateProp);

                        if (nextMove.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {
                            returnObject.newGameState = [];
                            returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)));
                            returnObject.highestValue = nextMove.lowestValue;
                        }

                    }

                    gameStateProp[key].hasAiPawn = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptions[i].isFree = true;
                    arrayWithMovingOptions[i].hasAiPawn = false;
                    arrayWithMovingOptions[i].hasAiKing = false;
                }
            }
        }

        if (gameStateProp[key].hasAiKing) {
            
            let arrayWithMovingOptionsKing;
            hasNoPawns = false;

            if (aiPlayer === "white") {
                arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
            } else if (aiPlayer === "black") {
                arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
            }
            
            for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                if (arrayWithMovingOptionsKing[i].isFree) {

                    hasNoMoves = false;

                    gameStateProp[key].hasAiKing = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptionsKing[i].isFree = false;
                    arrayWithMovingOptionsKing[i].hasAiKing = true;
                    //console.log(" you moved king from ", key, "to square: ", arrayWithMovingOptionsKing[i].fieldName);
                    
                    let isForcedInSecondWhenKing = findSecondForcedMoves(gameStateProp, "none");

                    if (isForcedInSecondWhenKing.forcedMove) {
                        if (isForcedInSecondWhenKing.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {

                            returnObject.newGameState = [];
                            returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)));
                            returnObject.highestValue = isForcedInSecondWhenKing.lowestValue;
                        }
                    
                       
                    } else {
                        let nextMoveWhenKing = findSecondMove(gameStateProp);
                        if (nextMoveWhenKing.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {
                            returnObject.newGameState = [];
                            returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)));
                            returnObject.highestValue = nextMoveWhenKing.lowestValue;
                        }
                    }


                    gameStateProp[key].hasAiKing = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptionsKing[i].isFree = true;
                    arrayWithMovingOptionsKing[i].hasAiKing = false;
                }
            }
        }

        tempValStepOne = returnObject.highestValue;
    }

    if (hasNoPawns || hasNoMoves) {
        returnObject.highestValue = -500;
    }

    return returnObject;
}


let findSecondForcedMoves = (gameStateProp, field) => {
       
    let returnObject = {
        forcedMove: false,
        newGameState: [],
        lowestValue: null,
    }

    let promotionFields;
    let seventhRow;
    let isPromoted;
    let isSeventhRow;

    for (const key in gameStateProp) {
    
        if (field === "none" || key === field) {
    

            if (gameStateProp[key].hasUserPawn) {
                
                let arrayWithMovingOptions;
                let arrayWithJumpingOptions;

                if (userPlayer === "white") {
                    arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerWhiteMoveOptions[key].jumpOptions;
                    promotionFields = ["B8", "D8", "F8", "H8"];
                    seventhRow  = ["A7", "C7", "E7", "G7"];
                } else if (userPlayer === "black") {
                    arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerBlackMoveOptions[key].jumpOptions;
                    promotionFields = ["A1", "C1", "E1", "G1"];
                    seventhRow = ["B2", "D2", "F2", "H2"];
                }

                for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                    if (arrayWithMovingOptions[i].hasAiPawn || arrayWithMovingOptions[i].hasAiKing) {
                        let opponentType;
                        if (arrayWithMovingOptions[i].hasAiPawn) {
                            opponentType = "pawn"
                        } else if (arrayWithMovingOptions[i].hasAiKing) {
                            opponentType = "king"
                        }
                        if (arrayWithJumpingOptions[i].isFree) {
                            //console.log("user have to jump pawn from: ", key, "to square: ", arrayWithJumpingOptions[i].fieldName );

                            isPromoted = promotionFields.includes(arrayWithJumpingOptions[i].fieldName);
                            isSeventhRow = seventhRow.includes(arrayWithJumpingOptions[i].fieldName);
                            
                            gameStateProp[key].hasUserPawn = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptions[i].hasAiPawn = false;
                            arrayWithMovingOptions[i].hasAiKing = false;
                            arrayWithMovingOptions[i].isFree = true;
                            arrayWithJumpingOptions[i].isFree = false;
                            
                            if (isPromoted) {
                                arrayWithJumpingOptions[i].hasUserKing = true;
                            } else {
                                arrayWithJumpingOptions[i].hasUserPawn = true;
                            }

                            //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));

                            if (returnObject.forcedMove) {
                                
                                let doCalculation = true;
                                let alternativePath = [];                                                       

                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                if (!isPromoted && !isSeventhRow) {
                                    let isAnotherForcedMove = findSecondForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isAnotherForcedMove.forcedMove) {
                                        doCalculation = false;
                                        if (isAnotherForcedMove.lowestValue < returnObject.lowestValue) {
                                            returnObject.newGameState = alternativePath;
                                            for (let j = 0; j < isAnotherForcedMove.newGameState.length; j++) {
                                                returnObject.newGameState.push(isAnotherForcedMove.newGameState[j]);
                                            }
                                            returnObject.lowestValue = isAnotherForcedMove.lowestValue;
                                        }
                                        
                                    }
                                }

                                if (doCalculation) {
                                    let nextStep = findThirdForcedMoves(gameStateProp, "none");
                                    if (nextStep.forcedMove) {
                                        if (nextStep.highestValue < returnObject.lowestValue) {
                                            returnObject.lowestValue = nextStep.highestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    } else {
                                        let nextStepNoForced = findThirdMove(gameStateProp);
                                        if (nextStepNoForced.highestValue < returnObject.lowestValue) {
                                            returnObject.lowestValue = nextStepNoForced.highestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    }
                                }
 
                                
                            } else {

                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)))
                                returnObject.forcedMove = true;

                                

                                if (!isPromoted && !isSeventhRow) {
                                    let isForcedMove = findSecondForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isForcedMove.forcedMove) {
                                        returnObject.lowestValue = isForcedMove.lowestValue;
                                        for (let j = 0; j < isForcedMove.newGameState.length; j++) {
                                            returnObject.newGameState.push(isForcedMove.newGameState[j])
                                        }
                                    }
                                }


                                if (returnObject.lowestValue === null) {
                                    let nextStep = findThirdForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        returnObject.lowestValue = nextStep.highestValue;
                                    } else {
                                        let nextStepNoForced = findThirdMove(gameStateProp);

                                        returnObject.lowestValue = nextStepNoForced.highestValue
                                    }
                                }
                                
                                

                            }



                            if (opponentType === "pawn") {
                                arrayWithMovingOptions[i].hasAiPawn = true;
                            } else if (opponentType === "king") {
                                arrayWithMovingOptions[i].hasAiKing = true;
                            }

                            gameStateProp[key].hasUserPawn = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptions[i].hasUserPawn = false;
                            arrayWithJumpingOptions[i].hasUserKing = false;
                            arrayWithMovingOptions[i].isFree = false;
                            arrayWithJumpingOptions[i].isFree = true;

                            
                            
                        }

                        
                    }

                }

            }

            if (gameStateProp[key].hasUserKing) {

                let arrayWithMovingOptionsKing;
                let arrayWithJumpingOptionsKing;

                if (userPlayer === "white") {
                    arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].jumpOptionsKing;
                } else if (userPlayer === "black") {
                    arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerBlackMoveOptions[key].jumpOptionsKing;
                }

                for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                    if (arrayWithMovingOptionsKing[i].hasAiPawn || arrayWithMovingOptionsKing[i].hasAiKing) {
                        let opponentTypeWhenKing;
                        if (arrayWithMovingOptionsKing[i].hasAiPawn) {
                            opponentTypeWhenKing = "pawn"
                        } else if (arrayWithMovingOptionsKing[i].hasAiKing) {
                            opponentTypeWhenKing = "king"
                        }
                        if (arrayWithJumpingOptionsKing[i].isFree) {
                            //console.log("user have to jump king from: ", key, "to square: ", arrayWithJumpingOptionsKing[i].fieldName );
                            
                            gameStateProp[key].hasUserKing = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptionsKing[i].hasAiPawn = false;
                            arrayWithMovingOptionsKing[i].hasAiKing = false;
                            arrayWithMovingOptionsKing[i].isFree = true;
                            arrayWithJumpingOptionsKing[i].hasUserKing = true;
                            arrayWithJumpingOptionsKing[i].isFree = false;
                            

                            if (returnObject.forcedMove) {
                                let doCalculation = true;
                                let alternativePath = [];

                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                let isAnotherForcedMoveWhenKing = findSecondForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isAnotherForcedMoveWhenKing.forcedMove) {
                                    doCalculation = false;
                                    if (isAnotherForcedMoveWhenKing.lowestValue < returnObject.lowestValue) {
                                        returnObject.newGameState = alternativePath;
                                        for (let j = 0; j < isAnotherForcedMoveWhenKing.newGameState.length; j++) {
                                            returnObject.newGameState.push(isAnotherForcedMoveWhenKing.newGameState[j]);
                                        }
                                        returnObject.lowestValue = isAnotherForcedMoveWhenKing.lowestValue;
                                    }
                                    
                                }

                                if (doCalculation) {
                                    let nextStep = findThirdForcedMoves(gameStateProp, "none");
                                    if (nextStep.forcedMove) {
                                        if (nextStep.highestValue < returnObject.lowestValue) {
                                            returnObject.lowestValue = nextStep.highestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    } else {
                                        let nextStepNoForced = findThirdMove(gameStateProp);
                                        if (nextStepNoForced.highestValue < returnObject.lowestValue) {
                                            returnObject.lowestValue = nextStepNoForced.highestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    }
                                }
                                
                            } else {
                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)));
                                returnObject.forcedMove = true;

                                let isForcedMoveWhenKing = findSecondForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isForcedMoveWhenKing.forcedMove) {
                                    returnObject.lowestValue = isForcedMoveWhenKing.lowestValue;
                                    for (let j = 0; j < isForcedMoveWhenKing.newGameState.length; j++) {
                                        returnObject.newGameState.push(isForcedMoveWhenKing.newGameState[j]);
                                    }
                                }

                                if (returnObject.lowestValue === null) {
                                    let nextStep = findThirdForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        returnObject.lowestValue = nextStep.highestValue;
                                    } else {
                                        let nextStepNoForced = findThirdMove(gameStateProp);

                                        returnObject.lowestValue = nextStepNoForced.highestValue
                                    }
                                }
                                
                            }


                            

                            if (opponentTypeWhenKing === "pawn") {
                                arrayWithMovingOptionsKing[i].hasAiPawn = true;
                            } else if (opponentTypeWhenKing === "king") {
                                arrayWithMovingOptionsKing[i].hasAiKing = true;
                            }

                            gameStateProp[key].hasUserKing = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptionsKing[i].hasUserKing = false;
                            arrayWithMovingOptionsKing[i].isFree = false;
                            arrayWithJumpingOptionsKing[i].isFree = true;
                        }
                    }

                }
            }
        
            if (tempValStepOne != null && returnObject.lowestValue != null && returnObject.lowestValue <= tempValStepOne) {
                return returnObject;
            }

            tempValStepTwo = returnObject.lowestValue;

        }
           
    }

    return returnObject;
}

let findSecondMove = (gameStateProp) => {
    
    let returnObject = {
        newGameState: [],
        lowestValue: null,
    }
    
    let promotionFields;
    let isPromoted;
    let hasNoPawns = true;
    let hasNoMoves = true;

    for (const key in gameStateProp) {

    
        if (gameStateProp[key].hasUserPawn) {
            
            let arrayWithMovingOptions;
            hasNoPawns = false;

            if (userPlayer === "white") {
                arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                promotionFields = ["B8", "D8", "F8", "H8"];
            } else if (userPlayer === "black") {
                arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                promotionFields = ["A1", "C1", "E1", "G1"];
            }
            
            for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                if (arrayWithMovingOptions[i].isFree) {

                    hasNoMoves = false;
                    isPromoted = promotionFields.includes(arrayWithMovingOptions[i].fieldName);

                    gameStateProp[key].hasUserPawn = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptions[i].isFree = false;

                    if (isPromoted) {
                        arrayWithMovingOptions[i].hasUserKing = true;
                    } else {
                        arrayWithMovingOptions[i].hasUserPawn = true;
                    }

                    //console.log(" user moved pawn from ", key, "to square: ", arrayWithMovingOptions[i].fieldName);

                    //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));
                    
                    let isForcedInThird = findThirdForcedMoves(gameStateProp, "none");

                    if (isForcedInThird.forcedMove) {
                        if (isForcedInThird.highestValue < returnObject.lowestValue || returnObject.lowestValue === null) {
                            returnObject.lowestValue = isForcedInThird.highestValue;
                        } 
                    } else {
                        let nextMove = findThirdMove(gameStateProp);
                        if (nextMove.highestValue < returnObject.lowestValue  || returnObject.lowestValue === null) {
                            returnObject.lowestValue = nextMove.highestValue;
                        }
                    }
                    
                    gameStateProp[key].hasUserPawn = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptions[i].isFree = true;
                    arrayWithMovingOptions[i].hasUserPawn = false;
                    arrayWithMovingOptions[i].hasUserKing = false;
                }
            }
        }
        
        if (gameStateProp[key].hasUserKing) {
            
            let arrayWithMovingOptionsKing;
            hasNoPawns = false;
            
            if (userPlayer === "white") {
                arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
            } else if (userPlayer === "black") {
                arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
            }
            
            for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                if (arrayWithMovingOptionsKing[i].isFree) {
                    hasNoMoves = false;

                    gameStateProp[key].hasUserKing = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptionsKing[i].isFree = false;
                    arrayWithMovingOptionsKing[i].hasUserKing = true;
                    //console.log(" user moved king from ", key, arrayWithMovingOptionsKing[i].fieldName);

                    let isForcedInThirdWhenKing = findThirdForcedMoves(gameStateProp, "none");

                    if (isForcedInThirdWhenKing.forcedMove) {
                        if (isForcedInThirdWhenKing.highestValue < returnObject.lowestValue || returnObject.lowestValue === null) {
                            returnObject.lowestValue = isForcedInThirdWhenKing.highestValue;
                        }
                    } else {
                        let nextMoveWhenKing = findThirdMove(gameStateProp);
                        if (nextMoveWhenKing.highestValue < returnObject.lowestValue  || returnObject.lowestValue === null) {
                            returnObject.lowestValue = nextMoveWhenKing.highestValue;
                        }
                    }
                    

                    gameStateProp[key].hasUserKing = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptionsKing[i].isFree = true;
                    arrayWithMovingOptionsKing[i].hasUserKing = false;
                }
            }
        }

        if (tempValStepOne != null && returnObject.lowestValue != null && returnObject.lowestValue <= tempValStepOne) {
            return returnObject;
        }
        
        tempValStepTwo = returnObject.lowestValue;
    }

    if (hasNoPawns || hasNoMoves) {
        returnObject.lowestValue = 500;
    }

    return returnObject;
}

let findThirdForcedMoves = (gameStateProp, field) => {

    let returnObject = {
        forcedMove: false,
        newGameState: [],
        highestValue: null,
    }

    let promotionFields;
    let seventhRow;
    let isPromoted;
    let isSeventhRow;
    
    for (const key in gameStateProp) {
        
        if (field === "none" || key === field) {
            
            if (gameStateProp[key].hasAiPawn) {
                let arrayWithMovingOptions;
                let arrayWithJumpingOptions;
                
    
                if (aiPlayer === "white") {
                    arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerWhiteMoveOptions[key].jumpOptions;
                    promotionFields = ["B8", "D8", "F8", "H8"];
                    seventhRow  = ["A7", "C7", "E7", "G7"];

                } else if (aiPlayer === "black") {
                    arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerBlackMoveOptions[key].jumpOptions;
                    promotionFields = ["A1", "C1", "E1", "G1"];
                    seventhRow = ["B2", "D2", "F2", "H2"];
                }
    
                 
                for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                    if (arrayWithMovingOptions[i].hasUserPawn || arrayWithMovingOptions[i].hasUserKing) {
    
                        let opponentType;
                        if (arrayWithMovingOptions[i].hasUserPawn) {
                            opponentType = "pawn"
                        } else if (arrayWithMovingOptions[i].hasUserKing) {
                            opponentType = "king"
                        }
                        if (arrayWithJumpingOptions[i].isFree) {
                            //console.log("you have to jump your pawn from: ", key, "to square: ", arrayWithJumpingOptions[i].fieldName );
    
                            isPromoted = promotionFields.includes(arrayWithJumpingOptions[i].fieldName);
                            isSeventhRow = seventhRow.includes(arrayWithJumpingOptions[i].fieldName);
                            
                            gameStateProp[key].hasAiPawn = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptions[i].hasUserPawn = false;
                            arrayWithMovingOptions[i].hasUserKing = false;
                            arrayWithMovingOptions[i].isFree = true;
                            arrayWithJumpingOptions[i].isFree = false;
                            
                            //just for pawn part of function
                            if (isPromoted) {
                                arrayWithJumpingOptions[i].hasAiKing = true;
                            } else {
                                arrayWithJumpingOptions[i].hasAiPawn = true;
                            }

                            //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));
    
                            if (returnObject.forcedMove) {

                                let doCalculation = true;
                                let alternativePath = []


                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                if (!isPromoted && !isSeventhRow) {
                                    let isAnotherForcedMove = findThirdForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isAnotherForcedMove.forcedMove) {
                                        doCalculation = false;
                                        if (isAnotherForcedMove.highestValue > returnObject.highestValue) {
                                            returnObject.newGameState = alternativePath;
                                            for (let j = 0; j < isAnotherForcedMove.newGameState.length; j++) {
                                                returnObject.newGameState.push(isAnotherForcedMove.newGameState[j]);
                                            }
                                            returnObject.highestValue = isAnotherForcedMove.highestValue;
                                        }
                                    }
                                }
                                

                                if (doCalculation) {
                                    let nextStep = findFourthForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        if (nextStep.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStep.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    } else {
                                        let nextStepNoForced = findFourthMove(gameStateProp);
                                        if (nextStepNoForced.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStepNoForced.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    }
                                }
                                

                            } else {
                                
                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)))
                                returnObject.forcedMove = true;

                                if (!isPromoted && !isSeventhRow) {
                                    let isForcedMove = findThirdForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isForcedMove.forcedMove) {
                                        returnObject.highestValue = isForcedMove.highestValue
                                        for (let j = 0; j < isForcedMove.newGameState.length; j++) {
                                            returnObject.newGameState.push(isForcedMove.newGameState[j])
                                        }
                                    }
                                }

                                if (returnObject.highestValue === null) {

                                    let nextStep = findFourthForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        returnObject.highestValue = nextStep.lowestValue;
                                    } else {
                                        let nextStepNoForced = findFourthMove(gameStateProp);

                                        returnObject.highestValue = nextStepNoForced.lowestValue
                                    }
                                }
                                
                                
                            }
                            
                            
                                
                            if (opponentType === "pawn") {
                                arrayWithMovingOptions[i].hasUserPawn = true;
                            } else if (opponentType === "king") {
                                arrayWithMovingOptions[i].hasUserKing = true;
                            }
    
                            gameStateProp[key].hasAiPawn = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptions[i].hasAiPawn = false;
                            arrayWithJumpingOptions[i].hasAiKing = false;
                            arrayWithMovingOptions[i].isFree = false;
                            arrayWithJumpingOptions[i].isFree = true;
                            
                        }
    
                        
                    }
    
                }
    
            }
    
            if (gameStateProp[key].hasAiKing) {
    
                let arrayWithMovingOptionsKing;
                let arrayWithJumpingOptionsKing;
    
                if (aiPlayer === "white") {
                    arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].jumpOptionsKing;
                } else if (aiPlayer === "black") {
                    arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerBlackMoveOptions[key].jumpOptionsKing;
                }
    
                for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                    if (arrayWithMovingOptionsKing[i].hasUserPawn || arrayWithMovingOptionsKing[i].hasUserKing) {
                        let opponentTypeWhenKing;
                        if (arrayWithMovingOptionsKing[i].hasUserPawn) {
                            opponentTypeWhenKing = "pawn"
                        } else if (arrayWithMovingOptionsKing[i].hasUserKing) {
                            opponentTypeWhenKing = "king"
                        }
                        if (arrayWithJumpingOptionsKing[i].isFree) {
                            //console.log("you have to jump your king from: ", key, "to square: ", arrayWithJumpingOptionsKing[i].fieldName );
                            
                            gameStateProp[key].hasAiKing = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptionsKing[i].hasUserPawn = false;
                            arrayWithMovingOptionsKing[i].hasUserKing = false;
                            arrayWithMovingOptionsKing[i].isFree = true;
                            arrayWithJumpingOptionsKing[i].hasAiKing = true;
                            arrayWithJumpingOptionsKing[i].isFree = false;
                            

                            if (returnObject.forcedMove) {
                                let doCalculation = true;
                                let alternativePath = [];

                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                let isAnotherForcedMoveWhenKing = findThirdForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isAnotherForcedMoveWhenKing.forcedMove) {
                                    doCalculation = false;
                                    if (isAnotherForcedMoveWhenKing.highestValue > returnObject.highestValue) {
                                        returnObject.newGameState = alternativePath;
                                        for (let j = 0; j < isAnotherForcedMoveWhenKing.newGameState.length; j++) {
                                            returnObject.newGameState.push(isAnotherForcedMoveWhenKing.newGameState[j]);
                                        }
                                        returnObject.highestValue = isAnotherForcedMoveWhenKing.highestValue;
                                    }
                                    
                                }

                                if (doCalculation) {
                                    let nextStep = findFourthForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        if (nextStep.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStep.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    } else {
                                        let nextStepNoForced = findFourthMove(gameStateProp);
                                        if (nextStepNoForced.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStepNoForced.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    }
                                }

                            } else {
                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)));
                                returnObject.forcedMove = true;

                                let isForcedMoveWhenKing = findThirdForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isForcedMoveWhenKing.forcedMove) {
                                    returnObject.highestValue = isForcedMoveWhenKing.highestValue;
                                    for (let j = 0; j < isForcedMoveWhenKing.newGameState.length; j++) {
                                        returnObject.newGameState.push(isForcedMoveWhenKing.newGameState[j]);
                                    }
                                }

                                if (returnObject.highestValue === null) {

                                    let nextStep = findFourthForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        returnObject.highestValue = nextStep.lowestValue;
                                    } else {
                                        let nextStepNoForced = findFourthMove(gameStateProp);

                                        returnObject.highestValue = nextStepNoForced.lowestValue
                                    }
                                }
                            }
                            

                            if (opponentTypeWhenKing === "pawn") {
                                arrayWithMovingOptionsKing[i].hasUserPawn = true;
                            } else if (opponentTypeWhenKing === "king") {
                                arrayWithMovingOptionsKing[i].hasUserKing = true;
                            }
    
                            gameStateProp[key].hasAiKing = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptionsKing[i].hasAiKing = false;
                            arrayWithMovingOptionsKing[i].isFree = false;
                            arrayWithJumpingOptionsKing[i].isFree = true;
                        }
                    }
    
                }
            }

            if (tempValStepTwo != null && returnObject.highestValue != null && returnObject.highestValue >= tempValStepTwo) {
                return returnObject;
            }

            tempValStepThree = returnObject.highestValue;
        }
        
        
        
            
    }

   return returnObject;

}

let findThirdMove = (gameStateProp) => {

    let returnObject = {
        newGameState: [],
        highestValue: null,
    }
    
    let promotionFields;
    let isPromoted;
    let hasNoPawns = true;
    let hasNoMoves = true;

    for (const key in gameStateProp) {

        
        if (gameStateProp[key].hasAiPawn) {
            
            let arrayWithMovingOptions;
            hasNoPawns = false;

            if (aiPlayer === "white") {
                arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                promotionFields = ["B8", "D8", "F8", "H8"];
            } else if (aiPlayer === "black") {
                arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                promotionFields = ["A1", "C1", "E1", "G1"];
            }
            
            for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                if (arrayWithMovingOptions[i].isFree) {

                    hasNoMoves = false;
                    isPromoted = promotionFields.includes(arrayWithMovingOptions[i].fieldName);

                    gameStateProp[key].hasAiPawn = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptions[i].isFree = false;
                    
                    if (isPromoted) {
                        arrayWithMovingOptions[i].hasAiKing = true;
                    } else {
                        arrayWithMovingOptions[i].hasAiPawn = true;
                    }

                    //console.log(" you moved pawn from ", key, "to square: ", arrayWithMovingOptions[i].fieldName);

                    //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));
                    
                    
                    let isForcedInFourth = findFourthForcedMoves(gameStateProp, "none");

                    if (isForcedInFourth.forcedMove) {
                        if (isForcedInFourth.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {
                            returnObject.highestValue = isForcedInFourth.lowestValue;
                        }
                    
                        
                    } else {
                        let nextMove = findFourthMove(gameStateProp);
                        if (nextMove.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {
                            returnObject.highestValue = nextMove.lowestValue;
                        }
                    }

                    gameStateProp[key].hasAiPawn = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptions[i].isFree = true;
                    arrayWithMovingOptions[i].hasAiPawn = false;
                    arrayWithMovingOptions[i].hasAiKing = false;
                }
            }
        }

        if (gameStateProp[key].hasAiKing) {
            
            let arrayWithMovingOptionsKing;
            hasNoPawns = false;

            if (aiPlayer === "white") {
                arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
            } else if (aiPlayer === "black") {
                arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
            }
            
            for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                if (arrayWithMovingOptionsKing[i].isFree) {
                    hasNoMoves = false;
                    gameStateProp[key].hasAiKing = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptionsKing[i].isFree = false;
                    arrayWithMovingOptionsKing[i].hasAiKing = true;
                    //console.log(" you moved king from ", key, "to square: ", arrayWithMovingOptionsKing[i].fieldName);
                    
                    let isForcedInFourthWhenKing = findFourthForcedMoves(gameStateProp, "none");

                    if (isForcedInFourthWhenKing.forcedMove) {
                        if (isForcedInFourthWhenKing.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {
                            returnObject.highestValue = isForcedInFourthWhenKing.lowestValue;
                        }
                    
                       
                    } else {
                        let nextMoveWhenKing = findFourthMove(gameStateProp);
                        if (nextMoveWhenKing.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {
                            returnObject.highestValue = nextMoveWhenKing.lowestValue;
                        }
                    }


                    gameStateProp[key].hasAiKing = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptionsKing[i].isFree = true;
                    arrayWithMovingOptionsKing[i].hasAiKing = false;
                }
            }
        }

        if (tempValStepTwo != null && returnObject.highestValue != null && returnObject.highestValue >= tempValStepTwo) {
            return returnObject;
        }

        tempValStepThree = returnObject.highestValue;
    }

    if (hasNoPawns || hasNoMoves) {
        returnObject.highestValue = -500;
    }

    return returnObject;
}

let findFourthForcedMoves = (gameStateProp, field) => {

    let returnObject = {
        forcedMove: false,
        newGameState: [],
        lowestValue: null,
    }

    let promotionFields;
    let seventhRow;
    let isPromoted;
    let isSeventhRow;

    for (const key in gameStateProp) {
    
        if (field === "none" || key === field) {
    

            if (gameStateProp[key].hasUserPawn) {
                
                let arrayWithMovingOptions;
                let arrayWithJumpingOptions;

                if (userPlayer === "white") {
                    arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerWhiteMoveOptions[key].jumpOptions;
                    promotionFields = ["B8", "D8", "F8", "H8"];
                    seventhRow  = ["A7", "C7", "E7", "G7"];
                } else if (userPlayer === "black") {
                    arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerBlackMoveOptions[key].jumpOptions;
                    promotionFields = ["A1", "C1", "E1", "G1"];
                    seventhRow = ["B2", "D2", "F2", "H2"];
                }

                for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                    if (arrayWithMovingOptions[i].hasAiPawn || arrayWithMovingOptions[i].hasAiKing) {
                        let opponentType;
                        if (arrayWithMovingOptions[i].hasAiPawn) {
                            opponentType = "pawn"
                        } else if (arrayWithMovingOptions[i].hasAiKing) {
                            opponentType = "king"
                        }
                        if (arrayWithJumpingOptions[i].isFree) {
                            //console.log("user have to jump pawn from: ", key, "to square: ", arrayWithJumpingOptions[i].fieldName );

                            isPromoted = promotionFields.includes(arrayWithJumpingOptions[i].fieldName);
                            isSeventhRow = seventhRow.includes(arrayWithJumpingOptions[i].fieldName);
                            
                            gameStateProp[key].hasUserPawn = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptions[i].hasAiPawn = false;
                            arrayWithMovingOptions[i].hasAiKing = false;
                            arrayWithMovingOptions[i].isFree = true;
                            arrayWithJumpingOptions[i].isFree = false;
                            
                            if (isPromoted) {
                                arrayWithJumpingOptions[i].hasUserKing = true;
                            } else {
                                arrayWithJumpingOptions[i].hasUserPawn = true;
                            }

                            //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));

                            if (returnObject.forcedMove) {

                                let doCalculation = true;
                                let alternativePath = [];


                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                if (!isPromoted && !isSeventhRow) {
                                    let isAnotherForcedMove = findFourthForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isAnotherForcedMove.forcedMove) {
                                        doCalculation = false;
                                        if (isAnotherForcedMove.lowestValue < returnObject.lowestValue) {
                                            returnObject.newGameState = alternativePath;
                                            for (let j = 0; j < isAnotherForcedMove.newGameState.length; j++) {
                                                returnObject.newGameState.push(isAnotherForcedMove.newGameState[j]);
                                            }
                                            returnObject.lowestValue = isAnotherForcedMove.lowestValue
                                        }
                                        
                                    }
                                }


                                if (doCalculation) {
                                    let nextStep = findFifthForcedMoves(gameStateProp, "none");
                                    if (nextStep.forcedMove) {
                                        if (nextStep.highestValue < returnObject.lowestValue) {
                                            returnObject.lowestValue = nextStep.highestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    } else {
                                        let nextStepNoForced = findFifthMove(gameStateProp);
                                        if (nextStepNoForced.highestValue < returnObject.lowestValue) {
                                            returnObject.lowestValue = nextStepNoForced.highestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    }
                                }


                                
                            } else {

                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)))
                                returnObject.forcedMove = true;

                                

                                if (!isPromoted && !isSeventhRow) {
                                    let isForcedMove = findFourthForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isForcedMove.forcedMove) {
                                        returnObject.lowestValue = isForcedMove.lowestValue;
                                        for (let j = 0; j < isForcedMove.newGameState.length; j++) {
                                            returnObject.newGameState.push(isForcedMove.newGameState[j])
                                        }
                                    }
                                }



                                if (returnObject.lowestValue === null) {

                                    let nextStep = findFifthForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        returnObject.lowestValue = nextStep.highestValue;
                                    } else {
                                        let nextStepNoForced = findFifthMove(gameStateProp);

                                        returnObject.lowestValue = nextStepNoForced.highestValue
                                    }
                                }
                                

                            }



                            if (opponentType === "pawn") {
                                arrayWithMovingOptions[i].hasAiPawn = true;
                            } else if (opponentType === "king") {
                                arrayWithMovingOptions[i].hasAiKing = true;
                            }

                            gameStateProp[key].hasUserPawn = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptions[i].hasUserPawn = false;
                            arrayWithJumpingOptions[i].hasUserKing = false;
                            arrayWithMovingOptions[i].isFree = false;
                            arrayWithJumpingOptions[i].isFree = true;

                            
                            
                        }

                        
                    }

                }

            }

            if (gameStateProp[key].hasUserKing) {

                let arrayWithMovingOptionsKing;
                let arrayWithJumpingOptionsKing;

                if (userPlayer === "white") {
                    arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].jumpOptionsKing;
                } else if (userPlayer === "black") {
                    arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerBlackMoveOptions[key].jumpOptionsKing;
                }

                for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                    if (arrayWithMovingOptionsKing[i].hasAiPawn || arrayWithMovingOptionsKing[i].hasAiKing) {
                        let opponentTypeWhenKing;
                        if (arrayWithMovingOptionsKing[i].hasAiPawn) {
                            opponentTypeWhenKing = "pawn"
                        } else if (arrayWithMovingOptionsKing[i].hasAiKing) {
                            opponentTypeWhenKing = "king"
                        }
                        if (arrayWithJumpingOptionsKing[i].isFree) {
                            //console.log("user have to jump king from: ", key, "to square: ", arrayWithJumpingOptionsKing[i].fieldName );
                            
                            gameStateProp[key].hasUserKing = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptionsKing[i].hasAiPawn = false;
                            arrayWithMovingOptionsKing[i].hasAiKing = false;
                            arrayWithMovingOptionsKing[i].isFree = true;
                            arrayWithJumpingOptionsKing[i].hasUserKing = true;
                            arrayWithJumpingOptionsKing[i].isFree = false;
                            

                            if (returnObject.forcedMove) {
                                let doCalculation = true;
                                let alternativePath = [];
                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                let isAnotherForcedMoveWhenKing = findFourthForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isAnotherForcedMoveWhenKing.forcedMove) {
                                    doCalculation = false;
                                    if (isAnotherForcedMoveWhenKing.lowestValue < returnObject.lowestValue) {
                                        returnObject.newGameState = alternativePath;
                                        for (let j = 0; j < isAnotherForcedMoveWhenKing.newGameState.length; j++) {
                                            returnObject.newGameState.push(isAnotherForcedMoveWhenKing.newGameState[j]);
                                        }
                                        returnObject.lowestValue = isAnotherForcedMoveWhenKing.lowestValue;
                                    }
                                    
                                }

                                if (doCalculation) {
                                    let nextStep = findFifthForcedMoves(gameStateProp, "none");
                                    if (nextStep.forcedMove) {
                                        if (nextStep.highestValue < returnObject.lowestValue) {
                                            returnObject.lowestValue = nextStep.highestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    } else {
                                        let nextStepNoForced = findFifthMove(gameStateProp);
                                        if (nextStepNoForced.highestValue < returnObject.lowestValue) {
                                            returnObject.lowestValue = nextStepNoForced.highestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    }
                                }

                            } else {
                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)));
                                returnObject.forcedMove = true;

                                let isForcedMoveWhenKing = findFourthForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isForcedMoveWhenKing.forcedMove) {
                                    returnObject.lowestValue = isForcedMoveWhenKing.lowestValue;
                                    for (let j = 0; j < isForcedMoveWhenKing.newGameState.length; j++) {
                                        returnObject.newGameState.push(isForcedMoveWhenKing.newGameState[j]);
                                    }
                                }


                                if (returnObject.lowestValue === null) {

                                    let nextStep = findFifthForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        returnObject.lowestValue = nextStep.highestValue;
                                    } else {
                                        let nextStepNoForced = findFifthMove(gameStateProp);

                                        returnObject.lowestValue = nextStepNoForced.highestValue
                                    }
                                }
                                
                            }


                            

                            if (opponentTypeWhenKing === "pawn") {
                                arrayWithMovingOptionsKing[i].hasAiPawn = true;
                            } else if (opponentTypeWhenKing === "king") {
                                arrayWithMovingOptionsKing[i].hasAiKing = true;
                            }

                            gameStateProp[key].hasUserKing = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptionsKing[i].hasUserKing = false;
                            arrayWithMovingOptionsKing[i].isFree = false;
                            arrayWithJumpingOptionsKing[i].isFree = true;
                        }
                    }

                }
            }

            if (tempValStepThree != null && returnObject.lowestValue != null && returnObject.lowestValue <= tempValStepThree) {
                return returnObject;
            }

            tempValStepFour = returnObject.lowestValue;
        
        }
            
    }


    return returnObject;
}

let findFourthMove = (gameStateProp) => {
    let returnObject = {
        newGameState: [],
        lowestValue: null,
    }
    
    let promotionFields;
    let isPromoted;
    let hasNoPawns = true;
    let hasNoMoves = true;

    for (const key in gameStateProp) {

    
        if (gameStateProp[key].hasUserPawn) {
            
            let arrayWithMovingOptions;
            hasNoPawns = false;

            if (userPlayer === "white") {
                arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                promotionFields = ["B8", "D8", "F8", "H8"];
            } else if (userPlayer === "black") {
                arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                promotionFields = ["A1", "C1", "E1", "G1"];
            }
            
            for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                if (arrayWithMovingOptions[i].isFree) {

                    isPromoted = promotionFields.includes(arrayWithMovingOptions[i].fieldName);
                    hasNoMoves = false;

                    gameStateProp[key].hasUserPawn = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptions[i].isFree = false;

                    if (isPromoted) {
                        arrayWithMovingOptions[i].hasUserKing = true;
                    } else {
                        arrayWithMovingOptions[i].hasUserPawn = true;
                    }

                    //console.log(" user moved pawn from ", key, "to square: ", arrayWithMovingOptions[i].fieldName);

                    //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));
                    
                    let isForcedInFifth = findFifthForcedMoves(gameStateProp, "none");

                    if (isForcedInFifth.forcedMove) {
                        if (isForcedInFifth.highestValue < returnObject.lowestValue || returnObject.lowestValue === null) {
                            returnObject.lowestValue = isForcedInFifth.highestValue;
                        } 
                    } else {
                        let nextMove = findFifthMove(gameStateProp);
                        if (nextMove.highestValue < returnObject.lowestValue  || returnObject.lowestValue === null) {
                            returnObject.lowestValue = nextMove.highestValue;
                        }
                    }
                    
                    gameStateProp[key].hasUserPawn = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptions[i].isFree = true;
                    arrayWithMovingOptions[i].hasUserPawn = false;
                    arrayWithMovingOptions[i].hasUserKing = false;
                }
            }
        }
        
        if (gameStateProp[key].hasUserKing) {
            
            let arrayWithMovingOptionsKing;
            hasNoPawns = false;
            
            if (userPlayer === "white") {
                arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
            } else if (userPlayer === "black") {
                arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
            }
            
            for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                if (arrayWithMovingOptionsKing[i].isFree) {
                    hasNoMoves = false;
                    gameStateProp[key].hasUserKing = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptionsKing[i].isFree = false;
                    arrayWithMovingOptionsKing[i].hasUserKing = true;
                    //console.log(" user moved king from ", key, arrayWithMovingOptionsKing[i].fieldName);

                    let isForcedInFifthWhenKing = findFifthForcedMoves(gameStateProp, "none");

                    if (isForcedInFifthWhenKing.forcedMove) {
                        if (isForcedInFifthWhenKing.highestValue < returnObject.lowestValue || returnObject.lowestValue === null) {
                            returnObject.lowestValue = isForcedInFifthWhenKing.highestValue;
                        }
                    } else {
                        let nextMoveWhenKing = findFifthMove(gameStateProp);
                        if (nextMoveWhenKing.highestValue < returnObject.lowestValue  || returnObject.lowestValue === null) {
                            returnObject.lowestValue = nextMoveWhenKing.highestValue;
                        }
                    }
                    

                    gameStateProp[key].hasUserKing = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptionsKing[i].isFree = true;
                    arrayWithMovingOptionsKing[i].hasUserKing = false;
                }
            }
        }

        if (tempValStepThree != null && returnObject.lowestValue != null && returnObject.lowestValue <= tempValStepThree) {
            return returnObject;
        }

        tempValStepFour = returnObject.lowestValue;
    }

    if (hasNoPawns || hasNoMoves) {
        returnObject.lowestValue = 500;
    }

    return returnObject;
}

let findFifthForcedMoves = (gameStateProp, field) => {

    let returnObject = {
        forcedMove: false,
        newGameState: [],
        highestValue: null,
    }

    let promotionFields;
    let seventhRow;
    let isPromoted;
    let isSeventhRow;
    
    for (const key in gameStateProp) {
        
        if (field === "none" || key === field) {
            
            if (gameStateProp[key].hasAiPawn) {
                let arrayWithMovingOptions;
                let arrayWithJumpingOptions;
                
    
                if (aiPlayer === "white") {
                    arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerWhiteMoveOptions[key].jumpOptions;
                    promotionFields = ["B8", "D8", "F8", "H8"];
                    seventhRow  = ["A7", "C7", "E7", "G7"];

                } else if (aiPlayer === "black") {
                    arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerBlackMoveOptions[key].jumpOptions;
                    promotionFields = ["A1", "C1", "E1", "G1"];
                    seventhRow = ["B2", "D2", "F2", "H2"];
                }
    
                 
                for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                    if (arrayWithMovingOptions[i].hasUserPawn || arrayWithMovingOptions[i].hasUserKing) {
    
                        let opponentType;
                        if (arrayWithMovingOptions[i].hasUserPawn) {
                            opponentType = "pawn"
                        } else if (arrayWithMovingOptions[i].hasUserKing) {
                            opponentType = "king"
                        }
                        if (arrayWithJumpingOptions[i].isFree) {
                            //console.log("you have to jump your pawn from: ", key, "to square: ", arrayWithJumpingOptions[i].fieldName );
    
                            isPromoted = promotionFields.includes(arrayWithJumpingOptions[i].fieldName);
                            isSeventhRow = seventhRow.includes(arrayWithJumpingOptions[i].fieldName);
                            
                            gameStateProp[key].hasAiPawn = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptions[i].hasUserPawn = false;
                            arrayWithMovingOptions[i].hasUserKing = false;
                            arrayWithMovingOptions[i].isFree = true;
                            arrayWithJumpingOptions[i].isFree = false;
                            
                            //just for pawn part of function
                            if (isPromoted) {
                                arrayWithJumpingOptions[i].hasAiKing = true;
                            } else {
                                arrayWithJumpingOptions[i].hasAiPawn = true;
                            }

                            //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));
    
                            if (returnObject.forcedMove) {

                                let doCalculation = true;
                                let alternativePath = [];


                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                if (!isPromoted && !isSeventhRow) {
                                    let isAnotherForcedMove = findFifthForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isAnotherForcedMove.forcedMove) {
                                        doCalculation = false;
                                        if (isAnotherForcedMove.highestValue > returnObject.highestValue) {
                                            returnObject.newGameState = alternativePath;
                                            for (let j = 0; j < isAnotherForcedMove.newGameState.length; j++) {
                                                returnObject.newGameState.push(isAnotherForcedMove.newGameState[j]);
                                            }
                                            returnObject.highestValue = isAnotherForcedMove.highestValue;
                                        }
                                        
                                    }
                                }
                                
                                if (doCalculation) {
                                    let nextStep = findSixthForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        if (nextStep.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStep.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    } else {
                                        let nextStepNoForced = findSixthMove(gameStateProp);
                                        if (nextStepNoForced.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStepNoForced.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    }
                                }


                            } else {
                                
                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)))
                                returnObject.forcedMove = true;

                                if (!isPromoted && !isSeventhRow) {
                                    let isForcedMove = findFifthForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isForcedMove.forcedMove) {
                                        returnObject.highestValue = isForcedMove.highestValue
                                        for (let j = 0; j < isForcedMove.newGameState.length; j++) {
                                            returnObject.newGameState.push(isForcedMove.newGameState[j])
                                        }
                                    }
                                }


                                if (returnObject.highestValue === null) {

                                    let nextStep = findSixthForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        returnObject.highestValue = nextStep.lowestValue;
                                    } else {
                                        let nextStepNoForced = findSixthMove(gameStateProp);

                                        returnObject.highestValue = nextStepNoForced.lowestValue
                                    }
                                }

                                
                                
                            }
                            
                            
                                
                            if (opponentType === "pawn") {
                                arrayWithMovingOptions[i].hasUserPawn = true;
                            } else if (opponentType === "king") {
                                arrayWithMovingOptions[i].hasUserKing = true;
                            }
    
                            gameStateProp[key].hasAiPawn = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptions[i].hasAiPawn = false;
                            arrayWithJumpingOptions[i].hasAiKing = false;
                            arrayWithMovingOptions[i].isFree = false;
                            arrayWithJumpingOptions[i].isFree = true;
                            
                        }
    
                        
                    }
    
                }
    
            }
    
            if (gameStateProp[key].hasAiKing) {
    
                let arrayWithMovingOptionsKing;
                let arrayWithJumpingOptionsKing;
    
                if (aiPlayer === "white") {
                    arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].jumpOptionsKing;
                } else if (aiPlayer === "black") {
                    arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerBlackMoveOptions[key].jumpOptionsKing;
                }
    
                for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                    if (arrayWithMovingOptionsKing[i].hasUserPawn || arrayWithMovingOptionsKing[i].hasUserKing) {
                        let opponentTypeWhenKing;
                        if (arrayWithMovingOptionsKing[i].hasUserPawn) {
                            opponentTypeWhenKing = "pawn"
                        } else if (arrayWithMovingOptionsKing[i].hasUserKing) {
                            opponentTypeWhenKing = "king"
                        }
                        if (arrayWithJumpingOptionsKing[i].isFree) {
                            //console.log("you have to jump your king from: ", key, "to square: ", arrayWithJumpingOptionsKing[i].fieldName );
                            
                            gameStateProp[key].hasAiKing = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptionsKing[i].hasUserPawn = false;
                            arrayWithMovingOptionsKing[i].hasUserKing = false;
                            arrayWithMovingOptionsKing[i].isFree = true;
                            arrayWithJumpingOptionsKing[i].hasAiKing = true;
                            arrayWithJumpingOptionsKing[i].isFree = false;
                            

                            if (returnObject.forcedMove) {
                                let doCalculation = true;
                                let alternativePath = [];
                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                let isAnotherForcedMoveWhenKing = findFifthForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isAnotherForcedMoveWhenKing.forcedMove) {
                                    doCalculation = false;
                                    if (isAnotherForcedMoveWhenKing.highestValue > returnObject.highestValue) {
                                        returnObject.newGameState = alternativePath;
                                        for (let j = 0; j < isAnotherForcedMoveWhenKing.newGameState.length; j++) {
                                            returnObject.newGameState.push(isAnotherForcedMoveWhenKing.newGameState[j]);
                                        }
                                        returnObject.highestValue = isAnotherForcedMoveWhenKing.highestValue;
                                    }
                                    
                                }

                                if (doCalculation) {
                                    let nextStep = findSixthForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        if (nextStep.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStep.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    } else {
                                        let nextStepNoForced = findSixthMove(gameStateProp);
                                        if (nextStepNoForced.lowestValue > returnObject.highestValue) {
                                            returnObject.highestValue = nextStepNoForced.lowestValue;
                                            returnObject.newGameState = alternativePath;
                                        }
                                    }
                                }
                            } else {
                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)));
                                returnObject.forcedMove = true;

                                let isForcedMoveWhenKing = findFifthForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isForcedMoveWhenKing.forcedMove) {
                                    returnObject.highestValue = isForcedMoveWhenKing.highestValue;
                                    for (let j = 0; j < isForcedMoveWhenKing.newGameState.length; j++) {
                                        returnObject.newGameState.push(isForcedMoveWhenKing.newGameState[j]);
                                    }
                                }

                                if (returnObject.highestValue === null) {

                                    let nextStep = findSixthForcedMoves(gameStateProp, "none");

                                    if (nextStep.forcedMove) {
                                        returnObject.highestValue = nextStep.lowestValue;
                                    } else {
                                        let nextStepNoForced = findSixthMove(gameStateProp);

                                        returnObject.highestValue = nextStepNoForced.lowestValue
                                    }
                                }

                            }

                            

                            if (opponentTypeWhenKing === "pawn") {
                                arrayWithMovingOptionsKing[i].hasUserPawn = true;
                            } else if (opponentTypeWhenKing === "king") {
                                arrayWithMovingOptionsKing[i].hasUserKing = true;
                            }
    
                            gameStateProp[key].hasAiKing = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptionsKing[i].hasAiKing = false;
                            arrayWithMovingOptionsKing[i].isFree = false;
                            arrayWithJumpingOptionsKing[i].isFree = true;
                        }
                    }
    
                }
            }


            if (tempValStepFour != null && returnObject.highestValue != null && returnObject.highestValue >= tempValStepFour) {
                return returnObject;
            }

            tempValStepFive = returnObject.highestValue;
        }
        
        
        
            
    }

   return returnObject;
}

let findFifthMove = (gameStateProp) => {

    let returnObject = {
        newGameState: [],
        highestValue: null,
    }
    
    let promotionFields;
    let isPromoted;
    let hasNoPawns = true;
    let hasNoMoves = true;

    for (const key in gameStateProp) {

        
        if (gameStateProp[key].hasAiPawn) {
            
            let arrayWithMovingOptions;
            hasNoPawns = false;

            if (aiPlayer === "white") {
                arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                promotionFields = ["B8", "D8", "F8", "H8"];
            } else if (aiPlayer === "black") {
                arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                promotionFields = ["A1", "C1", "E1", "G1"];
            }
            
            for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                if (arrayWithMovingOptions[i].isFree) {

                    hasNoMoves = false;
                    isPromoted = promotionFields.includes(arrayWithMovingOptions[i].fieldName);

                    gameStateProp[key].hasAiPawn = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptions[i].isFree = false;
                    
                    if (isPromoted) {
                        arrayWithMovingOptions[i].hasAiKing = true;
                    } else {
                        arrayWithMovingOptions[i].hasAiPawn = true;
                    }

                    //console.log(" you moved pawn from ", key, "to square: ", arrayWithMovingOptions[i].fieldName);

                    //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));
                    

                    
                    
                    let isForcedInSixth = findSixthForcedMoves(gameStateProp, "none");

                    if (isForcedInSixth.forcedMove) {
                        if (isForcedInSixth.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {
                            returnObject.highestValue = isForcedInSixth.lowestValue;
                        }
                    
                        
                    } else {
                        let nextMove = findSixthMove(gameStateProp);
                        if (nextMove.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {
                            returnObject.highestValue = nextMove.lowestValue;
                        }
                    }

                    gameStateProp[key].hasAiPawn = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptions[i].isFree = true;
                    arrayWithMovingOptions[i].hasAiPawn = false;
                    arrayWithMovingOptions[i].hasAiKing = false;
                }
            }
        }

        if (gameStateProp[key].hasAiKing) {
            
            let arrayWithMovingOptionsKing;
            hasNoPawns = false;

            if (aiPlayer === "white") {
                arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
            } else if (aiPlayer === "black") {
                arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
            }
            
            for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                if (arrayWithMovingOptionsKing[i].isFree) {
                    hasNoMoves = false;
                    gameStateProp[key].hasAiKing = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptionsKing[i].isFree = false;
                    arrayWithMovingOptionsKing[i].hasAiKing = true;
                    //console.log(" you moved king from ", key, "to square: ", arrayWithMovingOptionsKing[i].fieldName);
                    
                    let isForcedInSixthWhenKing = findSixthForcedMoves(gameStateProp, "none");

                    if (isForcedInSixthWhenKing.forcedMove) {
                        if (isForcedInSixthWhenKing.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {
                            returnObject.highestValue = isForcedInSixthWhenKing.lowestValue;
                        }
                    
                       
                    } else {
                        let nextMoveWhenKing = findSixthMove(gameStateProp);
                        if (nextMoveWhenKing.lowestValue > returnObject.highestValue || returnObject.highestValue === null) {
                            returnObject.highestValue = nextMoveWhenKing.lowestValue;
                        }
                    }


                    gameStateProp[key].hasAiKing = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptionsKing[i].isFree = true;
                    arrayWithMovingOptionsKing[i].hasAiKing = false;
                }
            }
        }

        if (tempValStepFour != null && returnObject.highestValue != null && returnObject.highestValue >= tempValStepFour) {
            return returnObject;
        }

        tempValStepFive = returnObject.highestValue;
    }

    if (hasNoPawns || hasNoMoves) {
        returnObject.highestValue = -500;
    }

    return returnObject;
}

let findSixthForcedMoves = (gameStateProp, field) => {

    
    let returnObject = {
        forcedMove: false,
        newGameState: [],
        lowestValue: null,
    }

    let promotionFields;
    let seventhRow;
    let isPromoted;
    let isSeventhRow;
    let secondResult;

    for (const key in gameStateProp) {
    
        if (field === "none" || key === field) {
    

            if (gameStateProp[key].hasUserPawn) {
                
                let arrayWithMovingOptions;
                let arrayWithJumpingOptions;

                if (userPlayer === "white") {
                    arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerWhiteMoveOptions[key].jumpOptions;
                    promotionFields = ["B8", "D8", "F8", "H8"];
                    seventhRow  = ["A7", "C7", "E7", "G7"];
                } else if (userPlayer === "black") {
                    arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                    arrayWithJumpingOptions = gameStateProp.playerBlackMoveOptions[key].jumpOptions;
                    promotionFields = ["A1", "C1", "E1", "G1"];
                    seventhRow = ["B2", "D2", "F2", "H2"];
                }

                for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                    if (arrayWithMovingOptions[i].hasAiPawn || arrayWithMovingOptions[i].hasAiKing) {
                        let opponentType;
                        if (arrayWithMovingOptions[i].hasAiPawn) {
                            opponentType = "pawn"
                        } else if (arrayWithMovingOptions[i].hasAiKing) {
                            opponentType = "king"
                        }
                        if (arrayWithJumpingOptions[i].isFree) {
                            //console.log("user have to jump pawn from: ", key, "to square: ", arrayWithJumpingOptions[i].fieldName );

                            isPromoted = promotionFields.includes(arrayWithJumpingOptions[i].fieldName);
                            isSeventhRow = seventhRow.includes(arrayWithJumpingOptions[i].fieldName);
                            
                            gameStateProp[key].hasUserPawn = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptions[i].hasAiPawn = false;
                            arrayWithMovingOptions[i].hasAiKing = false;
                            arrayWithMovingOptions[i].isFree = true;
                            arrayWithJumpingOptions[i].isFree = false;
                            
                            if (isPromoted) {
                                arrayWithJumpingOptions[i].hasUserKing = true;
                            } else {
                                arrayWithJumpingOptions[i].hasUserPawn = true;
                            }

                            //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));



                            if (returnObject.forcedMove) {
                                
                                let doCalculation = true;
                                let alternativePath = [];

                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                if (!isPromoted && !isSeventhRow) {
                                    let isAnotherForcedMove = findSixthForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isAnotherForcedMove.forcedMove) {
                                        doCalculation = false;
                                        if (isAnotherForcedMove.lowestValue < returnObject.lowestValue) {
                                            returnObject.newGameState = alternativePath;
                                            for (let j = 0; j < isAnotherForcedMove.newGameState.length; j++) {
                                                returnObject.newGameState.push(isAnotherForcedMove.newGameState[j]);
                                            }
                                            returnObject.lowestValue = isAnotherForcedMove.lowestValue;
                                        }
                                        
                                    }
                                }


                                if (doCalculation) {

                                    calculateAiResult(aiPlayer, gameStateProp);
                                    calculateUserResult(userPlayer, gameStateProp);

                                    secondResult = aiResult - userResult;

                                    if (secondResult < returnObject.lowestValue) {
                                        returnObject.lowestValue = secondResult;
                                        returnObject.newGameState = alternativePath;
                                    }
                                }
                                
                               
                                
                                
                            } else {

                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)))
                                returnObject.forcedMove = true;

                                

                                if (!isPromoted && !isSeventhRow) {
                                    let isForcedMove = findSixthForcedMoves(gameStateProp, arrayWithJumpingOptions[i].fieldName);
                                    if (isForcedMove.forcedMove) {
                                        returnObject.lowestValue = isForcedMove.lowestValue;
                                        for (let j = 0; j < isForcedMove.newGameState.length; j++) {
                                            returnObject.newGameState.push(isForcedMove.newGameState[j])
                                        }
                                    }
                                }

                                if (returnObject.lowestValue === null) {
                                    calculateAiResult(aiPlayer, gameStateProp);
                                    calculateUserResult(userPlayer, gameStateProp);

                                    returnObject.lowestValue = aiResult - userResult;
                                }
                                
                                

                            }



                            if (opponentType === "pawn") {
                                arrayWithMovingOptions[i].hasAiPawn = true;
                            } else if (opponentType === "king") {
                                arrayWithMovingOptions[i].hasAiKing = true;
                            }

                            gameStateProp[key].hasUserPawn = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptions[i].hasUserPawn = false;
                            arrayWithJumpingOptions[i].hasUserKing = false;
                            arrayWithMovingOptions[i].isFree = false;
                            arrayWithJumpingOptions[i].isFree = true;

                            
                            
                        }

                        
                    }

                }

            }

            if (gameStateProp[key].hasUserKing) {

                let arrayWithMovingOptionsKing;
                let arrayWithJumpingOptionsKing;

                if (userPlayer === "white") {
                    arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].jumpOptionsKing;
                } else if (userPlayer === "black") {
                    arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
                    arrayWithJumpingOptionsKing = gameStateProp.playerBlackMoveOptions[key].jumpOptionsKing;
                }

                for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                    if (arrayWithMovingOptionsKing[i].hasAiPawn || arrayWithMovingOptionsKing[i].hasAiKing) {
                        let opponentTypeWhenKing;
                        if (arrayWithMovingOptionsKing[i].hasAiPawn) {
                            opponentTypeWhenKing = "pawn"
                        } else if (arrayWithMovingOptionsKing[i].hasAiKing) {
                            opponentTypeWhenKing = "king"
                        }
                        if (arrayWithJumpingOptionsKing[i].isFree) {
                            //console.log("user have to jump king from: ", key, "to square: ", arrayWithJumpingOptionsKing[i].fieldName );
                            
                            gameStateProp[key].hasUserKing = false;
                            gameStateProp[key].isFree = true;
                            arrayWithMovingOptionsKing[i].hasAiPawn = false;
                            arrayWithMovingOptionsKing[i].hasAiKing = false;
                            arrayWithMovingOptionsKing[i].isFree = true;
                            arrayWithJumpingOptionsKing[i].hasUserKing = true;
                            arrayWithJumpingOptionsKing[i].isFree = false;
                            

                            if (returnObject.forcedMove) {
                                let doCalculation = true;
                                let alternativePath = [];
                                alternativePath.push(JSON.parse(JSON.stringify(gameStateProp)));

                                let isAnotherForcedMoveWhenKing = findSixthForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isAnotherForcedMoveWhenKing.forcedMove) {
                                    doCalculation = false;
                                    if (isAnotherForcedMoveWhenKing.lowestValue < returnObject.lowestValue) {
                                        returnObject.newGameState = alternativePath;
                                        for (let j = 0; j < isAnotherForcedMoveWhenKing.newGameState.length; j++) {
                                            returnObject.newGameState.push(isAnotherForcedMoveWhenKing.newGameState[j]);
                                        }
                                        returnObject.lowestValue = isAnotherForcedMoveWhenKing.lowestValue
                                    }
                                    
                                }

                                if (doCalculation) {

                                    calculateAiResult(aiPlayer, gameStateProp);
                                    calculateUserResult(userPlayer, gameStateProp);

                                    secondResult = aiResult - userResult;

                                    if (secondResult < returnObject.lowestValue) {
                                        returnObject.lowestValue = secondResult;
                                        returnObject.newGameState = alternativePath;
                                    }
                                }
                               
                                 
                            } else {
                                returnObject.newGameState.push(JSON.parse(JSON.stringify(gameStateProp)));
                                returnObject.forcedMove = true;

                                let isForcedMoveWhenKing = findSixthForcedMoves(gameStateProp, arrayWithJumpingOptionsKing[i].fieldName);
                                if (isForcedMoveWhenKing.forcedMove) {
                                    returnObject.lowestValue = isForcedMoveWhenKing.lowestValue
                                    for (let j = 0; j < isForcedMoveWhenKing.newGameState.length; j++) {
                                        returnObject.newGameState.push(isForcedMoveWhenKing.newGameState[j]);
                                    }
                                }

                                if (returnObject.lowestValue === null) {
                                    calculateAiResult(aiPlayer, gameStateProp);
                                    calculateUserResult(userPlayer, gameStateProp);

                                    returnObject.lowestValue = aiResult - userResult;
                                }
                            }


                            

                            if (opponentTypeWhenKing === "pawn") {
                                arrayWithMovingOptionsKing[i].hasAiPawn = true;
                            } else if (opponentTypeWhenKing === "king") {
                                arrayWithMovingOptionsKing[i].hasAiKing = true;
                            }

                            gameStateProp[key].hasUserKing = true;
                            gameStateProp[key].isFree = false;
                            arrayWithJumpingOptionsKing[i].hasUserKing = false;
                            arrayWithMovingOptionsKing[i].isFree = false;
                            arrayWithJumpingOptionsKing[i].isFree = true;
                        }
                    }

                }
            }

            if (tempValStepFive != null && returnObject.lowestValue != null && returnObject.lowestValue <= tempValStepFive) {
                return returnObject;
            }
        
        }
            
    }

    return returnObject;
}

let findSixthMove = (gameStateProp) => {
    
    let returnObject = {
        newGameState: [],
        lowestValue: null,
    }
    
    let promotionFields;
    let isPromoted;
    let hasNoPawns = true;
    let hasNoMoves = true;
    let resultSixStepsDeep;

    for (const key in gameStateProp) {

    
        if (gameStateProp[key].hasUserPawn) {
            
            let arrayWithMovingOptions;
            hasNoPawns = false;

            if (userPlayer === "white") {
                arrayWithMovingOptions = gameStateProp.playerWhiteMoveOptions[key].moveOptions;
                promotionFields = ["B8", "D8", "F8", "H8"];
            } else if (userPlayer === "black") {
                arrayWithMovingOptions = gameStateProp.playerBlackMoveOptions[key].moveOptions;
                promotionFields = ["A1", "C1", "E1", "G1"];
            }
            
            for (let i = 0; i < arrayWithMovingOptions.length; i++) {
                if (arrayWithMovingOptions[i].isFree) {

                    hasNoMoves = false;
                    isPromoted = promotionFields.includes(arrayWithMovingOptions[i].fieldName);

                    gameStateProp[key].hasUserPawn = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptions[i].isFree = false;

                    if (isPromoted) {
                        arrayWithMovingOptions[i].hasUserKing = true;
                    } else {
                        arrayWithMovingOptions[i].hasUserPawn = true;
                    }

                    //console.log(" user moved pawn from ", key, "to square: ", arrayWithMovingOptions[i].fieldName);

                    //drawingQueue.push(JSON.parse(JSON.stringify(gameStateProp)));

                    calculateAiResult(aiPlayer, gameStateProp);
                    calculateUserResult(userPlayer, gameStateProp);

                    resultSixStepsDeep = aiResult - userResult;
                    
                    if (resultSixStepsDeep < returnObject.lowestValue || returnObject.lowestValue === null) {
                        
                        returnObject.lowestValue = resultSixStepsDeep;
                    }

                    
                    gameStateProp[key].hasUserPawn = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptions[i].isFree = true;
                    arrayWithMovingOptions[i].hasUserPawn = false;
                    arrayWithMovingOptions[i].hasUserKing = false;
                }
            }
        }
        
        if (gameStateProp[key].hasUserKing) {
            
            let arrayWithMovingOptionsKing;
            hasNoPawns = false;
            
            if (userPlayer === "white") {
                arrayWithMovingOptionsKing = gameStateProp.playerWhiteMoveOptions[key].moveOptionsKing;
            } else if (userPlayer === "black") {
                arrayWithMovingOptionsKing = gameStateProp.playerBlackMoveOptions[key].moveOptionsKing;
            }
            
            for (let i = 0; i < arrayWithMovingOptionsKing.length; i++) {
                if (arrayWithMovingOptionsKing[i].isFree) {
                    hasNoMoves = false;
                    gameStateProp[key].hasUserKing = false;
                    gameStateProp[key].isFree = true;
                    arrayWithMovingOptionsKing[i].isFree = false;
                    arrayWithMovingOptionsKing[i].hasUserKing = true;
                    //console.log(" user moved king from ", key, arrayWithMovingOptionsKing[i].fieldName);

                    calculateAiResult(aiPlayer, gameStateProp);
                    calculateUserResult(userPlayer, gameStateProp);

                    resultSixStepsDeep = aiResult - userResult;

                    if (resultSixStepsDeep < returnObject.lowestValue || returnObject.lowestValue === null) {
                        
                        returnObject.lowestValue = resultSixStepsDeep;
                    }

                    gameStateProp[key].hasUserKing = true;
                    gameStateProp[key].isFree = false;
                    arrayWithMovingOptionsKing[i].isFree = true;
                    arrayWithMovingOptionsKing[i].hasUserKing = false;
                }
            }
        }

        if (tempValStepFive != null && returnObject.lowestValue != null && returnObject.lowestValue <= tempValStepFive) {
            return returnObject;
        }
    }

    if (hasNoPawns || hasNoMoves) {
        returnObject.lowestValue = 500;
    }
    
    return returnObject;
}
 
let chooseBestMove = (gameState, aiPlayer, userPlayer) => {
    //check for possible forced moves
    //if no forced move look for best move
    //changes
    
    console.log("game state here in the beging of function: ",gameState);

    if (userPlayerTurn) {

        for (const key in gameState) {
            if (gameState[key].fieldName) {
                document.getElementById(gameState[key].fieldName).addEventListener("click", chooseField);
            }
        }

    } else {
        
        //drawingQueue.push(gameState)
        let isForcedMove = findForcedMoves(gameState, "none");
        
        
        
        console.log(isForcedMove);
        if (isForcedMove.forcedMove) {
            //isForcedMove.forcedMove is an array with length that maybe > 1!!!
            console.log("Forced move executed. Users turn");
        } else {
            let bestMove = findFirstMove(gameState);
            console.log(bestMove);

            gameState = JSON.parse(JSON.stringify(bestMove.newGameState[bestMove.newGameState.length - 1]));
            drawBoard(gameState);
            userPlayerTurn = true;
            isFieldChoosen = false;
            chooseBestMove(gameState, aiPlayer, userPlayer);
            
            //redraw board with best move
            //change turn to user
            
        }

    }

}


let drawBoard = (gameState) => {

        
    let fieldArray = [];
    let fieldArrays = [];
    let square;
    let squareLight = `<div class="squareLight" id="squareLight"></div>`;
    let blackPawn = '<img id="pawn" src="assets/blackPawn.png">';
    let blackPawn180 = '<img id="pawn180" src="assets/blackPawn.png">';
    let whitePawn = '<img id="pawn" src="assets/whitePawn.png">';
    let whitePawn180 = '<img id="pawn180" src="assets/whitePawn.png">';
    let whiteKing = '<img id="king" src="assets/whiteKing.png">';
    let whiteKing180 = '<img id="king180" src="assets/whiteKing.png">';
    let blackKing = '<img id="king" src="assets/blackKing.png">';
    let blackKing180 = '<img id="king180" src="assets/blackKing.png">';
    let pawn = '<img></img>';
    let aiPawn = aiPlayer === "white" ? whitePawn180 : blackPawn;
    let userPawn = userPlayer === "white" ? whitePawn : blackPawn180;
    let aiKing =  aiPlayer === "white" ? whiteKing180 : blackKing;
    let userKing =  userPlayer === "white" ? whiteKing : blackKing180;


    let chessBoardDiv = document.querySelector(".chessBoard");

    chessBoardDiv.innerHTML = null

    for (const key in gameState) {
        if (gameState[key].column > 0) {
            let fieldObj = {
                id: gameState[key].fieldName,
                hasAiPawn: gameState[key].hasAiPawn,
                hasUserPawn: gameState[key].hasUserPawn,
                hasAiKing: gameState[key].hasAiKing,
                hasUserKing: gameState[key].hasUserKing
            }
            fieldArray.push(fieldObj);
        }
    }


    for (let i = 0; i < fieldArray.length; i += 4) {
        let chunk = fieldArray.slice(i, i + 4);
        fieldArrays.push(chunk);
    }



    for (let i = fieldArrays.length - 1; i >= 0; i--) {
        if (i%2 !== 0) {
            for (let j = 0; j < fieldArrays[i].length; j++) {
                
                if (fieldArrays[i][j].hasAiPawn) {
                    pawn = aiPawn;
                } else if (fieldArrays[i][j].hasUserPawn) {
                    pawn = userPawn;
                } else if (fieldArrays[i][j].hasAiKing) {
                    pawn = aiKing;
                } else if (fieldArrays[i][j].hasUserKing) {
                    pawn = userKing;
                }
                
                square = `<div class="squareDark" id=${fieldArrays[i][j].id}>${pawn}</div>`;
                chessBoardDiv.innerHTML += squareLight;
                chessBoardDiv.innerHTML += square;
                pawn = '<img></img>';
            }
        } else {
            for (let j = 0; j < fieldArrays[i].length; j++) {
                
                if (fieldArrays[i][j].hasAiPawn) {
                    pawn = aiPawn;
                } else if (fieldArrays[i][j].hasUserPawn) {
                    pawn = userPawn;
                } else if (fieldArrays[i][j].hasAiKing) {
                    pawn = aiKing;
                } else if (fieldArrays[i][j].hasUserKing) {
                    pawn = userKing;
                }

                square = `<div class="squareDark" id=${fieldArrays[i][j].id}>${pawn}</div>`;
                chessBoardDiv.innerHTML += square;
                chessBoardDiv.innerHTML += squareLight;
                pawn = '<img></img>';
            }
        }


    }

    if (aiPlayer === "white") {
        chessBoardDiv.style.transform = "rotate(180deg)"
    }


}


startGame(gameState);



//drawSequence(drawingQueue);


console.log(drawingQueue.length);

console.log(aiResult);
console.log(userResult);








