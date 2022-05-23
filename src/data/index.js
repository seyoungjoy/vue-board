export default {
    User: [
      {
        user_id: 1,
        name: 'hihihihihihihihihi',
        created_at: '2018-09-11 11:42:11'
      },
      {
        user_id: 2,
        name: 'gildong',
        created_at: '2018-09-11 11:42:11'
      },
      {
        user_id: 3,
        name: 'joy',
        created_at: '2018-09-11 11:42:11'
      },
    ],
    Content: [
      {
        content_id: 1,
        user_id: 1,
        title: '안녕하세요',
        context: '하하하하핳',
        created_at: '2019-01-01 13:11:42',
        updated_at: null
      },
      {
        content_id: 2,
        user_id: 3,
        title: 'vue가 프레임워크인가요 라이브러리인가요?',
        context: 'ㅈㄱㄴ',
        created_at: '2019-01-02 13:11:42',
        updated_at: null
      },
      {
        content_id: 3,
        user_id: 2,
        title: 'css library 뭐가 제일 좋나요?',
        context: 'ㅈㄱㄴ',
        created_at: '2019-03-29 13:11:42',
        updated_at: null
      }
    ],
    Comment: [
      {
        comment_id: 1,
        user_id: 1,
        content_id: 1,
        context: '반갑습니다',
        created_at: '2019-03-29 14:11:11',
        updated_at: null
      },
      {
        comment_id: 2,
        user_id: 3,
        content_id: 2,
        context: 'vue는 프레임워크입니다. 필요에 따라 자유롭게 사용가능한 라이브러리와 달리 프레임워크 내부에서 정해진 틀에 따라 사용해야합니다.',
        created_at: '2019-03-29 16:11:11',
        updated_at: null
      },
      {
        comment_id: 3,
        user_id: 2,
        content_id: 3,
        context: '뷰는 부트스트랩, 뷰티파이 많이 사용하던데요.',
        created_at: '2019-03-29 14:11:11',
        updated_at: null
      },
      {
        comment_id: 4,
        user_id: 1,
        content_id: 3,
        context: '저는 뷰티파이가 좋아요!',
        created_at: '2019-03-29 14:11:11',
        updated_at: null
      }
    ],
    SubComment: [
      {
        subcomment_id: 1,
        comment_id: 3,
        user_id: 1,
        context: '오 아이린님이 직접 댓글을 달아주시다니 ㅠㅠ 영광입니다!!',
        created_at: '2019-03-29 16:22:11',
        updated_at: null
      }
    ]
  }
