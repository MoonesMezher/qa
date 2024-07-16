const { onlineGameBot, generateRandomBot } = require("../bot/onllineGameBot");

const questions = [
        {
            "_id": "66924fba90b4098abfff1b91",
            "section_id": "668102b0593d7a4e225b9148",
            "category_ids": [
                "668a414c8502e7f890885cd5"
            ],
            "user_ids": [
                "668a42628502e7f8909320a0"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "كم عدد الأهرامات الموجودة في مدينة تيارت الجزائرية ",
            "answers": [
                {
                    "answer": "١١",
                    "state": false,
                    "_id": "66924fba90b4098abfff1b92"
                },
                {
                    "answer": "١٢",
                    "state": false,
                    "_id": "66924fba90b4098abfff1b93"
                },
                {
                    "answer": "١٣",
                    "state": true,
                    "_id": "66924fba90b4098abfff1b94"
                },
                {
                    "answer": "١٤",
                    "state": false,
                    "_id": "66924fba90b4098abfff1b95"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:58:18.391Z",
            "updatedAt": "2024-07-13T09:58:18.391Z",
            "__v": 0
        },
        {
            "_id": "66924f5390b4098abfff1b0a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720864669457.scaled_1000165094.png",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "فان ستروي",
                    "state": true,
                    "_id": "66924f5390b4098abfff1b0b"
                },
                {
                    "answer": "فان برسي",
                    "state": false,
                    "_id": "66924f5390b4098abfff1b0c"
                },
                {
                    "answer": "دي ماريا ",
                    "state": false,
                    "_id": "66924f5390b4098abfff1b0d"
                },
                {
                    "answer": "دي يونج ",
                    "state": false,
                    "_id": "66924f5390b4098abfff1b0e"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:56:35.119Z",
            "updatedAt": "2024-07-13T09:56:35.119Z",
            "__v": 0
        },
        {
            "_id": "66924f3290b4098abfff1ae6",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم الدولار الكاريبي ؟",
            "answers": [
                {
                    "answer": "أنتيغا و بربودا",
                    "state": true,
                    "_id": "66924f3290b4098abfff1ae7"
                },
                {
                    "answer": "دومينيكا ",
                    "state": true,
                    "_id": "66924f3290b4098abfff1ae8"
                },
                {
                    "answer": "غرينادا ",
                    "state": true,
                    "_id": "66924f3290b4098abfff1ae9"
                },
                {
                    "answer": "سانت كيتس ونيفيس",
                    "state": true,
                    "_id": "66924f3290b4098abfff1aea"
                },
                {
                    "answer": "سانت لويسا",
                    "state": true,
                    "_id": "66924f3290b4098abfff1aeb"
                },
                {
                    "answer": "سانت فنسينت",
                    "state": true,
                    "_id": "66924f3290b4098abfff1aec"
                },
                {
                    "answer": "مونتسيرات",
                    "state": true,
                    "_id": "66924f3290b4098abfff1aed"
                },
                {
                    "answer": "الجرينادينز",
                    "state": true,
                    "_id": "66924f3290b4098abfff1aee"
                },
                {
                    "answer": "ايسلندا ",
                    "state": false,
                    "_id": "66924f3290b4098abfff1aef"
                },
                {
                    "answer": "الدنمارك ",
                    "state": false,
                    "_id": "66924f3290b4098abfff1af0"
                },
                {
                    "answer": "النرويج ",
                    "state": false,
                    "_id": "66924f3290b4098abfff1af1"
                },
                {
                    "answer": "السويد",
                    "state": false,
                    "_id": "66924f3290b4098abfff1af2"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:56:02.947Z",
            "updatedAt": "2024-07-13T09:56:02.947Z",
            "__v": 0
        },
        {
            "_id": "66924edc90b4098abfff19ea",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720864488507.scaled_1000165092.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "جوتي",
                    "state": true,
                    "_id": "66924edc90b4098abfff19eb"
                },
                {
                    "answer": "ديدا",
                    "state": false,
                    "_id": "66924edc90b4098abfff19ec"
                },
                {
                    "answer": "صلاح ",
                    "state": false,
                    "_id": "66924edc90b4098abfff19ed"
                },
                {
                    "answer": "مودريتش ",
                    "state": false,
                    "_id": "66924edc90b4098abfff19ee"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:54:36.761Z",
            "updatedAt": "2024-07-13T09:54:36.761Z",
            "__v": 0
        },
        {
            "_id": "66924e1090b4098abfff18d9",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720864369597.scaled_1000165090.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "بيكهام ",
                    "state": true,
                    "_id": "66924e1090b4098abfff18da"
                },
                {
                    "answer": "بيلينجهام ",
                    "state": false,
                    "_id": "66924e1090b4098abfff18db"
                },
                {
                    "answer": "تشافي ",
                    "state": false,
                    "_id": "66924e1090b4098abfff18dc"
                },
                {
                    "answer": "تشابي",
                    "state": false,
                    "_id": "66924e1090b4098abfff18dd"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:51:12.304Z",
            "updatedAt": "2024-07-13T09:51:12.304Z",
            "__v": 0
        },
        {
            "_id": "66924d4f90b4098abfff15ff",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720864137106.scaled_1000165086.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "ميكاليلي",
                    "state": true,
                    "_id": "66924d4f90b4098abfff1600"
                },
                {
                    "answer": "تشافي ",
                    "state": false,
                    "_id": "66924d4f90b4098abfff1601"
                },
                {
                    "answer": "تشابي",
                    "state": false,
                    "_id": "66924d4f90b4098abfff1602"
                },
                {
                    "answer": "راموس",
                    "state": false,
                    "_id": "66924d4f90b4098abfff1603"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:47:59.024Z",
            "updatedAt": "2024-07-13T09:47:59.024Z",
            "__v": 0
        },
        {
            "_id": "66924d3590b4098abfff15f6",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bed593d7a4e225b92d6",
                "66811bfd593d7a4e225b92eb",
                "668beec341a92db39752088a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1720864116283.scaled_1000051384.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "هاني رمزي ",
                    "state": true,
                    "_id": "66924d3590b4098abfff15f7"
                },
                {
                    "answer": "عمرو السولية ",
                    "state": false,
                    "_id": "66924d3590b4098abfff15f8"
                },
                {
                    "answer": "محمد شوقي ",
                    "state": false,
                    "_id": "66924d3590b4098abfff15f9"
                },
                {
                    "answer": "اكرامي ",
                    "state": false,
                    "_id": "66924d3590b4098abfff15fa"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:47:33.131Z",
            "updatedAt": "2024-07-13T09:47:33.131Z",
            "__v": 0
        },
        {
            "_id": "66924c2690b4098abfff140a",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم الرينغيت الماليزي كعملة رسمية؟",
            "answers": [
                {
                    "answer": "ماليزيا ",
                    "state": true,
                    "_id": "66924c2690b4098abfff140b"
                },
                {
                    "answer": "الفلبين في بعض المناطق ",
                    "state": true,
                    "_id": "66924c2690b4098abfff140c"
                },
                {
                    "answer": "تايلاند في بعض الحدود",
                    "state": true,
                    "_id": "66924c2690b4098abfff140d"
                },
                {
                    "answer": "فيتنام في بعض الحدود ",
                    "state": true,
                    "_id": "66924c2690b4098abfff140e"
                },
                {
                    "answer": "ماليزيا في بعض الحدود",
                    "state": true,
                    "_id": "66924c2690b4098abfff140f"
                },
                {
                    "answer": "اندونسيا في بعض الحدود",
                    "state": true,
                    "_id": "66924c2690b4098abfff1410"
                },
                {
                    "answer": "سلوفاكيا ",
                    "state": false,
                    "_id": "66924c2690b4098abfff1411"
                },
                {
                    "answer": "بولندا",
                    "state": false,
                    "_id": "66924c2690b4098abfff1412"
                },
                {
                    "answer": "التشيك",
                    "state": false,
                    "_id": "66924c2690b4098abfff1413"
                },
                {
                    "answer": "الدنمارك ",
                    "state": false,
                    "_id": "66924c2690b4098abfff1414"
                },
                {
                    "answer": "ايسلندا ",
                    "state": false,
                    "_id": "66924c2690b4098abfff1415"
                },
                {
                    "answer": "غرينادا",
                    "state": false,
                    "_id": "66924c2690b4098abfff1416"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:43:02.832Z",
            "updatedAt": "2024-07-13T09:43:02.832Z",
            "__v": 0
        },
        {
            "_id": "66924a9c90b4098abfff0bf3",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم الفرنك الباسيفيكي ؟",
            "answers": [
                {
                    "answer": "بولينيزيا الفرنسية ",
                    "state": true,
                    "_id": "66924a9c90b4098abfff0bf4"
                },
                {
                    "answer": "واليس وفوتونا",
                    "state": true,
                    "_id": "66924a9c90b4098abfff0bf5"
                },
                {
                    "answer": "فانواتو",
                    "state": true,
                    "_id": "66924a9c90b4098abfff0bf6"
                },
                {
                    "answer": "نيو كاليدونيا ",
                    "state": true,
                    "_id": "66924a9c90b4098abfff0bf7"
                },
                {
                    "answer": "بيتكربن",
                    "state": true,
                    "_id": "66924a9c90b4098abfff0bf8"
                },
                {
                    "answer": "فرنسا الجديدة ",
                    "state": true,
                    "_id": "66924a9c90b4098abfff0bf9"
                },
                {
                    "answer": "اندونسيا ",
                    "state": false,
                    "_id": "66924a9c90b4098abfff0bfa"
                },
                {
                    "answer": "ماليزيا ",
                    "state": false,
                    "_id": "66924a9c90b4098abfff0bfb"
                },
                {
                    "answer": "تايلاند ",
                    "state": false,
                    "_id": "66924a9c90b4098abfff0bfc"
                },
                {
                    "answer": "بولندا ",
                    "state": false,
                    "_id": "66924a9c90b4098abfff0bfd"
                },
                {
                    "answer": "سلوفاكيا ",
                    "state": false,
                    "_id": "66924a9c90b4098abfff0bfe"
                },
                {
                    "answer": "التشيك",
                    "state": false,
                    "_id": "66924a9c90b4098abfff0bff"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:36:28.468Z",
            "updatedAt": "2024-07-13T09:36:28.468Z",
            "__v": 0
        },
        {
            "_id": "669249c390b4098abfff0a27",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720863289350.scaled_1000165082.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "بيلينجهام",
                    "state": false,
                    "_id": "669249c390b4098abfff0a28"
                },
                {
                    "answer": "كوكي",
                    "state": true,
                    "_id": "669249c390b4098abfff0a29"
                },
                {
                    "answer": "لورينتي",
                    "state": false,
                    "_id": "669249c390b4098abfff0a2a"
                },
                {
                    "answer": "ميسي",
                    "state": false,
                    "_id": "669249c390b4098abfff0a2b"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:32:51.903Z",
            "updatedAt": "2024-07-13T09:32:51.903Z",
            "__v": 0
        },
        {
            "_id": "6692494990b4098abfff092b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720863150936.scaled_1000165084.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "رونالدو ",
                    "state": false,
                    "_id": "6692494990b4098abfff092c"
                },
                {
                    "answer": "رونالدينيو ",
                    "state": false,
                    "_id": "6692494990b4098abfff092d"
                },
                {
                    "answer": "ماركوس لورينتي ",
                    "state": true,
                    "_id": "6692494990b4098abfff092e"
                },
                {
                    "answer": "محمد صلاح ",
                    "state": false,
                    "_id": "6692494990b4098abfff092f"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:30:49.606Z",
            "updatedAt": "2024-07-13T09:30:49.606Z",
            "__v": 0
        },
        {
            "_id": "6692490e90b4098abfff0757",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720863084692.scaled_1000165083.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "بيكيه ",
                    "state": false,
                    "_id": "6692490e90b4098abfff0758"
                },
                {
                    "answer": "جودين",
                    "state": true,
                    "_id": "6692490e90b4098abfff0759"
                },
                {
                    "answer": "راموس ",
                    "state": false,
                    "_id": "6692490e90b4098abfff075a"
                },
                {
                    "answer": "محمد صلاح ",
                    "state": false,
                    "_id": "6692490e90b4098abfff075b"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:29:50.569Z",
            "updatedAt": "2024-07-13T09:29:50.569Z",
            "__v": 0
        },
        {
            "_id": "669248fd90b4098abfff0746",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم البوند \"الجنيه\"الاسترليني ؟",
            "answers": [
                {
                    "answer": "المملكة المتحدة ",
                    "state": true,
                    "_id": "669248fd90b4098abfff0747"
                },
                {
                    "answer": "جزيرة مان ",
                    "state": true,
                    "_id": "669248fd90b4098abfff0748"
                },
                {
                    "answer": "جزر القنال الانجليزي ",
                    "state": true,
                    "_id": "669248fd90b4098abfff0749"
                },
                {
                    "answer": "أقاليم ماوراء البحار",
                    "state": true,
                    "_id": "669248fd90b4098abfff074a"
                },
                {
                    "answer": "جورجيا الجنوبية ",
                    "state": true,
                    "_id": "669248fd90b4098abfff074b"
                },
                {
                    "answer": "جزر ساندويتش البريطانية ",
                    "state": true,
                    "_id": "669248fd90b4098abfff074c"
                },
                {
                    "answer": "اندونسيا ",
                    "state": false,
                    "_id": "669248fd90b4098abfff074d"
                },
                {
                    "answer": "تايلاند",
                    "state": false,
                    "_id": "669248fd90b4098abfff074e"
                },
                {
                    "answer": "نيويورك ",
                    "state": false,
                    "_id": "669248fd90b4098abfff074f"
                },
                {
                    "answer": "نيوزيلندا ",
                    "state": false,
                    "_id": "669248fd90b4098abfff0750"
                },
                {
                    "answer": "التشيك ",
                    "state": false,
                    "_id": "669248fd90b4098abfff0751"
                },
                {
                    "answer": "فرنسا الجديدة",
                    "state": false,
                    "_id": "669248fd90b4098abfff0752"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:29:33.231Z",
            "updatedAt": "2024-07-13T09:29:33.231Z",
            "__v": 0
        },
        {
            "_id": "6692489a90b4098abfff0642",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "اي من هذه الدول عملتها اليورو ؟",
            "answers": [
                {
                    "answer": "المانيا ",
                    "state": true,
                    "_id": "6692489a90b4098abfff0643"
                },
                {
                    "answer": "هولندا",
                    "state": true,
                    "_id": "6692489a90b4098abfff0644"
                },
                {
                    "answer": "لوكسمبورغ ",
                    "state": true,
                    "_id": "6692489a90b4098abfff0645"
                },
                {
                    "answer": "فرنسا",
                    "state": true,
                    "_id": "6692489a90b4098abfff0646"
                },
                {
                    "answer": "اسبانيا",
                    "state": true,
                    "_id": "6692489a90b4098abfff0647"
                },
                {
                    "answer": "اليونان",
                    "state": true,
                    "_id": "6692489a90b4098abfff0648"
                },
                {
                    "answer": "النمسا",
                    "state": true,
                    "_id": "6692489a90b4098abfff0649"
                },
                {
                    "answer": "مالطا ",
                    "state": true,
                    "_id": "6692489a90b4098abfff064a"
                },
                {
                    "answer": "سويسرا",
                    "state": false,
                    "_id": "6692489a90b4098abfff064b"
                },
                {
                    "answer": "السويد ",
                    "state": false,
                    "_id": "6692489a90b4098abfff064c"
                },
                {
                    "answer": "الدانمارك ",
                    "state": false,
                    "_id": "6692489a90b4098abfff064d"
                },
                {
                    "answer": "التشيك",
                    "state": false,
                    "_id": "6692489a90b4098abfff064e"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:27:54.787Z",
            "updatedAt": "2024-07-13T09:27:54.787Z",
            "__v": 0
        },
        {
            "_id": "6692485590b4098abfff0540",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862892535.scaled_1000165053.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "هازارد ",
                    "state": true,
                    "_id": "6692485590b4098abfff0541"
                },
                {
                    "answer": "محمد صلاح ",
                    "state": false,
                    "_id": "6692485590b4098abfff0542"
                },
                {
                    "answer": "رونالدو ",
                    "state": false,
                    "_id": "6692485590b4098abfff0543"
                },
                {
                    "answer": "فينسيوس ",
                    "state": false,
                    "_id": "6692485590b4098abfff0544"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:26:45.837Z",
            "updatedAt": "2024-07-13T09:26:45.837Z",
            "__v": 0
        },
        {
            "_id": "6692482890b4098abfff0358",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862871449.scaled_1000165080.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "دافيد الابا",
                    "state": true,
                    "_id": "6692482890b4098abfff0359"
                },
                {
                    "answer": "روبرتو كارلوس ",
                    "state": false,
                    "_id": "6692482890b4098abfff035a"
                },
                {
                    "answer": "مانشيني",
                    "state": false,
                    "_id": "6692482890b4098abfff035b"
                },
                {
                    "answer": "راموس",
                    "state": false,
                    "_id": "6692482890b4098abfff035c"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:26:00.202Z",
            "updatedAt": "2024-07-13T09:26:00.202Z",
            "__v": 0
        },
        {
            "_id": "6692482690b4098abfff033a",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "أي من هذه الدول عملتها اليورو؟",
            "answers": [
                {
                    "answer": "سويسرا",
                    "state": false,
                    "_id": "6692482690b4098abfff033b"
                },
                {
                    "answer": "ليختنشتاين ",
                    "state": false,
                    "_id": "6692482690b4098abfff033c"
                },
                {
                    "answer": "النمسا",
                    "state": true,
                    "_id": "6692482690b4098abfff033d"
                },
                {
                    "answer": "صربيا",
                    "state": false,
                    "_id": "6692482690b4098abfff033e"
                },
                {
                    "answer": "تركيا",
                    "state": false,
                    "_id": "6692482690b4098abfff033f"
                },
                {
                    "answer": "جورجيا",
                    "state": false,
                    "_id": "6692482690b4098abfff0340"
                },
                {
                    "answer": "المانيا",
                    "state": true,
                    "_id": "6692482690b4098abfff0341"
                },
                {
                    "answer": "السويد",
                    "state": false,
                    "_id": "6692482690b4098abfff0342"
                },
                {
                    "answer": "الدانمارك",
                    "state": false,
                    "_id": "6692482690b4098abfff0343"
                },
                {
                    "answer": "هولندا",
                    "state": true,
                    "_id": "6692482690b4098abfff0344"
                },
                {
                    "answer": "الكويت",
                    "state": false,
                    "_id": "6692482690b4098abfff0345"
                },
                {
                    "answer": "الهند",
                    "state": false,
                    "_id": "6692482690b4098abfff0346"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:25:58.661Z",
            "updatedAt": "2024-07-13T09:25:58.661Z",
            "__v": 0
        },
        {
            "_id": "669247f390b4098abfff023e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862774040.scaled_1000165079.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "لونين",
                    "state": false,
                    "_id": "669247f390b4098abfff023f"
                },
                {
                    "answer": "كورتوا",
                    "state": true,
                    "_id": "669247f390b4098abfff0240"
                },
                {
                    "answer": "محمد صلاح ",
                    "state": false,
                    "_id": "669247f390b4098abfff0241"
                },
                {
                    "answer": "ميسي",
                    "state": false,
                    "_id": "669247f390b4098abfff0242"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:25:07.102Z",
            "updatedAt": "2024-07-13T09:25:07.102Z",
            "__v": 0
        },
        {
            "_id": "669247af90b4098abfff013b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862664645.scaled_1000165078.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "جارث بيل ",
                    "state": true,
                    "_id": "669247af90b4098abfff013c"
                },
                {
                    "answer": "محمد صلاح ",
                    "state": false,
                    "_id": "669247af90b4098abfff013d"
                },
                {
                    "answer": "مالديني",
                    "state": false,
                    "_id": "669247af90b4098abfff013e"
                },
                {
                    "answer": "دي ماريا ",
                    "state": false,
                    "_id": "669247af90b4098abfff013f"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:23:59.380Z",
            "updatedAt": "2024-07-13T09:23:59.380Z",
            "__v": 0
        },
        {
            "_id": "669247a890b4098abfff011d",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "اي من هذه الدول عملتها الليرة؟",
            "answers": [
                {
                    "answer": "البحرين ",
                    "state": false,
                    "_id": "669247a890b4098abfff011e"
                },
                {
                    "answer": "صربيا",
                    "state": false,
                    "_id": "669247a890b4098abfff011f"
                },
                {
                    "answer": "الكويت",
                    "state": false,
                    "_id": "669247a890b4098abfff0120"
                },
                {
                    "answer": "الجزائر ",
                    "state": false,
                    "_id": "669247a890b4098abfff0121"
                },
                {
                    "answer": "رومانيا",
                    "state": false,
                    "_id": "669247a890b4098abfff0122"
                },
                {
                    "answer": "الأردن ",
                    "state": false,
                    "_id": "669247a890b4098abfff0123"
                },
                {
                    "answer": "تركيا",
                    "state": true,
                    "_id": "669247a890b4098abfff0124"
                },
                {
                    "answer": "مصر",
                    "state": false,
                    "_id": "669247a890b4098abfff0125"
                },
                {
                    "answer": "لبنان",
                    "state": true,
                    "_id": "669247a890b4098abfff0126"
                },
                {
                    "answer": "سوريا",
                    "state": true,
                    "_id": "669247a890b4098abfff0127"
                },
                {
                    "answer": "عمان",
                    "state": false,
                    "_id": "669247a890b4098abfff0128"
                },
                {
                    "answer": "السعودية ",
                    "state": false,
                    "_id": "669247a890b4098abfff0129"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:23:52.818Z",
            "updatedAt": "2024-07-13T09:23:52.818Z",
            "__v": 0
        },
        {
            "_id": "669246ed90b4098abffef810",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862513260.scaled_1000165077.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "روبرتو كارلوس ",
                    "state": false,
                    "_id": "6692471190b4098abffefbb4"
                },
                {
                    "answer": "ميندي",
                    "state": true,
                    "_id": "6692471190b4098abffefbb5"
                },
                {
                    "answer": "صلاح ",
                    "state": false,
                    "_id": "6692471190b4098abffefbb6"
                },
                {
                    "answer": "ميسي",
                    "state": false,
                    "_id": "6692471190b4098abffefbb7"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:20:45.120Z",
            "updatedAt": "2024-07-13T09:21:21.641Z",
            "__v": 0
        },
        {
            "_id": "669246b890b4098abffef554",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "اي من هذه الدول عملتها الدينار؟",
            "answers": [
                {
                    "answer": "البحرين",
                    "state": true,
                    "_id": "6692474f90b4098abffeff43"
                },
                {
                    "answer": "صربيا",
                    "state": true,
                    "_id": "6692474f90b4098abffeff44"
                },
                {
                    "answer": "الكويت",
                    "state": true,
                    "_id": "6692474f90b4098abffeff45"
                },
                {
                    "answer": "الجزائر ",
                    "state": true,
                    "_id": "6692474f90b4098abffeff46"
                },
                {
                    "answer": "رومانيا",
                    "state": false,
                    "_id": "6692474f90b4098abffeff47"
                },
                {
                    "answer": "الأردن ",
                    "state": true,
                    "_id": "6692474f90b4098abffeff48"
                },
                {
                    "answer": "الدومينيكان ",
                    "state": false,
                    "_id": "6692474f90b4098abffeff49"
                },
                {
                    "answer": "مصر",
                    "state": false,
                    "_id": "6692474f90b4098abffeff4a"
                },
                {
                    "answer": "لبنان",
                    "state": false,
                    "_id": "6692474f90b4098abffeff4b"
                },
                {
                    "answer": "سوريا",
                    "state": false,
                    "_id": "6692474f90b4098abffeff4c"
                },
                {
                    "answer": "عمان",
                    "state": false,
                    "_id": "6692474f90b4098abffeff4d"
                },
                {
                    "answer": "السعودية ",
                    "state": false,
                    "_id": "6692474f90b4098abffeff4e"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:19:52.792Z",
            "updatedAt": "2024-07-13T09:22:23.561Z",
            "__v": 0
        },
        {
            "_id": "6692468890b4098abffef380",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "66811ba1593d7a4e225b928c",
                "66811c53593d7a4e225b9394",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862391593.scaled_1000164991.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "ميسي",
                    "state": false,
                    "_id": "6692470190b4098abffef912"
                },
                {
                    "answer": "سواريز ",
                    "state": true,
                    "_id": "6692470190b4098abffef913"
                },
                {
                    "answer": "مارادونا ",
                    "state": false,
                    "_id": "6692470190b4098abffef914"
                },
                {
                    "answer": "رونالدو ",
                    "state": false,
                    "_id": "6692470190b4098abffef915"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:19:04.894Z",
            "updatedAt": "2024-07-13T09:21:05.815Z",
            "__v": 0
        },
        {
            "_id": "6692465790b4098abffef284",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862432574.scaled_1000165009.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "تشافي",
                    "state": false,
                    "_id": "6692465790b4098abffef285"
                },
                {
                    "answer": "انيستا",
                    "state": true,
                    "_id": "6692465790b4098abffef286"
                },
                {
                    "answer": "تشابي ",
                    "state": false,
                    "_id": "6692465790b4098abffef287"
                },
                {
                    "answer": "اوزيل",
                    "state": false,
                    "_id": "6692465790b4098abffef288"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:18:15.116Z",
            "updatedAt": "2024-07-13T09:18:15.116Z",
            "__v": 0
        },
        {
            "_id": "6692460990b4098abffef163",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668bee1f41a92db3974dc27c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862288368.scaled_1000165042.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "ديباى ",
                    "state": true,
                    "_id": "6692460990b4098abffef164"
                },
                {
                    "answer": "بيكهام ",
                    "state": false,
                    "_id": "6692460990b4098abffef165"
                },
                {
                    "answer": "رونالدو ",
                    "state": false,
                    "_id": "6692460990b4098abffef166"
                },
                {
                    "answer": "رونالدينهو ",
                    "state": false,
                    "_id": "6692460990b4098abffef167"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:16:57.681Z",
            "updatedAt": "2024-07-13T09:16:57.681Z",
            "__v": 0
        },
        {
            "_id": "6692460590b4098abffef145",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم الكرونا الدنماركي كعملة رسمية ؟",
            "answers": [
                {
                    "answer": "الدنمارك ",
                    "state": true,
                    "_id": "6692460590b4098abffef146"
                },
                {
                    "answer": "جرينلاند ",
                    "state": true,
                    "_id": "6692460590b4098abffef147"
                },
                {
                    "answer": "جزر فارو",
                    "state": true,
                    "_id": "6692460590b4098abffef148"
                },
                {
                    "answer": "بعض حدود ألمانيا ",
                    "state": true,
                    "_id": "6692460590b4098abffef149"
                },
                {
                    "answer": "الإكوادور ",
                    "state": false,
                    "_id": "6692460590b4098abffef14a"
                },
                {
                    "answer": "السلفادور ",
                    "state": false,
                    "_id": "6692460590b4098abffef14b"
                },
                {
                    "answer": "زيمبابوي ",
                    "state": false,
                    "_id": "6692460590b4098abffef14c"
                },
                {
                    "answer": "جزر مارشال",
                    "state": false,
                    "_id": "6692460590b4098abffef14d"
                },
                {
                    "answer": "جزر القمر",
                    "state": false,
                    "_id": "6692460590b4098abffef14e"
                },
                {
                    "answer": "اندونسيا ",
                    "state": false,
                    "_id": "6692460590b4098abffef14f"
                },
                {
                    "answer": "سنغافورة ",
                    "state": false,
                    "_id": "6692460590b4098abffef150"
                },
                {
                    "answer": "ماليزيا ",
                    "state": false,
                    "_id": "6692460590b4098abffef151"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:16:53.955Z",
            "updatedAt": "2024-07-13T09:16:53.955Z",
            "__v": 0
        },
        {
            "_id": "669245b490b4098abffeee16",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862244832.scaled_1000165056.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "راموس ",
                    "state": false,
                    "_id": "66924bc590b4098abfff1165"
                },
                {
                    "answer": "فاران",
                    "state": true,
                    "_id": "66924bc590b4098abfff1166"
                },
                {
                    "answer": "بيبي",
                    "state": false,
                    "_id": "66924bc590b4098abfff1167"
                },
                {
                    "answer": "بيكيه",
                    "state": false,
                    "_id": "66924bc590b4098abfff1168"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:15:32.713Z",
            "updatedAt": "2024-07-13T09:41:25.184Z",
            "__v": 0
        },
        {
            "_id": "6692458690b4098abffeed14",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862196152.scaled_1000165057.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "كيبا",
                    "state": true,
                    "_id": "6692458690b4098abffeed15"
                },
                {
                    "answer": "كورتوا ",
                    "state": false,
                    "_id": "6692458690b4098abffeed16"
                },
                {
                    "answer": "لونين",
                    "state": false,
                    "_id": "6692458690b4098abffeed17"
                },
                {
                    "answer": "نافاز ",
                    "state": false,
                    "_id": "6692458690b4098abffeed18"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:14:46.857Z",
            "updatedAt": "2024-07-13T09:14:46.857Z",
            "__v": 0
        },
        {
            "_id": "6692454290b4098abffeec18",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862076530.scaled_1000165061.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "لونين ",
                    "state": true,
                    "_id": "6692454290b4098abffeec19"
                },
                {
                    "answer": "كورتوا ",
                    "state": false,
                    "_id": "6692454290b4098abffeec1a"
                },
                {
                    "answer": "كيبا",
                    "state": false,
                    "_id": "6692454290b4098abffeec1b"
                },
                {
                    "answer": "سيمن",
                    "state": false,
                    "_id": "6692454290b4098abffeec1c"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:13:38.249Z",
            "updatedAt": "2024-07-13T09:13:38.249Z",
            "__v": 0
        },
        {
            "_id": "669244f690b4098abffeeb1c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720862019619.scaled_1000165060.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "خوسيلوه ",
                    "state": true,
                    "_id": "669244f690b4098abffeeb1d"
                },
                {
                    "answer": "بينزيما ",
                    "state": false,
                    "_id": "669244f690b4098abffeeb1e"
                },
                {
                    "answer": "رونالدو ",
                    "state": false,
                    "_id": "669244f690b4098abffeeb1f"
                },
                {
                    "answer": "صلاح ",
                    "state": false,
                    "_id": "669244f690b4098abffeeb20"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:12:22.666Z",
            "updatedAt": "2024-07-13T09:12:22.666Z",
            "__v": 0
        },
        {
            "_id": "6692449d90b4098abffeea1a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720861984939.scaled_1000165063.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "رونالدو ",
                    "state": false,
                    "_id": "6692449d90b4098abffeea1b"
                },
                {
                    "answer": "دي ماريا ",
                    "state": false,
                    "_id": "6692449d90b4098abffeea1c"
                },
                {
                    "answer": "اسكو",
                    "state": true,
                    "_id": "6692449d90b4098abffeea1d"
                },
                {
                    "answer": "اوزيل",
                    "state": false,
                    "_id": "6692449d90b4098abffeea1e"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:10:53.164Z",
            "updatedAt": "2024-07-13T09:10:53.164Z",
            "__v": 0
        },
        {
            "_id": "6692442c90b4098abffee91e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668bee1f41a92db3974dc27c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "6690288d90b4098abff20dcd"
            ],
            "picture": "uploads/questions/1720861889615.scaled_1000165045.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "ميسي",
                    "state": false,
                    "_id": "6692442c90b4098abffee91f"
                },
                {
                    "answer": "جريزمان ",
                    "state": true,
                    "_id": "6692442c90b4098abffee920"
                },
                {
                    "answer": "صلاح ",
                    "state": false,
                    "_id": "6692442c90b4098abffee921"
                },
                {
                    "answer": "مارادونا ",
                    "state": false,
                    "_id": "6692442c90b4098abffee922"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:09:00.184Z",
            "updatedAt": "2024-07-13T09:09:00.184Z",
            "__v": 0
        },
        {
            "_id": "669243f290b4098abffee900",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم الفرنك السويسري كعملة رسمية؟",
            "answers": [
                {
                    "answer": "سويسر",
                    "state": true,
                    "_id": "669243f290b4098abffee901"
                },
                {
                    "answer": "ليختنشتاين ",
                    "state": true,
                    "_id": "669243f290b4098abffee902"
                },
                {
                    "answer": "كامبيوني دي إيتاليا",
                    "state": true,
                    "_id": "669243f290b4098abffee903"
                },
                {
                    "answer": "بوسينغن وهوخراين",
                    "state": true,
                    "_id": "669243f290b4098abffee904"
                },
                {
                    "answer": "سان بارتيليمي",
                    "state": true,
                    "_id": "669243f290b4098abffee905"
                },
                {
                    "answer": "الدنمارك",
                    "state": false,
                    "_id": "669243f290b4098abffee906"
                },
                {
                    "answer": "نيوزيلندا ",
                    "state": false,
                    "_id": "669243f290b4098abffee907"
                },
                {
                    "answer": "الإكوادور ",
                    "state": false,
                    "_id": "669243f290b4098abffee908"
                },
                {
                    "answer": "السلفادور ",
                    "state": false,
                    "_id": "669243f290b4098abffee909"
                },
                {
                    "answer": "بنما",
                    "state": false,
                    "_id": "669243f290b4098abffee90a"
                },
                {
                    "answer": "جزر مارشال",
                    "state": false,
                    "_id": "669243f290b4098abffee90b"
                },
                {
                    "answer": "جزر القمر",
                    "state": false,
                    "_id": "669243f290b4098abffee90c"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T09:08:02.150Z",
            "updatedAt": "2024-07-13T09:08:02.150Z",
            "__v": 0
        },
        {
            "_id": "6692417090b4098abffee60c",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم النغولتروم كعملة رسمية ؟",
            "answers": [
                {
                    "answer": "بوتان",
                    "state": true,
                    "_id": "6692417090b4098abffee60d"
                },
                {
                    "answer": "الهند ",
                    "state": false,
                    "_id": "6692417090b4098abffee60e"
                },
                {
                    "answer": "نيبال",
                    "state": false,
                    "_id": "6692417090b4098abffee60f"
                },
                {
                    "answer": "بنغلاديش ",
                    "state": false,
                    "_id": "6692417090b4098abffee610"
                },
                {
                    "answer": "كينيا ",
                    "state": false,
                    "_id": "6692417090b4098abffee611"
                },
                {
                    "answer": "الصومال",
                    "state": false,
                    "_id": "6692417090b4098abffee612"
                },
                {
                    "answer": "جيبوتي",
                    "state": false,
                    "_id": "6692417090b4098abffee613"
                },
                {
                    "answer": "اثيوبيا ",
                    "state": false,
                    "_id": "6692417090b4098abffee614"
                },
                {
                    "answer": "كولومبيا ",
                    "state": false,
                    "_id": "6692417090b4098abffee615"
                },
                {
                    "answer": "الإكوادور ",
                    "state": false,
                    "_id": "6692417090b4098abffee616"
                },
                {
                    "answer": "تشيلي",
                    "state": false,
                    "_id": "6692417090b4098abffee617"
                },
                {
                    "answer": "الارجنتين ",
                    "state": false,
                    "_id": "6692417090b4098abffee618"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T08:57:20.600Z",
            "updatedAt": "2024-07-13T08:57:20.600Z",
            "__v": 0
        },
        {
            "_id": "66923d9b90b4098abffedad2",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم الناكفا \"النفقة\"كعملة رسمية ؟",
            "answers": [
                {
                    "answer": "إريتريا ",
                    "state": true,
                    "_id": "66923d9b90b4098abffedad3"
                },
                {
                    "answer": "اثيوبيا ",
                    "state": false,
                    "_id": "66923d9b90b4098abffedad4"
                },
                {
                    "answer": "جيبوتي ",
                    "state": false,
                    "_id": "66923d9b90b4098abffedad5"
                },
                {
                    "answer": "الصومال",
                    "state": false,
                    "_id": "66923d9b90b4098abffedad6"
                },
                {
                    "answer": "كينيا",
                    "state": false,
                    "_id": "66923d9b90b4098abffedad7"
                },
                {
                    "answer": "نيبال",
                    "state": false,
                    "_id": "66923d9b90b4098abffedad8"
                },
                {
                    "answer": "تشيلي",
                    "state": false,
                    "_id": "66923d9b90b4098abffedad9"
                },
                {
                    "answer": "كولومبيا ",
                    "state": false,
                    "_id": "66923d9b90b4098abffedada"
                },
                {
                    "answer": "بيرو",
                    "state": false,
                    "_id": "66923d9b90b4098abffedadb"
                },
                {
                    "answer": "الإكوادور ",
                    "state": false,
                    "_id": "66923d9b90b4098abffedadc"
                },
                {
                    "answer": "بوليفيا ",
                    "state": false,
                    "_id": "66923d9b90b4098abffedadd"
                },
                {
                    "answer": "بنغلاديش ",
                    "state": false,
                    "_id": "66923d9b90b4098abffedade"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T08:40:59.302Z",
            "updatedAt": "2024-07-13T08:40:59.302Z",
            "__v": 0
        },
        {
            "_id": "66923c8090b4098abffedaae",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم اللوتي كعملة رسمية ؟",
            "answers": [
                {
                    "answer": "ليوستو",
                    "state": true,
                    "_id": "669240a490b4098abffee0ce"
                },
                {
                    "answer": "إسواتيني ",
                    "state": false,
                    "_id": "669240a490b4098abffee0cf"
                },
                {
                    "answer": "أوسيتيا الجنوبية ",
                    "state": false,
                    "_id": "669240a490b4098abffee0d0"
                },
                {
                    "answer": "أرمينيا ",
                    "state": false,
                    "_id": "669240a490b4098abffee0d1"
                },
                {
                    "answer": "أذربيجان ",
                    "state": false,
                    "_id": "669240a490b4098abffee0d2"
                },
                {
                    "answer": "جنوب افريقيا ",
                    "state": false,
                    "_id": "669240a490b4098abffee0d3"
                },
                {
                    "answer": "ناميبيا",
                    "state": false,
                    "_id": "669240a490b4098abffee0d4"
                },
                {
                    "answer": "سانت مارتن",
                    "state": false,
                    "_id": "669240a490b4098abffee0d5"
                },
                {
                    "answer": "بونير",
                    "state": false,
                    "_id": "669240a490b4098abffee0d6"
                },
                {
                    "answer": "سابا",
                    "state": false,
                    "_id": "669240a490b4098abffee0d7"
                },
                {
                    "answer": "أبخازيا ",
                    "state": false,
                    "_id": "669240a490b4098abffee0d8"
                },
                {
                    "answer": "جورجيا ",
                    "state": false,
                    "_id": "669240a490b4098abffee0d9"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T08:36:16.487Z",
            "updatedAt": "2024-07-13T08:53:56.292Z",
            "__v": 0
        },
        {
            "_id": "6692370f90b4098abffeda77",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم اللاري كعملة رسمية؟",
            "answers": [
                {
                    "answer": "جورجيا",
                    "state": true,
                    "_id": "6692370f90b4098abffeda78"
                },
                {
                    "answer": "أبخازيا",
                    "state": false,
                    "_id": "6692370f90b4098abffeda79"
                },
                {
                    "answer": "أوسيتيا الجنوبية",
                    "state": false,
                    "_id": "6692370f90b4098abffeda7a"
                },
                {
                    "answer": "أرمينيا",
                    "state": false,
                    "_id": "6692370f90b4098abffeda7b"
                },
                {
                    "answer": "أذربيجان ",
                    "state": false,
                    "_id": "6692370f90b4098abffeda7c"
                },
                {
                    "answer": "سابا",
                    "state": false,
                    "_id": "6692370f90b4098abffeda7d"
                },
                {
                    "answer": "سانت مارتن",
                    "state": false,
                    "_id": "6692370f90b4098abffeda7e"
                },
                {
                    "answer": "بونير",
                    "state": false,
                    "_id": "6692370f90b4098abffeda7f"
                },
                {
                    "answer": "ليسوتو",
                    "state": false,
                    "_id": "6692370f90b4098abffeda80"
                },
                {
                    "answer": "جنوب افريقيا ",
                    "state": false,
                    "_id": "6692370f90b4098abffeda81"
                },
                {
                    "answer": "ناميبيا",
                    "state": false,
                    "_id": "6692370f90b4098abffeda82"
                },
                {
                    "answer": "كوراساو",
                    "state": false,
                    "_id": "6692370f90b4098abffeda83"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T08:13:03.870Z",
            "updatedAt": "2024-07-13T08:13:03.870Z",
            "__v": 0
        },
        {
            "_id": "6692337690b4098abffed0e8",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما  هي الدول التي تستخدم الفلورين كعملة رسمية ؟",
            "answers": [
                {
                    "answer": "اروبا",
                    "state": true,
                    "_id": "669240b690b4098abffee2ad"
                },
                {
                    "answer": "هولندا ",
                    "state": false,
                    "_id": "669240b690b4098abffee2ae"
                },
                {
                    "answer": "ابخازيا",
                    "state": false,
                    "_id": "669240b690b4098abffee2af"
                },
                {
                    "answer": "مصر ",
                    "state": false,
                    "_id": "669240b690b4098abffee2b0"
                },
                {
                    "answer": "جورجيا",
                    "state": false,
                    "_id": "669240b690b4098abffee2b1"
                },
                {
                    "answer": "تركيا ",
                    "state": false,
                    "_id": "669240b690b4098abffee2b2"
                },
                {
                    "answer": "عمان ",
                    "state": false,
                    "_id": "669240b690b4098abffee2b3"
                },
                {
                    "answer": "سوريا ",
                    "state": false,
                    "_id": "669240b690b4098abffee2b4"
                },
                {
                    "answer": "لبنان ",
                    "state": false,
                    "_id": "669240b690b4098abffee2b5"
                },
                {
                    "answer": "الهند ",
                    "state": false,
                    "_id": "669240b690b4098abffee2b6"
                },
                {
                    "answer": "الصومال ",
                    "state": false,
                    "_id": "669240b690b4098abffee2b7"
                },
                {
                    "answer": "السعودية",
                    "state": false,
                    "_id": "669240b690b4098abffee2b8"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:57:42.396Z",
            "updatedAt": "2024-07-13T08:54:14.280Z",
            "__v": 0
        },
        {
            "_id": "6692331890b4098abffece67",
            "section_id": "668102b0593d7a4e225b9148",
            "category_ids": [
                "668a414c8502e7f890885cd5"
            ],
            "user_ids": [
                "668a42628502e7f8909320a0"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "في أي المدن الجزائرية تم بناء برج سانتا كروز الذي أسسه الإسبان ",
            "answers": [
                {
                    "answer": "وهران ",
                    "state": true,
                    "_id": "6692331890b4098abffece68"
                },
                {
                    "answer": "عنابة ",
                    "state": false,
                    "_id": "6692331890b4098abffece69"
                },
                {
                    "answer": "الجزائر ",
                    "state": false,
                    "_id": "6692331890b4098abffece6a"
                },
                {
                    "answer": "تلمسان ",
                    "state": false,
                    "_id": "6692331890b4098abffece6b"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:56:08.543Z",
            "updatedAt": "2024-07-13T07:56:08.543Z",
            "__v": 0
        },
        {
            "_id": "669232ab90b4098abffecc8d",
            "section_id": "668102b0593d7a4e225b9148",
            "category_ids": [
                "668a414c8502e7f890885cd5"
            ],
            "user_ids": [
                "668a42628502e7f8909320a0"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "متى تم تشييد جامع الباشا في دولة الجزائر ",
            "answers": [
                {
                    "answer": "١٧٩٢",
                    "state": false,
                    "_id": "669232ab90b4098abffecc8e"
                },
                {
                    "answer": "١٧٩٣",
                    "state": false,
                    "_id": "669232ab90b4098abffecc8f"
                },
                {
                    "answer": "١٧٩٥",
                    "state": false,
                    "_id": "669232ab90b4098abffecc90"
                },
                {
                    "answer": "١٧٩٦",
                    "state": true,
                    "_id": "669232ab90b4098abffecc91"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:54:19.561Z",
            "updatedAt": "2024-07-13T07:54:19.561Z",
            "__v": 0
        },
        {
            "_id": "6692324b90b4098abffecacd",
            "section_id": "668102b0593d7a4e225b9148",
            "category_ids": [
                "668a414c8502e7f890885cd5"
            ],
            "user_ids": [
                "668a42628502e7f8909320a0"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "يعتبر حي الدرب من أهم المعالم السياحية في أي مدن الجزائرية ",
            "answers": [
                {
                    "answer": "وهران ",
                    "state": true,
                    "_id": "6692324b90b4098abffecace"
                },
                {
                    "answer": "عنابة ",
                    "state": false,
                    "_id": "6692324b90b4098abffecacf"
                },
                {
                    "answer": "قسنطية ",
                    "state": false,
                    "_id": "6692324b90b4098abffecad0"
                },
                {
                    "answer": "الجزائر ",
                    "state": false,
                    "_id": "6692324b90b4098abffecad1"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:52:43.978Z",
            "updatedAt": "2024-07-13T07:52:43.978Z",
            "__v": 0
        },
        {
            "_id": "6692319890b4098abffeca2c",
            "section_id": "668102b0593d7a4e225b9148",
            "category_ids": [
                "668a414c8502e7f890885cd5"
            ],
            "user_ids": [
                "668a42628502e7f8909320a0"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "متى تم تأسيس مدينة قسنطية الجزائرية ",
            "answers": [
                {
                    "answer": "١٤٠٠ قبل الميلاد ",
                    "state": false,
                    "_id": "6692319890b4098abffeca2d"
                },
                {
                    "answer": "١٤٥٠ قبل الميلاد ",
                    "state": true,
                    "_id": "6692319890b4098abffeca2e"
                },
                {
                    "answer": "١٥٠٠ قبل الميلاد ",
                    "state": false,
                    "_id": "6692319890b4098abffeca2f"
                },
                {
                    "answer": "١٥٥٠ قبل الميلاد ",
                    "state": false,
                    "_id": "6692319890b4098abffeca30"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:49:44.617Z",
            "updatedAt": "2024-07-13T07:49:44.617Z",
            "__v": 0
        },
        {
            "_id": "6692318890b4098abffeca1b",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم البات كعملة ؟",
            "answers": [
                {
                    "answer": "تايلاند ",
                    "state": true,
                    "_id": "6692318890b4098abffeca1c"
                },
                {
                    "answer": "هولندا",
                    "state": false,
                    "_id": "6692318890b4098abffeca1d"
                },
                {
                    "answer": "اوروبا ",
                    "state": false,
                    "_id": "6692318890b4098abffeca1e"
                },
                {
                    "answer": "سانت مارتن",
                    "state": false,
                    "_id": "6692318890b4098abffeca1f"
                },
                {
                    "answer": "جورجيا",
                    "state": false,
                    "_id": "6692318890b4098abffeca20"
                },
                {
                    "answer": "مصر",
                    "state": false,
                    "_id": "6692318890b4098abffeca21"
                },
                {
                    "answer": "عمان ",
                    "state": false,
                    "_id": "6692318890b4098abffeca22"
                },
                {
                    "answer": "سوريا ",
                    "state": false,
                    "_id": "6692318890b4098abffeca23"
                },
                {
                    "answer": "قبرص",
                    "state": false,
                    "_id": "6692318890b4098abffeca24"
                },
                {
                    "answer": "تركيا ",
                    "state": false,
                    "_id": "6692318890b4098abffeca25"
                },
                {
                    "answer": "الهند ",
                    "state": false,
                    "_id": "6692318890b4098abffeca26"
                },
                {
                    "answer": "نيبال",
                    "state": false,
                    "_id": "6692318890b4098abffeca27"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:49:28.870Z",
            "updatedAt": "2024-07-13T07:49:28.870Z",
            "__v": 0
        },
        {
            "_id": "669230f190b4098abffec981",
            "section_id": "668102b0593d7a4e225b9148",
            "category_ids": [
                "668a414c8502e7f890885cd5"
            ],
            "user_ids": [
                "668a42628502e7f8909320a0"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "كم قرن مر على إنشاء الحي العتيق في مدينة الجزائر ",
            "answers": [
                {
                    "answer": "١٥",
                    "state": false,
                    "_id": "669230f190b4098abffec982"
                },
                {
                    "answer": "٢٠",
                    "state": false,
                    "_id": "669230f190b4098abffec983"
                },
                {
                    "answer": "٢٥",
                    "state": true,
                    "_id": "669230f190b4098abffec984"
                },
                {
                    "answer": "٣٠",
                    "state": false,
                    "_id": "669230f190b4098abffec985"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:46:57.948Z",
            "updatedAt": "2024-07-13T07:46:57.948Z",
            "__v": 0
        },
        {
            "_id": "6692309b90b4098abffec8d8",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم الراند كعملة؟",
            "answers": [
                {
                    "answer": "زامبيا ",
                    "state": true,
                    "_id": "6692309b90b4098abffec8d9"
                },
                {
                    "answer": "مصر",
                    "state": false,
                    "_id": "6692309b90b4098abffec8da"
                },
                {
                    "answer": "السعودية",
                    "state": false,
                    "_id": "6692309b90b4098abffec8db"
                },
                {
                    "answer": "الامارات",
                    "state": false,
                    "_id": "6692309b90b4098abffec8dc"
                },
                {
                    "answer": "سوريا ",
                    "state": false,
                    "_id": "6692309b90b4098abffec8dd"
                },
                {
                    "answer": "هولندا ",
                    "state": false,
                    "_id": "6692309b90b4098abffec8de"
                },
                {
                    "answer": "اوروبا",
                    "state": false,
                    "_id": "6692309b90b4098abffec8df"
                },
                {
                    "answer": "سانت مارتن ",
                    "state": false,
                    "_id": "6692309b90b4098abffec8e0"
                },
                {
                    "answer": "تركيا",
                    "state": false,
                    "_id": "6692309b90b4098abffec8e1"
                },
                {
                    "answer": "لبنان",
                    "state": false,
                    "_id": "6692309b90b4098abffec8e2"
                },
                {
                    "answer": "عمان ",
                    "state": false,
                    "_id": "6692309b90b4098abffec8e3"
                },
                {
                    "answer": "جورجيا",
                    "state": false,
                    "_id": "6692309b90b4098abffec8e4"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:45:31.117Z",
            "updatedAt": "2024-07-13T07:45:31.117Z",
            "__v": 0
        },
        {
            "_id": "6692309690b4098abffec8cf",
            "section_id": "668102b0593d7a4e225b9148",
            "category_ids": [
                "668a414c8502e7f890885cd5"
            ],
            "user_ids": [
                "668a42628502e7f8909320a0"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "في أي مدينة يوجد حي القصبة العتيق في الجزائر ",
            "answers": [
                {
                    "answer": "الجزائر ",
                    "state": true,
                    "_id": "6692309690b4098abffec8d0"
                },
                {
                    "answer": "قسنطية ",
                    "state": false,
                    "_id": "6692309690b4098abffec8d1"
                },
                {
                    "answer": "عنابة ",
                    "state": false,
                    "_id": "6692309690b4098abffec8d2"
                },
                {
                    "answer": "وهران ",
                    "state": false,
                    "_id": "6692309690b4098abffec8d3"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:45:26.708Z",
            "updatedAt": "2024-07-13T07:45:26.708Z",
            "__v": 0
        },
        {
            "_id": "66922ddc90b4098abffec81c",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم الراند كعملة ؟",
            "answers": [
                {
                    "answer": "جنوب افريقيا ",
                    "state": true,
                    "_id": "66922ddc90b4098abffec81d"
                },
                {
                    "answer": "ناميبيا ",
                    "state": true,
                    "_id": "66922ddc90b4098abffec81e"
                },
                {
                    "answer": "ليسوتو",
                    "state": true,
                    "_id": "66922ddc90b4098abffec81f"
                },
                {
                    "answer": "إسواتيني",
                    "state": true,
                    "_id": "66922ddc90b4098abffec820"
                },
                {
                    "answer": "مصر",
                    "state": false,
                    "_id": "66922ddc90b4098abffec821"
                },
                {
                    "answer": "فيتنام",
                    "state": false,
                    "_id": "66922ddc90b4098abffec822"
                },
                {
                    "answer": "كمبوديا ",
                    "state": false,
                    "_id": "66922ddc90b4098abffec823"
                },
                {
                    "answer": "الامارات ",
                    "state": false,
                    "_id": "66922ddc90b4098abffec824"
                },
                {
                    "answer": "عمان",
                    "state": false,
                    "_id": "66922ddc90b4098abffec825"
                },
                {
                    "answer": "سوريا",
                    "state": false,
                    "_id": "66922ddc90b4098abffec826"
                },
                {
                    "answer": "لبنان ",
                    "state": false,
                    "_id": "66922ddc90b4098abffec827"
                },
                {
                    "answer": "تايلاند ",
                    "state": false,
                    "_id": "66922ddc90b4098abffec828"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:33:48.270Z",
            "updatedAt": "2024-07-13T07:33:48.270Z",
            "__v": 0
        },
        {
            "_id": "66922cd590b4098abffec7f8",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم الكواشا كعملة؟",
            "answers": [
                {
                    "answer": "زامبيا ",
                    "state": true,
                    "_id": "66922cd590b4098abffec7f9"
                },
                {
                    "answer": "مالاي",
                    "state": true,
                    "_id": "66922cd590b4098abffec7fa"
                },
                {
                    "answer": "مصر",
                    "state": false,
                    "_id": "66922cd590b4098abffec7fb"
                },
                {
                    "answer": "السعودية",
                    "state": false,
                    "_id": "66922cd590b4098abffec7fc"
                },
                {
                    "answer": "سوريا",
                    "state": false,
                    "_id": "66922cd590b4098abffec7fd"
                },
                {
                    "answer": "جنوب افريقيا ",
                    "state": false,
                    "_id": "66922cd590b4098abffec7fe"
                },
                {
                    "answer": "روسيا",
                    "state": false,
                    "_id": "66922cd590b4098abffec7ff"
                },
                {
                    "answer": "الدنمارك ",
                    "state": false,
                    "_id": "66922cd590b4098abffec800"
                },
                {
                    "answer": "نيوزيلندا ",
                    "state": false,
                    "_id": "66922cd590b4098abffec801"
                },
                {
                    "answer": "المكسيك ",
                    "state": false,
                    "_id": "66922cd590b4098abffec802"
                },
                {
                    "answer": "الولايات المتحدة ",
                    "state": false,
                    "_id": "66922cd590b4098abffec803"
                },
                {
                    "answer": "الامارات العربية ",
                    "state": false,
                    "_id": "66922cd590b4098abffec804"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:29:25.695Z",
            "updatedAt": "2024-07-13T07:29:25.695Z",
            "__v": 0
        },
        {
            "_id": "66922bc090b4098abffec7d4",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم الروبل كعملة ؟",
            "answers": [
                {
                    "answer": "روسيا الاتحادية ",
                    "state": true,
                    "_id": "66922bc090b4098abffec7d5"
                },
                {
                    "answer": "روسيا البيضاء",
                    "state": true,
                    "_id": "66922bc090b4098abffec7d6"
                },
                {
                    "answer": "أوسيتيا الجنوبية",
                    "state": true,
                    "_id": "66922bc090b4098abffec7d7"
                },
                {
                    "answer": "أبخازيا",
                    "state": true,
                    "_id": "66922bc090b4098abffec7d8"
                },
                {
                    "answer": "ترانسنيستريا ",
                    "state": true,
                    "_id": "66922bc090b4098abffec7d9"
                },
                {
                    "answer": "بيلاروسيا ",
                    "state": true,
                    "_id": "66922bc090b4098abffec7da"
                },
                {
                    "answer": "مصر",
                    "state": false,
                    "_id": "66922bc090b4098abffec7db"
                },
                {
                    "answer": "عمان ",
                    "state": false,
                    "_id": "66922bc090b4098abffec7dc"
                },
                {
                    "answer": "سوريا",
                    "state": false,
                    "_id": "66922bc090b4098abffec7dd"
                },
                {
                    "answer": "مالاي",
                    "state": false,
                    "_id": "66922bc090b4098abffec7de"
                },
                {
                    "answer": "زيمبابوي ",
                    "state": false,
                    "_id": "66922bc090b4098abffec7df"
                },
                {
                    "answer": "السعودية",
                    "state": false,
                    "_id": "66922bc090b4098abffec7e0"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:24:48.011Z",
            "updatedAt": "2024-07-13T07:24:48.011Z",
            "__v": 0
        },
        {
            "_id": "6692296e90b4098abffec7b0",
            "section_id": "668107d8593d7a4e225b916d",
            "category_ids": [
                "668c915e90b4098abfddacd6"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "multipale",
            "text": "ما هي الدول التي تستخدم الكرونا ؟",
            "answers": [
                {
                    "answer": "التشيك ",
                    "state": true,
                    "_id": "6692296e90b4098abffec7b1"
                },
                {
                    "answer": "سلوفاكيا ",
                    "state": true,
                    "_id": "6692296e90b4098abffec7b2"
                },
                {
                    "answer": "إستونيا ",
                    "state": true,
                    "_id": "6692296e90b4098abffec7b3"
                },
                {
                    "answer": "السويد",
                    "state": true,
                    "_id": "6692296e90b4098abffec7b4"
                },
                {
                    "answer": "الدنمارك ",
                    "state": true,
                    "_id": "6692296e90b4098abffec7b5"
                },
                {
                    "answer": "النرويج ",
                    "state": true,
                    "_id": "6692296e90b4098abffec7b6"
                },
                {
                    "answer": "السعودية ",
                    "state": false,
                    "_id": "6692296e90b4098abffec7b7"
                },
                {
                    "answer": "فلسطين ",
                    "state": false,
                    "_id": "6692296e90b4098abffec7b8"
                },
                {
                    "answer": "عمان",
                    "state": false,
                    "_id": "6692296e90b4098abffec7b9"
                },
                {
                    "answer": "لبنان",
                    "state": false,
                    "_id": "6692296e90b4098abffec7ba"
                },
                {
                    "answer": "سوريا",
                    "state": false,
                    "_id": "6692296e90b4098abffec7bb"
                },
                {
                    "answer": "مصر",
                    "state": false,
                    "_id": "6692296e90b4098abffec7bc"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T07:14:54.411Z",
            "updatedAt": "2024-07-13T07:14:54.411Z",
            "__v": 0
        }
    ];

// console.log(onlineGameBot(questions, 0.6));

console.log(generateRandomBot([]))