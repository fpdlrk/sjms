interface TooltipMsgType {
    [key:string] : string
}

const tooltipMsg:TooltipMsgType = {
    RESET : "초기화",
    INTRO : "인트로를 등록하실 수 있는 메뉴입니다.",
    FIRST_PAGE:"첫 페이지",
    PREV_PAGE:"이전 페이지",
    NEXT_PAGE:"다음 페이지",
    LAST_PAGE:"마지막 페이지",
    PREVIEW:"작성하신 설문을 미리보기 하실 수 있습니다.",
    TEST_INFO : "툴팁테스트입니다.",
    CLOSE:'닫기',
    CANCEL:'취소',
    LOGIC:'로직',
    HISTORY:'변경이력',
    PAGE_ADD:'페이지 추가',
    PAGE_DELETE:"페이지 삭제",
    PAGE_COPY:'페이지 복사',
    FINISH:'등록된 맺음말을 확인합니다.',
    FINISH_ADD:'맺음말을 추가합니다.',
    FINISH_DISABLED:'먼저 맺음말 추가해주세요',
    EDIT_FINISH:'설문편집을 완료 합니다.',
    LOGIC_DELETE : '설정한 로직을 삭제 합니다.',
    LOGIC_ADD : '로직 추가',
    NO_QUESTION : '빈 페이지 입니다.'
}

export default tooltipMsg;