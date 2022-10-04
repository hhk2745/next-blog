const photos = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952",
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796",
  },
  // 1 ~ 10 까지
];

export default function handler(request, response) {
  const { method } = request;
  // GET, POST, PUT, PATCH 등 요청에 맞는 작업 실행
  if (method === "GET") {
    return response.status(200).json({
      photos,
    });
  }
}