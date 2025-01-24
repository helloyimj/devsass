const fs = require('fs');
const path = require('path');

// 프로젝트 디렉토리 설정 (현재 스크립트 기준으로 설정)
const projectDir = path.resolve(__dirname);

// 확인할 파일 확장자 설정
const fileExtensions = ['html', 'scss'];

// 정규식을 사용해 이미지 경로 추출
const imgRegex = /(?:<img[^>]+src="([^">]+)"|url\((['"]?)([^'")]+)\2\))/g;

// 누락된 이미지 파일을 저장할 배열
const missingImages = [];

// 디렉토리 내 파일 검색 함수
function findFilesWithExtensions(dir, extensions) {
    const results = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            results.push(...findFilesWithExtensions(fullPath, extensions));
        } else if (extensions.some(ext => file.endsWith(`.${ext}`))) {
            results.push(fullPath);
        }
    });

    return results;
}

// 이미지 경로 확인 함수
function findMissingImages() {
    // HTML과 SCSS 파일 검색
    const files = findFilesWithExtensions(projectDir, fileExtensions);

    files.forEach(file => {
        const content = fs.readFileSync(file, 'utf-8');
        let match;

        while ((match = imgRegex.exec(content)) !== null) {
            const imgPath = match[1] || match[3]; // <img src> 또는 url() 경로

            // 이미지 경로가 절대 경로인지 상대 경로인지 확인
            const resolvedPath = path.resolve(path.dirname(file), imgPath);

            // 파일이 존재하지 않으면 누락된 파일 목록에 추가
            if (!fs.existsSync(resolvedPath)) {
                missingImages.push({ file, imgPath });
            }
        }
    });

    // 결과 출력
    if (missingImages.length > 0) {
        console.error('Missing Images:', missingImages);
    } else {
        console.log('All images are present!');
    }
}

// 실행
findMissingImages();