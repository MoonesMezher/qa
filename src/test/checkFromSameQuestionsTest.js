const check = (arr1, arr2) => {
    const output = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if(arr1[i]?._id === arr2[j]._id) {
                output.push(arr1[i]?._id);
            }
        }
    }
    console.log("Count: ", output.length);
    console.log("#######################",);
    console.log(output);
}

const arr1 = [
        {
            "_id": "669ae8c3b22d8881b4d70b72",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721428248787.scaled_1000062867.jpg",
            "type": "true-false",
            "text": "شعار نادي ويغان اتلتيك ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66817645593d7a4e2261092e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719760515993.scaled_1000224304.jpg",
            "type": "normal",
            "text": "أين يتواجد المقر الرئيسي للاتحاد الدولي لكرة القدم \"فيفا\"؟",
            "answers": [
                {
                    "answer": "ألمانيا",
                    "state": false,
                    "_id": "66817645593d7a4e2261092f"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "66817645593d7a4e22610930"
                },
                {
                    "answer": "سويسرا",
                    "state": true,
                    "_id": "66817645593d7a4e22610931"
                },
                {
                    "answer": "إسبانيا",
                    "state": false,
                    "_id": "66817645593d7a4e22610932"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:14:13.854Z",
            "updatedAt": "2024-10-03T16:51:28.524Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c33ce41a92db397f11a01",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720464397313.scaled_1000058650.jpg",
            "type": "true-false",
            "text": "شعار نادي أرسنال ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681b5d1ab23c4c91c65f59b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1986؟",
            "answers": [
                {
                    "answer": "المكسيك",
                    "state": true,
                    "_id": "6681b5d1ab23c4c91c65f59c"
                },
                {
                    "answer": "إيطاليا",
                    "state": false,
                    "_id": "6681b5d1ab23c4c91c65f59d"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "6681b5d1ab23c4c91c65f59e"
                },
                {
                    "answer": "البرازيل",
                    "state": false,
                    "_id": "6681b5d1ab23c4c91c65f59f"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T19:45:21.932Z",
            "updatedAt": "2024-10-03T16:51:28.556Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698efffb22d8881b4cd4ca1",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "فاز نادي برشلونة بالثلاثية في موسم 2015-2014",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6685beaf03d8da9b7b6afb9a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "متى تأسس الاتحاد العربي السعودي لكرة القدم؟",
            "answers": [
                {
                    "answer": "1955",
                    "state": false,
                    "_id": "6685beaf03d8da9b7b6afb9b"
                },
                {
                    "answer": "1956",
                    "state": true,
                    "_id": "6685beaf03d8da9b7b6afb9c"
                },
                {
                    "answer": "1957",
                    "state": false,
                    "_id": "6685beaf03d8da9b7b6afb9d"
                },
                {
                    "answer": "1958",
                    "state": false,
                    "_id": "6685beaf03d8da9b7b6afb9e"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T21:12:15.961Z",
            "updatedAt": "2024-10-03T16:51:53.960Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669ae3f2b22d8881b4d6f2f2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721427029727.scaled_1000062864.jpg",
            "type": "true-false",
            "text": "شعار نادي هال سيتي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6692f91390b4098abf04ff23",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bed593d7a4e225b92d6",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1720908200831.scaled_1000051812.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "مروان محسن ",
                    "state": true,
                    "_id": "6692f91390b4098abf04ff24"
                },
                {
                    "answer": "محمود كهربا ",
                    "state": false,
                    "_id": "6692f91390b4098abf04ff25"
                },
                {
                    "answer": "وسام ابو علي ",
                    "state": false,
                    "_id": "6692f91390b4098abf04ff26"
                },
                {
                    "answer": "زيزو ",
                    "state": false,
                    "_id": "6692f91390b4098abf04ff27"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T22:00:51.014Z",
            "updatedAt": "2024-10-03T16:52:29.916Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669d50e6b22d8881b4e3e68a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b6f593d7a4e225b925f",
                "66811b7f593d7a4e225b926d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721585959585.scaled_1000063530.jpg",
            "type": "true-false",
            "text": "شعار نادي فيلهيلم تيلبورع ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66832befba38dd101b2a74a2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827f03844d311d798c6347"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من أول لاعب في العالم حصل على جائزة الكرة الذهبية في كرة القدم؟",
            "answers": [
                {
                    "answer": "ريموند كوبا",
                    "state": false,
                    "_id": "66832befba38dd101b2a74a3"
                },
                {
                    "answer": "ستانلي ماثيوس",
                    "state": true,
                    "_id": "66832befba38dd101b2a74a4"
                },
                {
                    "answer": "ألفريدو دي ستيفانو ",
                    "state": false,
                    "_id": "66832befba38dd101b2a74a5"
                },
                {
                    "answer": "بيلي رايت",
                    "state": false,
                    "_id": "66832befba38dd101b2a74a6"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T22:21:35.634Z",
            "updatedAt": "2024-10-03T16:51:40.217Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669e746fb22d8881b4eaf338",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "أينزو فرنانديز  هو صاحب جائزة أفضل لاعب شاب فى كأس العالم ٢٠١٨",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681e437844d311d791dd0ed",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هي أول نسخة من كأس العالم لكرة القدم تفوز بها البرازيل؟",
            "answers": [
                {
                    "answer": "1958",
                    "state": true,
                    "_id": "6681e437844d311d791dd0ee"
                },
                {
                    "answer": "1962",
                    "state": false,
                    "_id": "6681e437844d311d791dd0ef"
                },
                {
                    "answer": "1970",
                    "state": false,
                    "_id": "6681e437844d311d791dd0f0"
                },
                {
                    "answer": "1994",
                    "state": false,
                    "_id": "6681e437844d311d791dd0f1"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:03:19.891Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6692ea6290b4098abf049349",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720904352597.scaled_1000060923.jpg",
            "type": "true-false",
            "text": "شعار نادي شالكه ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66812192593d7a4e225b950d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bfd593d7a4e225b92eb"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719738878861.scaled_1000224281.jpg",
            "type": "normal",
            "text": "من توج ببطولة دوري أبطال أفريقيا موسم 2023-2024؟",
            "answers": [
                {
                    "answer": "الوداد المغربي",
                    "state": false,
                    "_id": "66812192593d7a4e225b950e"
                },
                {
                    "answer": "الترجي التونسي",
                    "state": false,
                    "_id": "66812192593d7a4e225b950f"
                },
                {
                    "answer": "الأهلي المصري ",
                    "state": true,
                    "_id": "66812192593d7a4e225b9510"
                },
                {
                    "answer": "صن داونز الحنوب أفريقي",
                    "state": false,
                    "_id": "66812192593d7a4e225b9511"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T09:12:50.445Z",
            "updatedAt": "2024-10-03T16:51:28.506Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668cf6a490b4098abfdf33fc",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720514322364.scaled_1000058642.jpg",
            "type": "true-false",
            "text": "شعار نادي بروسيا دورتموند ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668451de42cb22569bcfa35f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "66814fc6593d7a4e225bbcc2"
            ],
            "picture": "uploads/questions/1719947877080.scaled_Ù¢Ù Ù¢Ù¤Ù Ù§Ù Ù¢_Ù¢Ù¢Ù¡Ù¥Ù Ù¡.jpg",
            "type": "normal",
            "text": "من هو أكثر لاعب فاز بجائزة بيتشيتشي الذهبية في تاريخ الدوري الإسباني؟",
            "answers": [
                {
                    "answer": "أنخيل دي ماريا",
                    "state": false,
                    "_id": "6696f7fd079f88fa2a4277c4"
                },
                {
                    "answer": "ليونيل ميسي",
                    "state": true,
                    "_id": "6696f7fd079f88fa2a4277c5"
                },
                {
                    "answer": " كريستيانو رونالدو",
                    "state": false,
                    "_id": "6696f7fd079f88fa2a4277c6"
                },
                {
                    "answer": "سيرجيو راموس",
                    "state": false,
                    "_id": "6696f7fd079f88fa2a4277c7"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T19:15:42.969Z",
            "updatedAt": "2024-10-03T16:51:44.815Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c348341a92db397fa70a3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720464635208.scaled_1000058652.jpg",
            "type": "true-false",
            "text": "شعار نادي ليفربول ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66817289593d7a4e225fd458",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759598333.scaled_1000224304.jpg",
            "type": "normal",
            "text": "كأس العالم لكرة القدم يقام كل كم عام؟",
            "answers": [
                {
                    "answer": "عامين",
                    "state": false,
                    "_id": "66817289593d7a4e225fd459"
                },
                {
                    "answer": "3 أعوام",
                    "state": false,
                    "_id": "66817289593d7a4e225fd45a"
                },
                {
                    "answer": "4 أعوام",
                    "state": true,
                    "_id": "66817289593d7a4e225fd45b"
                },
                {
                    "answer": "6 أعوام",
                    "state": false,
                    "_id": "66817289593d7a4e225fd45c"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T14:58:17.947Z",
            "updatedAt": "2024-10-03T16:51:28.522Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669abbf9b22d8881b4d5f443",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721416758246.scaled_1000062860.jpg",
            "type": "true-false",
            "text": "شعار نادي سوانزي سيتي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66812e7e593d7a4e225b964e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811890593d7a4e225b921b",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811ba1593d7a4e225b928c",
                "66811bc5593d7a4e225b92af",
                "66811c53593d7a4e225b9394"
            ],
            "user_ids": [
                "66810829593d7a4e225b918b"
            ],
            "picture": "uploads/questions/1719742197369.scaled_1000055217.jpg",
            "type": "normal",
            "text": "ما هو الاسم الأول للاعب ميسي؟",
            "answers": [
                {
                    "answer": "ليونيل",
                    "state": true,
                    "_id": "66812e7e593d7a4e225b964f"
                },
                {
                    "answer": "كريستيانو",
                    "state": false,
                    "_id": "66812e7e593d7a4e225b9650"
                },
                {
                    "answer": "كارلوس",
                    "state": false,
                    "_id": "66812e7e593d7a4e225b9651"
                },
                {
                    "answer": "سيمون",
                    "state": false,
                    "_id": "66812e7e593d7a4e225b9652"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T10:07:58.318Z",
            "updatedAt": "2024-10-03T16:51:28.506Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c2b2241a92db397720a0f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720462192551.scaled_1000058656.jpg",
            "type": "true-false",
            "text": "شعار نادي انتر ميلان ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6685c4eb03d8da9b7bca6562",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل الدوري السعودي لكرة القدم لموسم 1987-1988؟",
            "answers": [
                {
                    "answer": "الاتفاق",
                    "state": false,
                    "_id": "6685c4eb03d8da9b7bca6563"
                },
                {
                    "answer": "الاتحاد",
                    "state": false,
                    "_id": "6685c4eb03d8da9b7bca6564"
                },
                {
                    "answer": "الهلال",
                    "state": true,
                    "_id": "6685c4eb03d8da9b7bca6565"
                },
                {
                    "answer": "الاتحاد",
                    "state": false,
                    "_id": "6685c4eb03d8da9b7bca6566"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T21:38:51.058Z",
            "updatedAt": "2024-10-03T16:51:53.961Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b3c2a6e5f2103ccff90a49",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "668beff141a92db39764c4ee",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1723056982011.scaled_1000172923.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع نادي مانشستر سيتي بالدوري الانجليزي موسم ٢٠١٢-٢٠١٣؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6694e032f45a05d62e75a1f3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b94593d7a4e225b927c",
                "668beff141a92db39764c4ee",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721032858010.scaled_1000052294.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "ديبروين ",
                    "state": true,
                    "_id": "6694e032f45a05d62e75a1f4"
                },
                {
                    "answer": "ثيو هرنانديز ",
                    "state": false,
                    "_id": "6694e032f45a05d62e75a1f5"
                },
                {
                    "answer": "نيمار ",
                    "state": false,
                    "_id": "6694e032f45a05d62e75a1f6"
                },
                {
                    "answer": "سانشيز ",
                    "state": false,
                    "_id": "6694e032f45a05d62e75a1f7"
                }
            ],
            "active": true,
            "createdAt": "2024-07-15T08:39:14.328Z",
            "updatedAt": "2024-10-03T16:52:32.754Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668d8b6190b4098abfe3c805",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720552331592.scaled_1000058797.jpg",
            "type": "true-false",
            "text": "شعار نادي سبورتنج لشبونه ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6685c5de03d8da9b7bdd8351",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل الدوري السعودي لكرة القدم لموسم 1994-1995؟",
            "answers": [
                {
                    "answer": "النصر",
                    "state": true,
                    "_id": "6685c5de03d8da9b7bdd8352"
                },
                {
                    "answer": "الهلال",
                    "state": false,
                    "_id": "6685c5de03d8da9b7bdd8353"
                },
                {
                    "answer": "الاتحاد",
                    "state": false,
                    "_id": "6685c5de03d8da9b7bdd8354"
                },
                {
                    "answer": "الشباب",
                    "state": false,
                    "_id": "6685c5de03d8da9b7bdd8355"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T21:42:54.821Z",
            "updatedAt": "2024-10-03T16:51:53.961Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668ea5c290b4098abfe8410f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720624582852.scaled_1000059026.jpg",
            "type": "true-false",
            "text": "شعار نادي وست هام يونايتد ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66827419844d311d797a9e76",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c60593d7a4e225b93ae"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من فاز ببطولة كأس العالم لكرة السلة عام 1950؟",
            "answers": [
                {
                    "answer": "البرازيل ",
                    "state": false,
                    "_id": "66827419844d311d797a9e77"
                },
                {
                    "answer": "تشيلي ",
                    "state": false,
                    "_id": "66827419844d311d797a9e78"
                },
                {
                    "answer": "الأرجنتين ",
                    "state": true,
                    "_id": "66827419844d311d797a9e79"
                },
                {
                    "answer": "الولايات المتحدة الأمريكية ",
                    "state": false,
                    "_id": "66827419844d311d797a9e7a"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T09:17:13.407Z",
            "updatedAt": "2024-10-03T16:51:28.563Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db1d290b4098abfe4b458",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562233774.scaled_1000058815.jpg",
            "type": "true-false",
            "text": "شعار نادي روما",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668173f0593d7a4e226053b7",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759878781.scaled_1000224304.jpg",
            "type": "normal",
            "text": "في مونديال 1958، من هو المنتخب الوحيد الذي لم يفز عليه البرازيل؟",
            "answers": [
                {
                    "answer": "الأرجنتين",
                    "state": false,
                    "_id": "668173f0593d7a4e226053b8"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "668173f0593d7a4e226053b9"
                },
                {
                    "answer": "إسبانيا",
                    "state": false,
                    "_id": "668173f0593d7a4e226053ba"
                },
                {
                    "answer": "إنجلترا",
                    "state": true,
                    "_id": "668173f0593d7a4e226053bb"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:04:16.561Z",
            "updatedAt": "2024-10-03T16:51:28.523Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66c76b44e5f2103ccf0f3c44",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1724345267384.scaled_1000175011.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو كامبل؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66be6c09e5f2103ccf077751",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beef741a92db3975282a5"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من هو رئيس نادي الرجاء الرياضي في الفترة من 2023 حتى 2024؟",
            "answers": [
                {
                    "answer": "محمد بودريقة",
                    "state": true,
                    "_id": "66be6c09e5f2103ccf077752"
                },
                {
                    "answer": "عزيز البدراوي",
                    "state": false,
                    "_id": "66be6c09e5f2103ccf077753"
                },
                {
                    "answer": "أنيس محفوظ",
                    "state": false,
                    "_id": "66be6c09e5f2103ccf077754"
                },
                {
                    "answer": "رشيد الأندلسي",
                    "state": false,
                    "_id": "66be6c09e5f2103ccf077755"
                }
            ],
            "active": true,
            "createdAt": "2024-08-15T20:58:49.787Z",
            "updatedAt": "2024-10-03T16:53:36.191Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6692c6ca90b4098abf03d143",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720895194981.scaled_1000060932.jpg",
            "type": "true-false",
            "text": "شعار نادي بروسيا منشنغلادباخ ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66884c296e28e43de1445722",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bfd593d7a4e225b92eb"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حتى عام 2024.. كم مرة شاركت أندية المغرب في نهائي بطولة كأس الكونفدرالية الأفريقية لكرة القدم؟",
            "answers": [
                {
                    "answer": "10 مرات",
                    "state": true,
                    "_id": "66884c296e28e43de1445723"
                },
                {
                    "answer": "7 مرات",
                    "state": false,
                    "_id": "66884c296e28e43de1445724"
                },
                {
                    "answer": "5 مرات",
                    "state": false,
                    "_id": "66884c296e28e43de1445725"
                },
                {
                    "answer": "3 مرات",
                    "state": false,
                    "_id": "66884c296e28e43de1445726"
                }
            ],
            "active": true,
            "createdAt": "2024-07-05T19:40:25.522Z",
            "updatedAt": "2024-10-03T16:52:05.415Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668cf62490b4098abfdf2eb0",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720514220818.scaled_1000058640.jpg",
            "type": "true-false",
            "text": "شعار نادي ريال مدريد ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681bb3aab23c4c91c6a36b1",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1930؟",
            "answers": [
                {
                    "answer": "إيطاليا",
                    "state": false,
                    "_id": "6681bb3aab23c4c91c6a36b2"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "6681bb3aab23c4c91c6a36b3"
                },
                {
                    "answer": "البرازيل",
                    "state": false,
                    "_id": "6681bb3aab23c4c91c6a36b4"
                },
                {
                    "answer": "الأوروغواي",
                    "state": true,
                    "_id": "6681bb3aab23c4c91c6a36b5"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T20:08:26.699Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668d9fe090b4098abfe44007",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720557557931.scaled_1000058807.jpg",
            "type": "true-false",
            "text": "شعار نادي مونبيلييه",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66817347593d7a4e225ff2fc",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759800231.scaled_1000224304.jpg",
            "type": "normal",
            "text": "كانت هناك بطولتان لكأس العالم لكرة القدم، فما اسم البطولة الاولى؟",
            "answers": [
                {
                    "answer": "كأس الدول لكرة القدم",
                    "state": false,
                    "_id": "66817347593d7a4e225ff2fd"
                },
                {
                    "answer": "كأس الأفرو أسيوية",
                    "state": false,
                    "_id": "66817347593d7a4e225ff2fe"
                },
                {
                    "answer": "كأس جول ريميه",
                    "state": true,
                    "_id": "66817347593d7a4e225ff2ff"
                },
                {
                    "answer": "كأس المنتخبات لكرة القدم ",
                    "state": false,
                    "_id": "66817347593d7a4e225ff300"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:01:27.948Z",
            "updatedAt": "2024-10-03T16:51:28.522Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669d2d23b22d8881b4e2c5f0",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668f815390b4098abfebed7a"
            ],
            "user_ids": [
                "6695848cf45a05d62e8102b1"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "نادي أتالانتا لم يحقق أي بطولة للدوري الإيطالي في تاريخه؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681b5a9ab23c4c91c65df20",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1982؟",
            "answers": [
                {
                    "answer": "المكسيك ",
                    "state": false,
                    "_id": "6681b5a9ab23c4c91c65df21"
                },
                {
                    "answer": "تشيلي",
                    "state": false,
                    "_id": "6681b5a9ab23c4c91c65df22"
                },
                {
                    "answer": "الأوروغواي",
                    "state": false,
                    "_id": "6681b5a9ab23c4c91c65df23"
                },
                {
                    "answer": "إسبانيا",
                    "state": true,
                    "_id": "6681b5a9ab23c4c91c65df24"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T19:44:41.895Z",
            "updatedAt": "2024-10-03T16:51:28.556Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669ed3f4b22d8881b4ed4dfd",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "حاز الاعب ماتياس زينديلار على جائزة الكرة الفضية بكأس العالم ١٩٣٤ ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6684b21a42cb22569ba1cf5f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66848e3542cb22569b964f92"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت بطولة كأس العالم لكرة اليد عام 1961؟",
            "answers": [
                {
                    "answer": "ألمانيا الغربية",
                    "state": true,
                    "_id": "6684b21a42cb22569ba1cf60"
                },
                {
                    "answer": "تشيكوسلوفاكيا",
                    "state": false,
                    "_id": "6684b21a42cb22569ba1cf61"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "6684b21a42cb22569ba1cf62"
                },
                {
                    "answer": "السويد",
                    "state": false,
                    "_id": "6684b21a42cb22569ba1cf63"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T02:06:18.778Z",
            "updatedAt": "2024-10-03T16:51:49.845Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b7e9b2e5f2103ccffb7699",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1723328970624.scaled_Picsart_24-07-27_23-45-28-052.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع ناديه بايرن ميونيخ بكأس السوبر الاوروبي 2020؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668e4eee90b4098abfe68ef2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "في أي عام تم إدخال الملاكمة النسائية في الألعاب الاولمبية؟",
            "answers": [
                {
                    "answer": "2012",
                    "state": true,
                    "_id": "668e4eee90b4098abfe68ef3"
                },
                {
                    "answer": "2004",
                    "state": false,
                    "_id": "668e4eee90b4098abfe68ef4"
                },
                {
                    "answer": "2008",
                    "state": false,
                    "_id": "668e4eee90b4098abfe68ef5"
                },
                {
                    "answer": "2001",
                    "state": false,
                    "_id": "668e4eee90b4098abfe68ef6"
                }
            ],
            "active": true,
            "createdAt": "2024-07-10T09:05:50.443Z",
            "updatedAt": "2024-10-03T16:52:20.910Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c352741a92db39706d7fd",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720464795009.scaled_1000058646.jpg",
            "type": "true-false",
            "text": "شعار نادي تشيلسي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6683556942cb22569b4edfb8",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "متى تم إلغاء دورة الألعاب الأولمبية؟",
            "answers": [
                {
                    "answer": "1916, 1940, 1988",
                    "state": false,
                    "_id": "6683556942cb22569b4edfb9"
                },
                {
                    "answer": "1916, 1940, 1944",
                    "state": true,
                    "_id": "6683556942cb22569b4edfba"
                },
                {
                    "answer": "1916, 1940, 2020",
                    "state": false,
                    "_id": "6683556942cb22569b4edfbb"
                },
                {
                    "answer": "1916, 1944, 2020",
                    "state": false,
                    "_id": "6683556942cb22569b4edfbc"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T01:18:33.855Z",
            "updatedAt": "2024-10-03T16:51:40.219Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698f02eb22d8881b4cd5941",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "أول لقب دوري اسباني لبرشلونة كان عام 1929",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66853b2503d8da9b7b18c7fd",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66848e3542cb22569b964f92"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت بطولة كأس العالم لكرة اليد عام 2019؟",
            "answers": [
                {
                    "answer": "مصر وتونس",
                    "state": false,
                    "_id": "66853b2503d8da9b7b18c7fe"
                },
                {
                    "answer": "قطر والسعودية",
                    "state": false,
                    "_id": "66853b2503d8da9b7b18c7ff"
                },
                {
                    "answer": "فرنسا وإسبانيا",
                    "state": false,
                    "_id": "66853b2503d8da9b7b18c800"
                },
                {
                    "answer": "الدنمارك وألمانيا",
                    "state": true,
                    "_id": "66853b2503d8da9b7b18c801"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T11:51:01.849Z",
            "updatedAt": "2024-10-03T16:51:49.847Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668cf4f690b4098abfdf248d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720513915767.scaled_1000058644.jpg",
            "type": "true-false",
            "text": "شعار نادي ريفربليت ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668453d042cb22569bdb74aa",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت دورة الألعاب الأولمبية 1964؟",
            "answers": [
                {
                    "answer": "روما",
                    "state": false,
                    "_id": "668453d042cb22569bdb74ab"
                },
                {
                    "answer": "طوكيو",
                    "state": true,
                    "_id": "668453d042cb22569bdb74ac"
                },
                {
                    "answer": "ملبورن ",
                    "state": false,
                    "_id": "668453d042cb22569bdb74ad"
                },
                {
                    "answer": "لندن",
                    "state": false,
                    "_id": "668453d042cb22569bdb74ae"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T19:24:00.674Z",
            "updatedAt": "2024-10-03T16:51:44.815Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db3eb90b4098abfe4c38f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562778543.scaled_1000058823.jpg",
            "type": "true-false",
            "text": "شعار نادي إشبيلية ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6685f2b203d8da9b7b0f3a2a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "كم مرة حقق النصر المركز الثاني في السوبر السعودي لكرة القدم حتى عام 2023؟",
            "answers": [
                {
                    "answer": "مرة واحدة",
                    "state": false,
                    "_id": "6685f2b203d8da9b7b0f3a2b"
                },
                {
                    "answer": "مرتان",
                    "state": true,
                    "_id": "6685f2b203d8da9b7b0f3a2c"
                },
                {
                    "answer": "3 مرات",
                    "state": false,
                    "_id": "6685f2b203d8da9b7b0f3a2d"
                },
                {
                    "answer": "4 مرات",
                    "state": false,
                    "_id": "6685f2b203d8da9b7b0f3a2e"
                }
            ],
            "active": true,
            "createdAt": "2024-07-04T00:54:10.782Z",
            "updatedAt": "2024-10-03T16:51:53.963Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66bbc091e5f2103ccf026337",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bfd593d7a4e225b92eb",
                "668beef741a92db3975282a5"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "حقق الرجاء المغربي وصافة دوري أبطال أفريقيا في 2003؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681d977844d311d790def1f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bed593d7a4e225b92d6"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719785970024.scaled_1000224642.jpg",
            "type": "normal",
            "text": "ما اسم هذا اللقب؟",
            "answers": [
                {
                    "answer": "الدوري الفلسطيني",
                    "state": false,
                    "_id": "6681d977844d311d790def20"
                },
                {
                    "answer": "الدوري المصري",
                    "state": true,
                    "_id": "6681d977844d311d790def21"
                },
                {
                    "answer": "الدوري القطري",
                    "state": false,
                    "_id": "6681d977844d311d790def22"
                },
                {
                    "answer": "الدوري اللبناني",
                    "state": false,
                    "_id": "6681d977844d311d790def23"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T22:17:27.259Z",
            "updatedAt": "2024-10-03T16:51:28.558Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6685670d03d8da9b7bfde116",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720018802128.scaled_1000056607.jpg",
            "type": "true-false",
            "text": "فرنسا هي المنتخب الفائز بكأس العالم لكرة القدم ١٩٣٤",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66853d2003d8da9b7b26d10e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66848e3542cb22569b964f92"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل كأس العالم لكرة اليد 1961؟",
            "answers": [
                {
                    "answer": "السويد",
                    "state": false,
                    "_id": "66853d2003d8da9b7b26d10f"
                },
                {
                    "answer": "ألمانيا",
                    "state": false,
                    "_id": "66853d2003d8da9b7b26d110"
                },
                {
                    "answer": "تشيكوسلوفاكيا",
                    "state": false,
                    "_id": "66853d2003d8da9b7b26d111"
                },
                {
                    "answer": "رومانيا",
                    "state": true,
                    "_id": "66853d2003d8da9b7b26d112"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T11:59:28.928Z",
            "updatedAt": "2024-10-03T16:51:49.847Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6685486603d8da9b7b3a72ed",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720010957238.scaled_1000056607.jpg",
            "type": "true-false",
            "text": "الأوروغواي هي من أحرزت لقب كأس العالم سنة ١٩٣٠؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "669645ed079f88fa2a39f51e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811ba1593d7a4e225b928c",
                "66811c53593d7a4e225b9394",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1721124448451.scaled_1000166583.jpg",
            "type": "normal",
            "text": "ما هي جنسية اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "برازيلي ",
                    "state": true,
                    "_id": "669645ed079f88fa2a39f51f"
                },
                {
                    "answer": "برتغالي ",
                    "state": false,
                    "_id": "669645ed079f88fa2a39f520"
                },
                {
                    "answer": "مصري ",
                    "state": false,
                    "_id": "669645ed079f88fa2a39f521"
                },
                {
                    "answer": "مجري ",
                    "state": false,
                    "_id": "669645ed079f88fa2a39f522"
                }
            ],
            "active": true,
            "createdAt": "2024-07-16T10:05:33.578Z",
            "updatedAt": "2024-10-03T16:52:38.324Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698062ab22d8881b4c7bb8d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "لويس سواريز انضم لنادي برشلونة في عام 2014",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a40ce4b22d8881b406cd55",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bfd593d7a4e225b92eb"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو المنتخب صاحب المركز الثالث بكأس أمم إفريقيا ٢٠١٣ ؟",
            "answers": [
                {
                    "answer": "مالي ",
                    "state": true,
                    "_id": "66a40cf0b22d8881b406cf1e"
                },
                {
                    "answer": "الكونغو ",
                    "state": false,
                    "_id": "66a40cf0b22d8881b406cf1f"
                },
                {
                    "answer": "بوركينا فاسو ",
                    "state": false,
                    "_id": "66a40cf0b22d8881b406cf20"
                },
                {
                    "answer": "نيجيريا ",
                    "state": false,
                    "_id": "66a40cf0b22d8881b406cf21"
                }
            ],
            "active": true,
            "createdAt": "2024-07-26T20:53:56.340Z",
            "updatedAt": "2024-10-03T16:53:08.523Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66a16f62b22d8881b4fcab06",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bfd593d7a4e225b92eb",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721855936036.scaled_1000072017.jpg",
            "type": "true-false",
            "text": "شعار نادي المريخ السوداني ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6684a6c942cb22569b4d0d5f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "في أي موسم حقق مانشستر يونايتد لقب الدوري الإنجليزي لأول مرة؟",
            "answers": [
                {
                    "answer": "موسم 1905-1906",
                    "state": false,
                    "_id": "6684a6c942cb22569b4d0d60"
                },
                {
                    "answer": "موسم 1906-1907",
                    "state": false,
                    "_id": "6684a6c942cb22569b4d0d61"
                },
                {
                    "answer": "موسم 1907-1908",
                    "state": true,
                    "_id": "6684a6c942cb22569b4d0d62"
                },
                {
                    "answer": "موسم 1908-1909",
                    "state": false,
                    "_id": "6684a6c942cb22569b4d0d63"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T01:18:02.000Z",
            "updatedAt": "2024-10-03T16:51:49.845Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6692ce2590b4098abf03fdd6",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720897116408.scaled_1000060929.jpg",
            "type": "true-false",
            "text": "شعار نادي سانت باولي",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66817456593d7a4e22608225",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759999360.scaled_1000224304.jpg",
            "type": "normal",
            "text": "مالدولة التي حققت الرقم القياسي في تسجيل الأهداف في نهائيات كأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "الأرجنتين",
                    "state": false,
                    "_id": "66817456593d7a4e22608226"
                },
                {
                    "answer": "البرازيل",
                    "state": true,
                    "_id": "66817456593d7a4e22608227"
                },
                {
                    "answer": "إسبانيا",
                    "state": false,
                    "_id": "66817456593d7a4e22608228"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "66817456593d7a4e22608229"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:05:58.162Z",
            "updatedAt": "2024-10-03T16:51:28.523Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668d9e0a90b4098abfe430a1",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720557095287.scaled_1000058801.jpg",
            "type": "true-false",
            "text": "شعار نادي كورينثيانز ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6684b05442cb22569b946ad2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66848e3542cb22569b964f92"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هي أبعاد المرمى في كرة اليد؟",
            "answers": [
                {
                    "answer": "عرض3م،ارتفاع2م",
                    "state": true,
                    "_id": "6684b05442cb22569b946ad3"
                },
                {
                    "answer": "عرض4م،ارتفاع3م",
                    "state": false,
                    "_id": "6684b05442cb22569b946ad4"
                },
                {
                    "answer": "عرض5م،ارتفاع4م",
                    "state": false,
                    "_id": "6684b05442cb22569b946ad5"
                },
                {
                    "answer": "عرض6م،ارتفاع4م",
                    "state": false,
                    "_id": "6684b05442cb22569b946ad6"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T01:58:44.481Z",
            "updatedAt": "2024-10-03T16:51:49.845Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698052bb22d8881b4c7b1a3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "بيبي رينا كان حارس مرمى لنادي برشلونة",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6685b52503d8da9b7ba418b4",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66848e3542cb22569b964f92"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل كأس العالم لكرة اليد 1999؟",
            "answers": [
                {
                    "answer": "يوغوسلافيا",
                    "state": false,
                    "_id": "6685b52503d8da9b7ba418b5"
                },
                {
                    "answer": "إسبانيا",
                    "state": false,
                    "_id": "6685b52503d8da9b7ba418b6"
                },
                {
                    "answer": "روسيا",
                    "state": false,
                    "_id": "6685b52503d8da9b7ba418b7"
                },
                {
                    "answer": "السويد",
                    "state": true,
                    "_id": "6685b52503d8da9b7ba418b8"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T20:31:33.620Z",
            "updatedAt": "2024-10-03T16:51:53.960Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db2e590b4098abfe4bc8e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562447025.scaled_1000058819.jpg",
            "type": "true-false",
            "text": "شعار نادي ريال بيتيس ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6683548342cb22569b4a9eb2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو أصل الألعاب الأولمبية؟",
            "answers": [
                {
                    "answer": "اليونان القديمة ",
                    "state": true,
                    "_id": "6683548342cb22569b4a9eb3"
                },
                {
                    "answer": "الولايات المتحدة الأمريكية ",
                    "state": false,
                    "_id": "6683548342cb22569b4a9eb4"
                },
                {
                    "answer": "أفريقيا",
                    "state": false,
                    "_id": "6683548342cb22569b4a9eb5"
                },
                {
                    "answer": "أمريكا الجنوبية ",
                    "state": false,
                    "_id": "6683548342cb22569b4a9eb6"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T01:14:43.661Z",
            "updatedAt": "2024-10-03T16:51:40.219Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66bf44a0e5f2103ccf08ad11",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1723811116353.scaled_1000174497.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره مركزه مهاجم ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6694443bf45a05d62e72bb45",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b6f593d7a4e225b925f",
                "66811b94593d7a4e225b927c",
                "668bee4b41a92db3974e13cd",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1720992920637.scaled_1000052323.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "ستيفان باجيستيك",
                    "state": true,
                    "_id": "6694443bf45a05d62e72bb46"
                },
                {
                    "answer": "رويس",
                    "state": false,
                    "_id": "6694443bf45a05d62e72bb47"
                },
                {
                    "answer": "كاكا",
                    "state": false,
                    "_id": "6694443bf45a05d62e72bb48"
                },
                {
                    "answer": "بيبي",
                    "state": false,
                    "_id": "6694443bf45a05d62e72bb49"
                }
            ],
            "active": true,
            "createdAt": "2024-07-14T21:33:47.216Z",
            "updatedAt": "2024-10-03T16:52:32.751Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66998e2bb22d8881b4d0faf2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811ba1593d7a4e225b928c",
                "668bee5a41a92db3974e3c77"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "في موسم 2006-2005، فاز نادي برشلونة بدوري أبطال أوروبا على حساب أرسنال",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668351d842cb22569b3a54ae",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c60593d7a4e225b93ae",
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من الفائز بالميدالية الذهبية في كرة السلة في أولمبياد موسكو 1980؟",
            "answers": [
                {
                    "answer": "إيطاليا ",
                    "state": false,
                    "_id": "668351d842cb22569b3a54af"
                },
                {
                    "answer": "يوغوسلافيا ",
                    "state": true,
                    "_id": "668351d842cb22569b3a54b0"
                },
                {
                    "answer": "الاتحاد السوفيتي ",
                    "state": false,
                    "_id": "668351d842cb22569b3a54b1"
                },
                {
                    "answer": "الولايات المتحدة الأمريكية ",
                    "state": false,
                    "_id": "668351d842cb22569b3a54b2"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T01:03:20.859Z",
            "updatedAt": "2024-10-03T16:51:40.219Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ad5a38e5f2103ccfdcdb1c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811ba1593d7a4e225b928c",
                "66811bc5593d7a4e225b92af",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722636946781.scaled_1000052667.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو اسينسيو ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66826de8844d311d79708abd",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c60593d7a4e225b93ae"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "متى بدأ أول كأس عالم لكرة السلة؟",
            "answers": [
                {
                    "answer": "1946",
                    "state": false,
                    "_id": "66826de8844d311d79708abe"
                },
                {
                    "answer": "1950",
                    "state": true,
                    "_id": "66826de8844d311d79708abf"
                },
                {
                    "answer": "1954",
                    "state": false,
                    "_id": "66826de8844d311d79708ac0"
                },
                {
                    "answer": "1959",
                    "state": false,
                    "_id": "66826de8844d311d79708ac1"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T08:50:48.442Z",
            "updatedAt": "2024-10-03T16:51:28.562Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668cf60690b4098abfdf2db5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720514100861.scaled_1000058640.jpg",
            "type": "true-false",
            "text": "شعار نادي أتلتيكو مدريد ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6685bcf803d8da9b7b4d1b27",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66848dd542cb22569b922f83"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هي رياضة التنس الإنجليزية المعروفة باسم “كرة المضرب”؟",
            "answers": [
                {
                    "answer": "التنس",
                    "state": false,
                    "_id": "6685bcf803d8da9b7b4d1b28"
                },
                {
                    "answer": "الإسكواش",
                    "state": false,
                    "_id": "6685bcf803d8da9b7b4d1b29"
                },
                {
                    "answer": "كرة الريشة",
                    "state": false,
                    "_id": "6685bcf803d8da9b7b4d1b2a"
                },
                {
                    "answer": "الكريكيت",
                    "state": true,
                    "_id": "6685bcf803d8da9b7b4d1b2b"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T21:04:56.232Z",
            "updatedAt": "2024-10-03T16:51:53.960Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668ea59a90b4098abfe84022",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720624652540.scaled_1000059026.jpg",
            "type": "true-false",
            "text": "شعار نادي استون فيلا ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a3c069b22d8881b404af5f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "66811bc5593d7a4e225b92af",
                "668bee3a41a92db3974deb24",
                "668f1ab590b4098abfeaa628",
                "668f815390b4098abfebed7a",
                "668f826190b4098abfec02f9",
                "66962eb6079f88fa2a39563a"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722007698266.scaled_1000055431.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "بوجبا",
                    "state": true,
                    "_id": "66a3c069b22d8881b404af60"
                },
                {
                    "answer": "كانتي",
                    "state": false,
                    "_id": "66a3c069b22d8881b404af61"
                },
                {
                    "answer": "رافينيا ",
                    "state": false,
                    "_id": "66a3c069b22d8881b404af62"
                },
                {
                    "answer": "كامافينجا ",
                    "state": false,
                    "_id": "66a3c069b22d8881b404af63"
                }
            ],
            "active": true,
            "createdAt": "2024-07-26T15:27:37.401Z",
            "updatedAt": "2024-10-03T16:53:08.522Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c333941a92db397e94b8e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720464272312.scaled_1000058654.jpg",
            "type": "true-false",
            "text": "شعار نادي تشيلسي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66af110ae5f2103ccfead3b3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668bef9341a92db3975ea727"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "لاعب في الترجي الرياضي التونسي حصل على جائزة أفضل لاعب إفريقي؟",
            "answers": [
                {
                    "answer": "طه ياسين الخنيسي",
                    "state": false,
                    "_id": "66af110ae5f2103ccfead3b4"
                },
                {
                    "answer": "أنيس بدري",
                    "state": false,
                    "_id": "66af110ae5f2103ccfead3b5"
                },
                {
                    "answer": "طارق ذياب",
                    "state": true,
                    "_id": "66af110ae5f2103ccfead3b6"
                },
                {
                    "answer": "يوسف المساكني",
                    "state": false,
                    "_id": "66af110ae5f2103ccfead3b7"
                }
            ],
            "active": true,
            "createdAt": "2024-08-04T05:26:34.823Z",
            "updatedAt": "2024-10-03T16:53:24.686Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aab8f9e5f2103ccfd64e56",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beece41a92db39752313a"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "حقق الزمالك تحت قيادة البرازيلي كارلوس كابرال 4 ألقاب؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6684896342cb22569b71ff0e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو اسم كرة القدم في كأس العالم 1966؟",
            "answers": [
                {
                    "answer": "شالنج 4 ستار ",
                    "state": true,
                    "_id": "6684896342cb22569b71ff0f"
                },
                {
                    "answer": "توب ستار ",
                    "state": false,
                    "_id": "6684896342cb22569b71ff10"
                },
                {
                    "answer": "كراك توب ستار ",
                    "state": false,
                    "_id": "6684896342cb22569b71ff11"
                },
                {
                    "answer": "أديداس تيليستار",
                    "state": false,
                    "_id": "6684896342cb22569b71ff12"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T23:12:35.887Z",
            "updatedAt": "2024-10-03T16:51:49.844Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669d2e8bb22d8881b4e2d654",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668f815390b4098abfebed7a",
                "66962eb6079f88fa2a39563a"
            ],
            "user_ids": [
                "6695848cf45a05d62e8102b1"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "نادي تورينو كان يسمى سابقًا باسم \"يوفنتوس الثاني\"؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "669e5a85b22d8881b4e97889",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من هو اللاعب الحاصل على الكرة الذهبية في كأس العالم عام ٢٠٠٦؟",
            "answers": [
                {
                    "answer": "زين الدين زيدان ",
                    "state": true,
                    "_id": "669e5aaab22d8881b4e97ed5"
                },
                {
                    "answer": "دييغو فورلان",
                    "state": false,
                    "_id": "669e5aaab22d8881b4e97ed6"
                },
                {
                    "answer": "ليونيل ميسي ",
                    "state": false,
                    "_id": "669e5aaab22d8881b4e97ed7"
                },
                {
                    "answer": "لوكا مودريتش ",
                    "state": false,
                    "_id": "669e5aaab22d8881b4e97ed8"
                }
            ],
            "active": true,
            "createdAt": "2024-07-22T13:11:33.874Z",
            "updatedAt": "2024-10-03T16:53:01.889Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db3c790b4098abfe4c22f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562744492.scaled_1000058823.jpg",
            "type": "true-false",
            "text": "شعار نادي فالنسيا",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668183a2587e55d0619485b0",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719763986397.scaled_1000224304.jpg",
            "type": "normal",
            "text": "كم مرة حصلت البرازيل على لقب كأس العالم للقارات لكرة القدم؟",
            "answers": [
                {
                    "answer": "3 مرات",
                    "state": false,
                    "_id": "668183a2587e55d0619485b1"
                },
                {
                    "answer": "4 مرات",
                    "state": true,
                    "_id": "668183a2587e55d0619485b2"
                },
                {
                    "answer": "5 مرات",
                    "state": false,
                    "_id": "668183a2587e55d0619485b3"
                },
                {
                    "answer": "6 مرات",
                    "state": false,
                    "_id": "668183a2587e55d0619485b4"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T16:11:14.344Z",
            "updatedAt": "2024-10-03T16:51:28.529Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668d49c290b4098abfe19e5e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720535646534.scaled_1000058795.jpg",
            "type": "true-false",
            "text": "شعار نادي اندرلخت ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668860296e28e43de1883e1c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من حقق لقب الدوري الإسباني لكرة القدم موسم 1939-1940؟",
            "answers": [
                {
                    "answer": "ريال مدريد",
                    "state": false,
                    "_id": "668860296e28e43de1883e1d"
                },
                {
                    "answer": "أتليتكو مدريد",
                    "state": true,
                    "_id": "668860296e28e43de1883e1e"
                },
                {
                    "answer": "ريال بيتيس",
                    "state": false,
                    "_id": "668860296e28e43de1883e1f"
                },
                {
                    "answer": "برشلونة",
                    "state": false,
                    "_id": "668860296e28e43de1883e20"
                }
            ],
            "active": true,
            "createdAt": "2024-07-05T21:05:45.726Z",
            "updatedAt": "2024-10-03T16:52:05.416Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66bffb99e5f2103ccf093919",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c53593d7a4e225b9394"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "إستضافت الإكوادور كأس أمريكا الجنوبية عام ١٩٤٧",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681e393844d311d791cc29a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل بكأس العالم لكرة القدم عام 2010؟",
            "answers": [
                {
                    "answer": "إسبانيا",
                    "state": true,
                    "_id": "6681e393844d311d791cc29b"
                },
                {
                    "answer": "هولندا",
                    "state": false,
                    "_id": "6681e393844d311d791cc29c"
                },
                {
                    "answer": "ألمانيا ",
                    "state": false,
                    "_id": "6681e393844d311d791cc29d"
                },
                {
                    "answer": "الأوروغواي ",
                    "state": false,
                    "_id": "6681e393844d311d791cc29e"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:00:35.436Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669989a8b22d8881b4d0dd9b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "تولى ارنستو فالفيردي تدريب نادي برشلونة بعد رحيل لويس انريكي",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6683477a42cb22569b0e499e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827f03844d311d798c6347"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من الفائز بجائزة الكرة الذهبية لكرة القدم في عام 2018؟",
            "answers": [
                {
                    "answer": "كرستيانو رونالدو ",
                    "state": false,
                    "_id": "6683477a42cb22569b0e499f"
                },
                {
                    "answer": "أنطوان غريزمان ",
                    "state": false,
                    "_id": "6683477a42cb22569b0e49a0"
                },
                {
                    "answer": "لوكا مودريتش",
                    "state": true,
                    "_id": "6683477a42cb22569b0e49a1"
                },
                {
                    "answer": "ليونيل ميسي ",
                    "state": false,
                    "_id": "6683477a42cb22569b0e49a2"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T00:19:06.634Z",
            "updatedAt": "2024-10-03T16:51:40.219Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b0f27ae5f2103ccff46b54",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722872536450.scaled_Picsart_24-07-28_01-25-38-130.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع ناديه بايرن ميونيخ بالدوري الالماني موسم 2020-2021؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668176e0593d7a4e22611a45",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719760616411.scaled_1000224304.jpg",
            "type": "normal",
            "text": "من هي الدولة الوحيدة التي تعادلت مع البرزايل في كأس العالم لكرة القدم 1958؟",
            "answers": [
                {
                    "answer": "إسبانيا",
                    "state": false,
                    "_id": "668176e0593d7a4e22611a46"
                },
                {
                    "answer": "الأوروغواي",
                    "state": false,
                    "_id": "668176e0593d7a4e22611a47"
                },
                {
                    "answer": "إنجلترا",
                    "state": true,
                    "_id": "668176e0593d7a4e22611a48"
                },
                {
                    "answer": "هولندا ",
                    "state": false,
                    "_id": "668176e0593d7a4e22611a49"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:16:48.379Z",
            "updatedAt": "2024-10-03T16:51:28.524Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698d614b22d8881b4ccbb51",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b6f593d7a4e225b925f",
                "66811b7f593d7a4e225b926d",
                "66811ba1593d7a4e225b928c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721292409391.scaled_1000060679.jpg",
            "type": "true-false",
            "text": "شعار نادي الميريا",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668197bcab23c4c91c5b65a9",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "فازت الدنمارك بلقب كأس العالم للقارات لكرة القدم مرة واحدة في عام؟",
            "answers": [
                {
                    "answer": "1992",
                    "state": false,
                    "_id": "668197bcab23c4c91c5b65aa"
                },
                {
                    "answer": "1995",
                    "state": true,
                    "_id": "668197bcab23c4c91c5b65ab"
                },
                {
                    "answer": "1997",
                    "state": false,
                    "_id": "668197bcab23c4c91c5b65ac"
                },
                {
                    "answer": "1999",
                    "state": false,
                    "_id": "668197bcab23c4c91c5b65ad"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T17:37:00.926Z",
            "updatedAt": "2024-10-03T16:51:28.530Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66997913b22d8881b4d00b47",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "في موسم 2017-2016، خسر نادي برشلونة لقب الدوري الاسباني لصالح ريال مدريد بفارق ثلاث نقاط",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a5562be5f2103ccfb15d7c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722111646222.scaled_Picsart_24-07-27_23-45-47-058.jpg",
            "type": "normal",
            "text": "ما هي جنسية اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "فرنسي",
                    "state": false,
                    "_id": "66a5562be5f2103ccfb15d7d"
                },
                {
                    "answer": "بلجيكي",
                    "state": false,
                    "_id": "66a5562be5f2103ccfb15d7e"
                },
                {
                    "answer": "هولاندي",
                    "state": true,
                    "_id": "66a5562be5f2103ccfb15d7f"
                },
                {
                    "answer": "الماني",
                    "state": false,
                    "_id": "66a5562be5f2103ccfb15d80"
                }
            ],
            "active": true,
            "createdAt": "2024-07-27T20:18:51.386Z",
            "updatedAt": "2024-10-03T16:53:11.443Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669bebfeb22d8881b4daac1e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b6f593d7a4e225b925f",
                "66811b7f593d7a4e225b926d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721494656705.scaled_1000063422.jpg",
            "type": "true-false",
            "text": "شعار نادي بنفيكا ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668604cb03d8da9b7b9a884f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c23593d7a4e225b9318"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس الأمم الأفريقية لكرة القدم عام 1957؟",
            "answers": [
                {
                    "answer": "السودان",
                    "state": true,
                    "_id": "668604cb03d8da9b7b9a8850"
                },
                {
                    "answer": "مصر",
                    "state": false,
                    "_id": "668604cb03d8da9b7b9a8851"
                },
                {
                    "answer": "إيثوبيا",
                    "state": false,
                    "_id": "668604cb03d8da9b7b9a8852"
                },
                {
                    "answer": "أوغندا",
                    "state": false,
                    "_id": "668604cb03d8da9b7b9a8853"
                }
            ],
            "active": true,
            "createdAt": "2024-07-04T02:11:23.881Z",
            "updatedAt": "2024-10-03T16:51:53.963Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669807c5b22d8881b4c7cb81",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "فاز نادي برشلونة بالثلاثية مرتين في تاريخه",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681e092844d311d79177ad9",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d",
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل كأس العالم لكرة القدم عام 1962؟",
            "answers": [
                {
                    "answer": "البرازيل",
                    "state": true,
                    "_id": "6681e23b844d311d791abc7a"
                },
                {
                    "answer": "تشيكوسلوفاكيا",
                    "state": false,
                    "_id": "6681e23b844d311d791abc7b"
                },
                {
                    "answer": "تشيلي",
                    "state": false,
                    "_id": "6681e23b844d311d791abc7c"
                },
                {
                    "answer": "يوغوسلافيا ",
                    "state": false,
                    "_id": "6681e23b844d311d791abc7d"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T22:47:46.200Z",
            "updatedAt": "2024-10-03T16:51:28.558Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db24a90b4098abfe4b738",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562328714.scaled_1000058817.jpg",
            "type": "true-false",
            "text": "شعار نادي ساوباولو ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66812ee6593d7a4e225b96ac",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668118a4593d7a4e225b9225",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "66811ba1593d7a4e225b928c",
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66810829593d7a4e225b918b"
            ],
            "picture": "uploads/questions/1719742300122.scaled_1000055218.png",
            "type": "normal",
            "text": "ما الإسم الأول للاعب رونالدو؟",
            "answers": [
                {
                    "answer": "كريستيانو ",
                    "state": true,
                    "_id": "6690304490b4098abff25e20"
                },
                {
                    "answer": "ليونيل",
                    "state": false,
                    "_id": "6690304490b4098abff25e21"
                },
                {
                    "answer": "باولو",
                    "state": false,
                    "_id": "6690304490b4098abff25e22"
                },
                {
                    "answer": "لويس",
                    "state": false,
                    "_id": "6690304490b4098abff25e23"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T10:09:42.686Z",
            "updatedAt": "2024-10-03T16:51:28.506Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668d9f2190b4098abfe439fd",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720557380316.scaled_1000058805.jpg",
            "type": "true-false",
            "text": "شعار نادي إنتر ميلان ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681ddfe844d311d7913b132",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c0c593d7a4e225b9301"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719787139893.scaled_1000224654.jpg",
            "type": "normal",
            "text": "ما اسم هذه البطولة؟",
            "answers": [
                {
                    "answer": "الدوري العراقي",
                    "state": false,
                    "_id": "6681ddfe844d311d7913b133"
                },
                {
                    "answer": "الدوري الكويتي",
                    "state": true,
                    "_id": "6681ddfe844d311d7913b134"
                },
                {
                    "answer": "الدوري السعودي",
                    "state": false,
                    "_id": "6681ddfe844d311d7913b135"
                },
                {
                    "answer": "الدوري اللبناني",
                    "state": false,
                    "_id": "6681ddfe844d311d7913b136"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T22:36:46.878Z",
            "updatedAt": "2024-10-03T16:51:28.558Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669aeb70b22d8881b4d72055",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721428859973.scaled_1000062870.jpg",
            "type": "true-false",
            "text": "شعار نادي تشارلتون اتلتيك ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66848e5242cb22569b97af38",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حتى عام 2024، كم مرة حقق نوتينغهام فورست لقب الدوري الإنجليزي؟",
            "answers": [
                {
                    "answer": "مرة واحدة ",
                    "state": true,
                    "_id": "66848e5242cb22569b97af39"
                },
                {
                    "answer": "مرتان ",
                    "state": false,
                    "_id": "66848e5242cb22569b97af3a"
                },
                {
                    "answer": "3 مرات",
                    "state": false,
                    "_id": "66848e5242cb22569b97af3b"
                },
                {
                    "answer": "4 مرات",
                    "state": false,
                    "_id": "66848e5242cb22569b97af3c"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T23:33:38.607Z",
            "updatedAt": "2024-10-03T16:51:49.844Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668cf73990b4098abfdf3bae",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720514487668.scaled_1000058629.jpg",
            "type": "true-false",
            "text": "شعار نادي لوس انجلوس جالاكسي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "669ec10ab22d8881b4ed0a57",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721747161832.scaled_1000054900.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "سوماريه",
                    "state": true,
                    "_id": "669fc660b22d8881b4f242a0"
                },
                {
                    "answer": "دوكو",
                    "state": false,
                    "_id": "669fc660b22d8881b4f242a1"
                },
                {
                    "answer": "دوكوريه",
                    "state": false,
                    "_id": "669fc660b22d8881b4f242a2"
                },
                {
                    "answer": "بارتي",
                    "state": false,
                    "_id": "669fc660b22d8881b4f242a3"
                }
            ],
            "active": true,
            "createdAt": "2024-07-22T20:28:58.324Z",
            "updatedAt": "2024-10-03T16:53:01.893Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6691a59390b4098abffcb9ff",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720821170215.scaled_1000060503.jpg",
            "type": "true-false",
            "text": "شعار نادي أجاكس امستردام ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66833026ba38dd101b47557d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827f03844d311d798c6347"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من الفائز بجائزة الكرة الذهبية لكرة القدم في عام 1975؟",
            "answers": [
                {
                    "answer": "فرانز بيكنباور ",
                    "state": false,
                    "_id": "66833026ba38dd101b47557e"
                },
                {
                    "answer": "يوهان كرويف ",
                    "state": false,
                    "_id": "66833026ba38dd101b47557f"
                },
                {
                    "answer": "روب رينسينبرينك",
                    "state": false,
                    "_id": "66833026ba38dd101b475580"
                },
                {
                    "answer": "أوليغ بلوخين",
                    "state": true,
                    "_id": "66833026ba38dd101b475581"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T22:39:34.320Z",
            "updatedAt": "2024-10-03T16:51:40.217Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698f99eb22d8881b4cd98ae",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "حقق برشلونة السداسية في عام 2009",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6688a2466e28e43de167bca3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من حقق دوري أبطال أوروبا لكرة القدم في عام 2007؟",
            "answers": [
                {
                    "answer": "برشلونة",
                    "state": false,
                    "_id": "6688a2466e28e43de167bca4"
                },
                {
                    "answer": "أرسنال",
                    "state": false,
                    "_id": "6688a2466e28e43de167bca5"
                },
                {
                    "answer": "ميلان",
                    "state": true,
                    "_id": "6688a2466e28e43de167bca6"
                },
                {
                    "answer": "ليفربول",
                    "state": false,
                    "_id": "6688a2466e28e43de167bca7"
                }
            ],
            "active": true,
            "createdAt": "2024-07-06T01:47:50.472Z",
            "updatedAt": "2024-10-03T16:52:08.483Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db26b90b4098abfe4b898",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562363241.scaled_1000058817.jpg",
            "type": "true-false",
            "text": "شعار نادي سانتوس",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668172d3593d7a4e225fe893",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759750305.scaled_1000224304.jpg",
            "type": "normal",
            "text": "متى بدأت أول بطولة لكأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "1926",
                    "state": false,
                    "_id": "668172d3593d7a4e225fe894"
                },
                {
                    "answer": "1930",
                    "state": true,
                    "_id": "668172d3593d7a4e225fe895"
                },
                {
                    "answer": "1934",
                    "state": false,
                    "_id": "668172d3593d7a4e225fe896"
                },
                {
                    "answer": "1938",
                    "state": false,
                    "_id": "668172d3593d7a4e225fe897"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T14:59:31.569Z",
            "updatedAt": "2024-10-03T16:51:28.522Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669e715fb22d8881b4eac98b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "بروزينيكي هو صاحب جائزة أفضل لاعب شاب فى كأس العالم ١٩٩٤ ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66afb46ee5f2103ccff0b077",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c3a593d7a4e225b9330"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "كم مرة فاز منتخب تايبيه الصينية بالمركز الثالث في كأس أمم آسيا حتى عام ٢٠٢٣ ؟",
            "answers": [
                {
                    "answer": "لم يفز ",
                    "state": false,
                    "_id": "66afb47ce5f2103ccff0b417"
                },
                {
                    "answer": "١",
                    "state": true,
                    "_id": "66afb47ce5f2103ccff0b418"
                },
                {
                    "answer": "٣",
                    "state": false,
                    "_id": "66afb47ce5f2103ccff0b419"
                },
                {
                    "answer": "٥",
                    "state": false,
                    "_id": "66afb47ce5f2103ccff0b41a"
                }
            ],
            "active": true,
            "createdAt": "2024-08-04T17:03:42.595Z",
            "updatedAt": "2024-10-03T16:53:24.688Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c2b6a41a92db3977b4971",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720462318221.scaled_1000058658.jpg",
            "type": "true-false",
            "text": "شعار نادي تشيلسي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66c02f32e5f2103ccf0a0867",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beef741a92db3975282a5"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "في موسم 2015 من البطولة الوطنية المغربي، حقق الرجاء الرياضي المركز؟",
            "answers": [
                {
                    "answer": "الخامس ",
                    "state": false,
                    "_id": "66c02f32e5f2103ccf0a0868"
                },
                {
                    "answer": "السادس ",
                    "state": false,
                    "_id": "66c02f32e5f2103ccf0a0869"
                },
                {
                    "answer": "السابع ",
                    "state": false,
                    "_id": "66c02f32e5f2103ccf0a086a"
                },
                {
                    "answer": "الثامن",
                    "state": true,
                    "_id": "66c02f32e5f2103ccf0a086b"
                }
            ],
            "active": true,
            "createdAt": "2024-08-17T05:03:46.580Z",
            "updatedAt": "2024-10-03T16:53:36.192Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669d2cb3b22d8881b4e2c297",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668f815390b4098abfebed7a"
            ],
            "user_ids": [
                "6695848cf45a05d62e8102b1"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "لعب الأرجنتيني دييغو مارادونا في الدوري الإيطالي لنادي نابولي؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66817751593d7a4e2261204b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719760830490.scaled_1000224304.jpg",
            "type": "normal",
            "text": "من المنتخب الوحيد الذي لم يفشل على الإطلاق في التأهل لكأس العالم لكرة القدم حتى الآن؟",
            "answers": [
                {
                    "answer": "ألمانيا",
                    "state": false,
                    "_id": "66817751593d7a4e2261204c"
                },
                {
                    "answer": "الأرجنتين",
                    "state": false,
                    "_id": "66817751593d7a4e2261204d"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "66817751593d7a4e2261204e"
                },
                {
                    "answer": "البرازيل",
                    "state": true,
                    "_id": "66817751593d7a4e2261204f"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:18:41.125Z",
            "updatedAt": "2024-10-03T16:51:28.524Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6692f3ab90b4098abf04e5c9",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720906788364.scaled_1000060905.jpg",
            "type": "true-false",
            "text": "شعار نادي فرايبورج ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681e0f3844d311d79181f4e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d",
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل كأس العالم لكرة القدم عام 1970؟",
            "answers": [
                {
                    "answer": "إيطاليا",
                    "state": false,
                    "_id": "6681e21b844d311d791a6e32"
                },
                {
                    "answer": "الأوروغواي ",
                    "state": false,
                    "_id": "6681e21b844d311d791a6e33"
                },
                {
                    "answer": "ألمانيا الغربية",
                    "state": false,
                    "_id": "6681e21b844d311d791a6e34"
                },
                {
                    "answer": "البرازيل",
                    "state": true,
                    "_id": "6681e21b844d311d791a6e35"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T22:49:23.832Z",
            "updatedAt": "2024-10-03T16:51:28.558Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aeede2e5f2103ccfe99a3b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668bef9341a92db3975ea727"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "تمكن الترجي الرياضي التونسي من المشاركة في كأس السوبر الأفريقي 2019؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681dc6a844d311d7911c780",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c0c593d7a4e225b9301"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719786731007.scaled_1000224648.jpg",
            "type": "normal",
            "text": "ما اسم هذا اللقب؟",
            "answers": [
                {
                    "answer": "الدوري السعودي ",
                    "state": false,
                    "_id": "6681dc6a844d311d7911c781"
                },
                {
                    "answer": "الدوري القطري",
                    "state": false,
                    "_id": "6681dc6a844d311d7911c782"
                },
                {
                    "answer": "الدوري العراقي ",
                    "state": true,
                    "_id": "6681dc6a844d311d7911c783"
                },
                {
                    "answer": "الدوري الكويتي ",
                    "state": false,
                    "_id": "6681dc6a844d311d7911c784"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T22:30:02.402Z",
            "updatedAt": "2024-10-03T16:51:28.558Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66bbc1d6e5f2103ccf0273ca",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beef741a92db3975282a5"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "حقق الرجاء المغربي وصافة كأس العرش في 1991؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668328a2ba38dd101b1c02ba",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c60593d7a4e225b93ae"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو أفضل مركز لألمانيا في تاريخ كأس العالم لكرة السلة حتى 2024؟",
            "answers": [
                {
                    "answer": "المركز الأول",
                    "state": true,
                    "_id": "668328a2ba38dd101b1c02bb"
                },
                {
                    "answer": "المركز الثاني",
                    "state": false,
                    "_id": "668328a2ba38dd101b1c02bc"
                },
                {
                    "answer": "المركز الثالث",
                    "state": false,
                    "_id": "668328a2ba38dd101b1c02bd"
                },
                {
                    "answer": "المركز الرابع",
                    "state": false,
                    "_id": "668328a2ba38dd101b1c02be"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T22:07:30.011Z",
            "updatedAt": "2024-10-03T16:51:40.217Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ba3176e5f2103ccfff39c4",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1723478522778.scaled_1000052901.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب بدوري أبطال أوروبا موسم ٢٠٢٢ -٢٠٢٣؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681db83844d311d79106c40",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c0c593d7a4e225b9301"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719786393888.scaled_1000224644.jpg",
            "type": "normal",
            "text": "ما اسم هذا اللقب؟",
            "answers": [
                {
                    "answer": "الدوري السعودي",
                    "state": false,
                    "_id": "6681db83844d311d79106c41"
                },
                {
                    "answer": "الدوري الإماراتي",
                    "state": true,
                    "_id": "6681db83844d311d79106c42"
                },
                {
                    "answer": "الدوري الكويتي",
                    "state": false,
                    "_id": "6681db83844d311d79106c43"
                },
                {
                    "answer": "الدوري اللبناني",
                    "state": false,
                    "_id": "6681db83844d311d79106c44"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T22:26:11.209Z",
            "updatedAt": "2024-10-03T16:51:28.558Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698f85ab22d8881b4cd8de9",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811890593d7a4e225b921b",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "ليونيل ميسي كان قائد فريق برشلونة في آخر سنوات مع النادي",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6697ad96079f88fa2a478dcc",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811ba1593d7a4e225b928c",
                "668bee3a41a92db3974deb24",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من هو اللاعب الذي سجل هدف الفوز لبرشلونة في نهائي دوري أبطال أوروبا 2011 ضد مانشستر يونايتد ؟",
            "answers": [
                {
                    "answer": " ميسي",
                    "state": false,
                    "_id": "6697ad96079f88fa2a478dcd"
                },
                {
                    "answer": "بيدرو",
                    "state": false,
                    "_id": "6697ad96079f88fa2a478dce"
                },
                {
                    "answer": "فيا",
                    "state": true,
                    "_id": "6697ad96079f88fa2a478dcf"
                },
                {
                    "answer": "بويول",
                    "state": false,
                    "_id": "6697ad96079f88fa2a478dd0"
                }
            ],
            "active": true,
            "createdAt": "2024-07-17T11:40:06.403Z",
            "updatedAt": "2024-10-03T16:52:42.364Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c372141a92db3972075ae",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720465226711.scaled_1000058648.jpg",
            "type": "true-false",
            "text": "شعار نادي يوفنتوس ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6684a6ab42cb22569b4c1418",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من أول نادي حقق الدوري الإنجليزي الممتاز؟",
            "answers": [
                {
                    "answer": "أرسنال",
                    "state": false,
                    "_id": "6684a6ab42cb22569b4c1419"
                },
                {
                    "answer": "تشيلسي",
                    "state": false,
                    "_id": "6684a6ab42cb22569b4c141a"
                },
                {
                    "answer": "بلاكبيرن روفرز",
                    "state": false,
                    "_id": "6684a6ab42cb22569b4c141b"
                },
                {
                    "answer": "مانشستر يونايتد",
                    "state": true,
                    "_id": "6684a6ab42cb22569b4c141c"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T01:17:31.493Z",
            "updatedAt": "2024-10-03T16:51:49.845Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66afc148e5f2103ccff1c0fc",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beeec41a92db3975259eb"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "حصل الوداد الرياضي على كأس العرش المغربي في 1979؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66817932593d7a4e226181e5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719761308430.scaled_1000224304.jpg",
            "type": "normal",
            "text": "كم عدد المنتخبات المشاركة في كأس العالم لكرة القدم عام 1930؟",
            "answers": [
                {
                    "answer": "13",
                    "state": true,
                    "_id": "66817932593d7a4e226181e6"
                },
                {
                    "answer": "15",
                    "state": false,
                    "_id": "66817932593d7a4e226181e7"
                },
                {
                    "answer": "24",
                    "state": false,
                    "_id": "66817932593d7a4e226181e8"
                },
                {
                    "answer": "32",
                    "state": false,
                    "_id": "66817932593d7a4e226181e9"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:26:42.712Z",
            "updatedAt": "2024-10-03T16:51:28.525Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c344841a92db397f8da7f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720464476146.scaled_1000058652.jpg",
            "type": "true-false",
            "text": "شعار نادي مانشستر سيتي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681b654ab23c4c91c666505",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1998؟",
            "answers": [
                {
                    "answer": "إيطاليا",
                    "state": false,
                    "_id": "6681b654ab23c4c91c666506"
                },
                {
                    "answer": "البرازيل",
                    "state": false,
                    "_id": "6681b654ab23c4c91c666507"
                },
                {
                    "answer": "فرنسا",
                    "state": true,
                    "_id": "6681b654ab23c4c91c666508"
                },
                {
                    "answer": "ألمانيا",
                    "state": false,
                    "_id": "6681b654ab23c4c91c666509"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T19:47:32.902Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669be7a1b22d8881b4da793d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b6f593d7a4e225b925f",
                "66811b7f593d7a4e225b926d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721493428864.scaled_1000063425.jpg",
            "type": "true-false",
            "text": "شعار نادي جيل فيسينتي",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681bbdfab23c4c91c6aaf59",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من أول منتخب فاز بكأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "الأرجنتين",
                    "state": false,
                    "_id": "6681bbdfab23c4c91c6aaf5a"
                },
                {
                    "answer": "البرازيل",
                    "state": false,
                    "_id": "6681bbdfab23c4c91c6aaf5b"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "6681bbdfab23c4c91c6aaf5c"
                },
                {
                    "answer": "الأوروغواي ",
                    "state": true,
                    "_id": "6681bbdfab23c4c91c6aaf5d"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T20:11:11.462Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66980bd9b22d8881b4c7f584",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "ديكو لعب لنادي برشلونة",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668b140341a92db397d340ec",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668aa5e241a92db397651b27"
            ],
            "user_ids": [
                "668ab1a241a92db39761283d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "كم عدد بطولات ال NBA التي حققها نادي لوس أنجلوس ليكرز ",
            "answers": [
                {
                    "answer": "١٥",
                    "state": false,
                    "_id": "668b140341a92db397d340ed"
                },
                {
                    "answer": "١٦",
                    "state": false,
                    "_id": "668b140341a92db397d340ee"
                },
                {
                    "answer": "١٧",
                    "state": true,
                    "_id": "668b140341a92db397d340ef"
                },
                {
                    "answer": "١٨",
                    "state": false,
                    "_id": "668b140341a92db397d340f0"
                }
            ],
            "active": true,
            "createdAt": "2024-07-07T22:17:39.161Z",
            "updatedAt": "2024-10-03T16:52:15.079Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b3ab08e5f2103ccff8dcd5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1723050883139.scaled_1000168485.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب بكأس العالم سنة ٢٠١٨؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681a069ab23c4c91c5da9c6",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1966؟",
            "answers": [
                {
                    "answer": "البرازيل",
                    "state": false,
                    "_id": "6681a069ab23c4c91c5da9c7"
                },
                {
                    "answer": "فرنسا ",
                    "state": false,
                    "_id": "6681a069ab23c4c91c5da9c8"
                },
                {
                    "answer": "إنجلترا",
                    "state": true,
                    "_id": "6681a069ab23c4c91c5da9c9"
                },
                {
                    "answer": "ألمانيا ",
                    "state": false,
                    "_id": "6681a069ab23c4c91c5da9ca"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T18:14:01.606Z",
            "updatedAt": "2024-10-03T16:51:28.532Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66a992e3e5f2103ccfd197d5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628",
                "668f815390b4098abfebed7a",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722389281236.scaled_1000055725.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو بيدري ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681deea844d311d7914ddd2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c0c593d7a4e225b9301"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719787330525.scaled_1000224656.jpg",
            "type": "normal",
            "text": "ما اسم هذا اللقب؟",
            "answers": [
                {
                    "answer": "الدوري السوري",
                    "state": false,
                    "_id": "6681deea844d311d7914ddd3"
                },
                {
                    "answer": "الدوري البحريني",
                    "state": false,
                    "_id": "6681deea844d311d7914ddd4"
                },
                {
                    "answer": "الدوري اللبناني",
                    "state": true,
                    "_id": "6681deea844d311d7914ddd5"
                },
                {
                    "answer": "الدوري القطري",
                    "state": false,
                    "_id": "6681deea844d311d7914ddd6"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T22:40:42.980Z",
            "updatedAt": "2024-10-03T16:51:28.558Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b907dfe5f2103ccffc5f8c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c3a593d7a4e225b9330"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "خلال بطولة كأس أمم آسيا عام ١٩٥٦ تم إحراز ٢٩ هدف  ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668f4d6590b4098abfeb1bc1",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b6f593d7a4e225b925f",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1720667557876.scaled_1000050614.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "بيدري ",
                    "state": true,
                    "_id": "668f867790b4098abfeca54f"
                },
                {
                    "answer": "جافي",
                    "state": false,
                    "_id": "668f867790b4098abfeca550"
                },
                {
                    "answer": "شافي سيمونز",
                    "state": false,
                    "_id": "668f867790b4098abfeca551"
                },
                {
                    "answer": "هالاند",
                    "state": false,
                    "_id": "668f867790b4098abfeca552"
                }
            ],
            "active": true,
            "createdAt": "2024-07-11T03:11:33.965Z",
            "updatedAt": "2024-10-03T16:52:20.921Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698ff64b22d8881b4cdcbdf",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "فاز نادي برشلونة بكأس ملك اسبانيا لأول مرة في تاريخه في عام 1910",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681a591ab23c4c91c5ff676",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668118a4593d7a4e225b9225"
            ],
            "user_ids": [
                "6681a14eab23c4c91c5de595"
            ],
            "picture": "uploads/questions/1719772676074.scaled_1000855419.jpg",
            "type": "normal",
            "text": "كم احرز كريستيانو رونالدو اهداف في دوري ابطال اوروبا ",
            "answers": [
                {
                    "answer": "90",
                    "state": false,
                    "_id": "6681a591ab23c4c91c5ff677"
                },
                {
                    "answer": "141",
                    "state": true,
                    "_id": "6681a591ab23c4c91c5ff678"
                },
                {
                    "answer": "268",
                    "state": false,
                    "_id": "6681a591ab23c4c91c5ff679"
                },
                {
                    "answer": "70",
                    "state": false,
                    "_id": "6681a591ab23c4c91c5ff67a"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T18:36:01.763Z",
            "updatedAt": "2024-10-03T16:51:28.535Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668566e503d8da9b7bfc4055",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720018771515.scaled_1000056607.jpg",
            "type": "true-false",
            "text": "إيطاليا هي المنتخب الفائز بكأس العالم لكرة القدم ١٩٣٤",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66845a8642cb22569b192404",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حتى عام 2022، كم ميدالية ذهبية حصلت عليها الكويت في دورة الألعاب الأولمبية؟",
            "answers": [
                {
                    "answer": "ميدالية واحدة ",
                    "state": true,
                    "_id": "66845a8642cb22569b192405"
                },
                {
                    "answer": "2 ميدالية ",
                    "state": false,
                    "_id": "66845a8642cb22569b192406"
                },
                {
                    "answer": "3 ميدالية ",
                    "state": false,
                    "_id": "66845a8642cb22569b192407"
                },
                {
                    "answer": "4 ميداليات ",
                    "state": false,
                    "_id": "66845a8642cb22569b192408"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T19:52:38.341Z",
            "updatedAt": "2024-10-03T16:51:44.815Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668e9dbe90b4098abfe8007c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720622656732.scaled_1000059024.jpg",
            "type": "true-false",
            "text": "شعار نادي أتلتيك بلباو ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681bcbfab23c4c91c6b8be3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d",
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل كأس العالم لكرة القدم عام 1930؟",
            "answers": [
                {
                    "answer": "الأرجنتين",
                    "state": false,
                    "_id": "6681e25f844d311d791af8c9"
                },
                {
                    "answer": "الولايات المتحدة الأمريكية ",
                    "state": false,
                    "_id": "6681e25f844d311d791af8ca"
                },
                {
                    "answer": "يوغوسلافيا ",
                    "state": false,
                    "_id": "6681e25f844d311d791af8cb"
                },
                {
                    "answer": "الأوروغواي",
                    "state": true,
                    "_id": "6681e25f844d311d791af8cc"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T20:14:55.204Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ad83e9e5f2103ccfdd92ce",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722647663756.scaled_60b25b43675d69377af7c83773244173.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو جوليان الفاريز؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681e3fe844d311d791d9684",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل بكأس العالم لكرة القدم عام 2022؟",
            "answers": [
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "6681e3fe844d311d791d9685"
                },
                {
                    "answer": "المغرب",
                    "state": false,
                    "_id": "6681e3fe844d311d791d9686"
                },
                {
                    "answer": "الأرجنتين ",
                    "state": true,
                    "_id": "6681e3fe844d311d791d9687"
                },
                {
                    "answer": "كرواتيا",
                    "state": false,
                    "_id": "6681e3fe844d311d791d9688"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:02:22.236Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6691a64190b4098abffcc07a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720821462833.scaled_1000060504.jpg",
            "type": "true-false",
            "text": "شعار نادي ريال سوسيداد ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66bb95f6e5f2103ccf015219",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beeec41a92db3975259eb"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أول من تولى رئاسة نادي الوداد الرياضي المغربي هو؟",
            "answers": [
                {
                    "answer": "محمد بنجلون التويمي",
                    "state": true,
                    "_id": "66bb95f6e5f2103ccf01521a"
                },
                {
                    "answer": "عبد القادر بنجلون",
                    "state": false,
                    "_id": "66bb95f6e5f2103ccf01521b"
                },
                {
                    "answer": "عبد اللطيف العلمي",
                    "state": false,
                    "_id": "66bb95f6e5f2103ccf01521c"
                },
                {
                    "answer": "محمد بلحسن بنجلون",
                    "state": false,
                    "_id": "66bb95f6e5f2103ccf01521d"
                }
            ],
            "active": true,
            "createdAt": "2024-08-13T17:20:54.551Z",
            "updatedAt": "2024-10-03T16:53:36.188Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ae6f85e5f2103ccfe2d984",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beec341a92db39752088a"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "حصل النادي الأهلي على كأس السوبر المصري بعد الفوز على نادي حرس الحدود موسم 2009",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681a9d1ab23c4c91c61e1b5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a"
            ],
            "user_ids": [
                "6681a14eab23c4c91c5de595"
            ],
            "picture": "uploads/questions/1719773718681.scaled_1000855424.jpg",
            "type": "normal",
            "text": "ما عدد ألقاب ريال مدريد  في دوري ابطال اوروبا حتى 2024؟",
            "answers": [
                {
                    "answer": "12",
                    "state": false,
                    "_id": "6690301a90b4098abff25b35"
                },
                {
                    "answer": "11",
                    "state": false,
                    "_id": "6690301a90b4098abff25b36"
                },
                {
                    "answer": "2",
                    "state": false,
                    "_id": "6690301a90b4098abff25b37"
                },
                {
                    "answer": "15",
                    "state": true,
                    "_id": "6690301a90b4098abff25b38"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T18:54:09.483Z",
            "updatedAt": "2024-10-03T16:51:28.536Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ae7826e5f2103ccfe3173c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beec341a92db39752088a",
                "668beece41a92db39752313a"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "خسر النادي الأهلي  كأس السوبر المصري بعد الخسارة  أمام نادي الزمالك عام 2016",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6687d5df03d8da9b7b299533",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "66814fc6593d7a4e225bbcc2"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من هو الفريق الذي فاز بلقب الدوري الاسباني في موسم 2018 -2019؟",
            "answers": [
                {
                    "answer": "ريال مدريد",
                    "state": false,
                    "_id": "6687d5df03d8da9b7b299534"
                },
                {
                    "answer": "بر شلونة",
                    "state": true,
                    "_id": "6687d5df03d8da9b7b299535"
                },
                {
                    "answer": "اتلتيكو مدريد",
                    "state": false,
                    "_id": "6687d5df03d8da9b7b299536"
                },
                {
                    "answer": "اشبيلية",
                    "state": false,
                    "_id": "6687d5df03d8da9b7b299537"
                }
            ],
            "active": true,
            "createdAt": "2024-07-05T11:15:43.024Z",
            "updatedAt": "2024-10-03T16:52:02.315Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668f118290b4098abfea933e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720652207267.scaled_1000059379.png",
            "type": "true-false",
            "text": "شعار نادي شاختار ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668454a142cb22569be27a84",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت دورة الألعاب الأولمبية 1992؟",
            "answers": [
                {
                    "answer": "برشلونة",
                    "state": true,
                    "_id": "668454a142cb22569be27a85"
                },
                {
                    "answer": "لوس أنجلوس ",
                    "state": false,
                    "_id": "668454a142cb22569be27a86"
                },
                {
                    "answer": "موسكو",
                    "state": false,
                    "_id": "668454a142cb22569be27a87"
                },
                {
                    "answer": "أتلانتا",
                    "state": false,
                    "_id": "668454a142cb22569be27a88"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T19:27:29.365Z",
            "updatedAt": "2024-10-03T16:51:44.815Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669d4337b22d8881b4e383ba",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b6f593d7a4e225b925f",
                "66811b7f593d7a4e225b926d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721582413813.scaled_1000063521.jpg",
            "type": "true-false",
            "text": "شعار نادي رودا كيراكرده",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681c661ab23c4c91c74704c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "66811bed593d7a4e225b92d6"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d",
                "66811df2593d7a4e225b944d",
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1719781003663.scaled_1000224616.jpg",
            "type": "normal",
            "text": "ما اسم اللاعب الموجود في الصورة؟",
            "answers": [
                {
                    "answer": "كريم بنزيما",
                    "state": false,
                    "_id": "6681c74aab23c4c91c7542d4"
                },
                {
                    "answer": "رياض محرز",
                    "state": false,
                    "_id": "6681c74aab23c4c91c7542d5"
                },
                {
                    "answer": "محمد صلاح",
                    "state": true,
                    "_id": "6681c74aab23c4c91c7542d6"
                },
                {
                    "answer": "هاري كين",
                    "state": false,
                    "_id": "6681c74aab23c4c91c7542d7"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T20:56:01.008Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c2afa41a92db3976d8f26",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720462118905.scaled_1000058656.jpg",
            "type": "true-false",
            "text": "شعار نادي اي سي ميلان ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681b9d7ab23c4c91c692931",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 2018؟",
            "answers": [
                {
                    "answer": "قطر",
                    "state": false,
                    "_id": "6681b9d7ab23c4c91c692932"
                },
                {
                    "answer": "البرازيل",
                    "state": false,
                    "_id": "6681b9d7ab23c4c91c692933"
                },
                {
                    "answer": "ألمانيا",
                    "state": false,
                    "_id": "6681b9d7ab23c4c91c692934"
                },
                {
                    "answer": "روسيا",
                    "state": true,
                    "_id": "6681b9d7ab23c4c91c692935"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T20:02:31.376Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668cf80d90b4098abfdf467f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720514694120.scaled_1000058636.jpg",
            "type": "true-false",
            "text": "شعار نادي ريال مدريد ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66af6e67e5f2103ccfedc848",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c3a593d7a4e225b9330"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو المنتخب صاحب المركز الثالث في كأس أمم آسيا ٢٠١١ ؟",
            "answers": [
                {
                    "answer": "الصين ",
                    "state": false,
                    "_id": "66af6e67e5f2103ccfedc849"
                },
                {
                    "answer": "إيران ",
                    "state": false,
                    "_id": "66af6e67e5f2103ccfedc84a"
                },
                {
                    "answer": "الكويت",
                    "state": false,
                    "_id": "66af6e67e5f2103ccfedc84b"
                },
                {
                    "answer": "كوريا الجنوبية ",
                    "state": true,
                    "_id": "66af6e67e5f2103ccfedc84c"
                }
            ],
            "active": true,
            "createdAt": "2024-08-04T12:04:55.955Z",
            "updatedAt": "2024-10-03T16:53:24.686Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66af7df9e5f2103ccfee858d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1722777184040.scaled_1000166565.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو تشاوميني ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6685b61803d8da9b7bb8f95f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66848e3542cb22569b964f92"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل كأس العالم لكرة اليد 2017؟",
            "answers": [
                {
                    "answer": "النرويج",
                    "state": false,
                    "_id": "6685b61803d8da9b7bb8f960"
                },
                {
                    "answer": "سلوفينيا",
                    "state": false,
                    "_id": "6685b61803d8da9b7bb8f961"
                },
                {
                    "answer": "فرنسا",
                    "state": true,
                    "_id": "6685b61803d8da9b7bb8f962"
                },
                {
                    "answer": "كرواتيا",
                    "state": false,
                    "_id": "6685b61803d8da9b7bb8f963"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T20:35:36.794Z",
            "updatedAt": "2024-10-03T16:51:53.960Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ad845fe5f2103ccfdd96a2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722647754286.scaled_60b25b43675d69377af7c83773244173.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو كروس؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668178ef593d7a4e22616a5b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719761314448.scaled_1000224304.jpg",
            "type": "normal",
            "text": "من كان وصيف كأس العالم لكرة القدم عام 1978؟",
            "answers": [
                {
                    "answer": "البرازيل",
                    "state": false,
                    "_id": "668178ef593d7a4e22616a5c"
                },
                {
                    "answer": "الأرجنتين ",
                    "state": false,
                    "_id": "668178ef593d7a4e22616a5d"
                },
                {
                    "answer": "إيطاليا",
                    "state": false,
                    "_id": "668178ef593d7a4e22616a5e"
                },
                {
                    "answer": "هولندا",
                    "state": true,
                    "_id": "668178ef593d7a4e22616a5f"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:25:35.743Z",
            "updatedAt": "2024-10-03T16:51:28.525Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aa72bee5f2103ccfd4e349",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "668bee3a41a92db3974deb24",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1722446654346.scaled_1000167453.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو كاسيميرو؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681e196844d311d79197f11",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d",
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل كأس العالم لكرة القدم عام 1986؟",
            "answers": [
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "6681e1f2844d311d791a515e"
                },
                {
                    "answer": "الأرجنتين ",
                    "state": true,
                    "_id": "6681e1f2844d311d791a515f"
                },
                {
                    "answer": "بلجيكا ",
                    "state": false,
                    "_id": "6681e1f2844d311d791a5160"
                },
                {
                    "answer": "ألمانيا الغربية ",
                    "state": false,
                    "_id": "6681e1f2844d311d791a5161"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T22:52:06.610Z",
            "updatedAt": "2024-10-03T16:51:28.558Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ae2869e5f2103ccfe133b4",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722689724411.scaled_565f16c5eb3abf6d08cd4d195213acd0.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو هانسين؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66c02a6be5f2103ccf09b7fa",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beef741a92db3975282a5"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حتى 2024، كم مرة حقق الرجاء الرياضي وصيف كأس العرش المغربي؟",
            "answers": [
                {
                    "answer": "6 مرات",
                    "state": true,
                    "_id": "66c02a6be5f2103ccf09b7fb"
                },
                {
                    "answer": "7 مرات ",
                    "state": false,
                    "_id": "66c02a6be5f2103ccf09b7fc"
                },
                {
                    "answer": "8 مرات ",
                    "state": false,
                    "_id": "66c02a6be5f2103ccf09b7fd"
                },
                {
                    "answer": "9 مرات ",
                    "state": false,
                    "_id": "66c02a6be5f2103ccf09b7fe"
                }
            ],
            "active": true,
            "createdAt": "2024-08-17T04:43:23.791Z",
            "updatedAt": "2024-10-03T16:53:36.192Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c33a941a92db397ef83f5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720464403664.scaled_1000058650.jpg",
            "type": "true-false",
            "text": "شعار نادي ليفربول ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668349e942cb22569b1ba0a8",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هي مدة الشوط الواحد في مباراة كرة القدم؟",
            "answers": [
                {
                    "answer": "45 دقيقة ",
                    "state": true,
                    "_id": "668349e942cb22569b1ba0a9"
                },
                {
                    "answer": "60 دقيقة ",
                    "state": false,
                    "_id": "668349e942cb22569b1ba0aa"
                },
                {
                    "answer": "90 دقيقة",
                    "state": false,
                    "_id": "668349e942cb22569b1ba0ab"
                },
                {
                    "answer": "120 دقيقة",
                    "state": false,
                    "_id": "668349e942cb22569b1ba0ac"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T00:29:29.124Z",
            "updatedAt": "2024-10-03T16:51:40.219Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669bdf8fb22d8881b4da1fd6",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b6f593d7a4e225b925f",
                "66811b7f593d7a4e225b926d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721491407288.scaled_1000063414.jpg",
            "type": "true-false",
            "text": "شعار نادي بيليننسيش ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66819868ab23c4c91c5b9a9f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1958؟",
            "answers": [
                {
                    "answer": "أوروغواي",
                    "state": false,
                    "_id": "66819868ab23c4c91c5b9aa0"
                },
                {
                    "answer": "السويد",
                    "state": true,
                    "_id": "66819868ab23c4c91c5b9aa1"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "66819868ab23c4c91c5b9aa2"
                },
                {
                    "answer": "سويسرا ",
                    "state": false,
                    "_id": "66819868ab23c4c91c5b9aa3"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T17:39:52.688Z",
            "updatedAt": "2024-10-03T16:51:28.531Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668da0b890b4098abfe44de5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720557860902.scaled_1000058811.jpg",
            "type": "true-false",
            "text": "شعار نادي بورتو",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6686070503d8da9b7bc385a5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c23593d7a4e225b9318"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس الأمم الأفريقية لكرة القدم عام 1994؟",
            "answers": [
                {
                    "answer": "تونس",
                    "state": true,
                    "_id": "6686070503d8da9b7bc385a6"
                },
                {
                    "answer": "الجزائر",
                    "state": false,
                    "_id": "6686070503d8da9b7bc385a7"
                },
                {
                    "answer": "ليبيا",
                    "state": false,
                    "_id": "6686070503d8da9b7bc385a8"
                },
                {
                    "answer": "المغرب",
                    "state": false,
                    "_id": "6686070503d8da9b7bc385a9"
                }
            ],
            "active": true,
            "createdAt": "2024-07-04T02:20:53.128Z",
            "updatedAt": "2024-10-03T16:51:53.963Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b7ec94e5f2103ccffb835e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1723329795769.scaled_Picsart_24-07-27_23-44-22-528.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع ناديه بايرن ميونيخ بكأس السوبر الاوروبي 2020؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681e8d0844d311d792428bd",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو أفضل إنجاز لتشيكوسلوفاكيا في كأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "المركز الأول ",
                    "state": false,
                    "_id": "6681e8d0844d311d792428be"
                },
                {
                    "answer": "المركز الثاني",
                    "state": true,
                    "_id": "6681e8d0844d311d792428bf"
                },
                {
                    "answer": "المركز الثالث ",
                    "state": false,
                    "_id": "6681e8d0844d311d792428c0"
                },
                {
                    "answer": "المركز الرابع ",
                    "state": false,
                    "_id": "6681e8d0844d311d792428c1"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:22:56.164Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669ed514b22d8881b4ed5469",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "حاز الاعب غيورغي شاروشي على جائزة الكرة الفضية بكأس العالم ١٩٣٨ ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668197fcab23c4c91c5b7c0b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من اللاعب الأكثر تسجيلاً للأهداف في تاريخ كأس العالم للقارات لكرة القدم؟",
            "answers": [
                {
                    "answer": "فرناندو توريس",
                    "state": false,
                    "_id": "668197fcab23c4c91c5b7c0c"
                },
                {
                    "answer": "رونالدو الظاهرة",
                    "state": false,
                    "_id": "668197fcab23c4c91c5b7c0d"
                },
                {
                    "answer": "مرزوق العتيبي",
                    "state": false,
                    "_id": "668197fcab23c4c91c5b7c0e"
                },
                {
                    "answer": "رونالدينيو",
                    "state": true,
                    "_id": "668197fcab23c4c91c5b7c0f"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T17:38:04.067Z",
            "updatedAt": "2024-10-03T16:51:28.531Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669989f9b22d8881b4d0de90",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811ba1593d7a4e225b928c",
                "668bee3a41a92db3974deb24",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "كان بيدرو هو اللاعب الذي سجل الهدف الثالث في نهائي دوري أبطال أوروبا 2011 ضد مانشستر يونايتد",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6694e232f45a05d62e75bcb3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "668c222041a92db397af915f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أبن أقيمت أول أوليمبيات صيفية في العالم ؟",
            "answers": [
                {
                    "answer": "برشلونة ",
                    "state": false,
                    "_id": "6694e232f45a05d62e75bcb4"
                },
                {
                    "answer": "أثينا ",
                    "state": true,
                    "_id": "6694e232f45a05d62e75bcb5"
                },
                {
                    "answer": "انجلترا ",
                    "state": false,
                    "_id": "6694e232f45a05d62e75bcb6"
                },
                {
                    "answer": "أمريكا ",
                    "state": false,
                    "_id": "6694e232f45a05d62e75bcb7"
                }
            ],
            "active": true,
            "createdAt": "2024-07-15T08:47:46.867Z",
            "updatedAt": "2024-10-03T16:52:32.754Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b34d6ee5f2103ccff8121a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1723026814711.scaled_1000166396.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو جوندوجان ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a41b06b22d8881b40710a3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811bc5593d7a4e225b92af",
                "668f1ab590b4098abfeaa628",
                "668f815390b4098abfebed7a",
                "668f826190b4098abfec02f9",
                "66962eb6079f88fa2a39563a"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722030990216.scaled_1000055424.jpg",
            "type": "normal",
            "text": "ما هي جنسية اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "فرنسي ",
                    "state": true,
                    "_id": "66a41b06b22d8881b40710a4"
                },
                {
                    "answer": "ايطالي ",
                    "state": false,
                    "_id": "66a41b06b22d8881b40710a5"
                },
                {
                    "answer": "كندي",
                    "state": false,
                    "_id": "66a41b06b22d8881b40710a6"
                },
                {
                    "answer": "هولاندي",
                    "state": false,
                    "_id": "66a41b06b22d8881b40710a7"
                }
            ],
            "active": true,
            "createdAt": "2024-07-26T21:54:14.415Z",
            "updatedAt": "2024-10-03T16:53:08.524Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669e713db22d8881b4eac807",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "مارك أوفرمارس هو صاحب جائزة أفضل لاعب شاب فى كأس العالم ١٩٩٤ ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681b62eab23c4c91c664344",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1994؟",
            "answers": [
                {
                    "answer": "كوريا واليابان",
                    "state": false,
                    "_id": "6681b62eab23c4c91c664345"
                },
                {
                    "answer": "الولايات المتحدة الأمريكية ",
                    "state": true,
                    "_id": "6681b62eab23c4c91c664346"
                },
                {
                    "answer": "قطر",
                    "state": false,
                    "_id": "6681b62eab23c4c91c664347"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "6681b62eab23c4c91c664348"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T19:46:54.605Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66af705ee5f2103ccfeddc5d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722773723908.scaled_Picsart_24-07-28_01-32-35-396.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع ناديه توتينهام بالدوري الانجليزي موسم 2022-2023؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681bd84ab23c4c91c6c37a7",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل بكأس العالم لكرة القدم عام 1954؟",
            "answers": [
                {
                    "answer": "المجر",
                    "state": false,
                    "_id": "6681bd84ab23c4c91c6c37a8"
                },
                {
                    "answer": "النمسا",
                    "state": false,
                    "_id": "6681bd84ab23c4c91c6c37a9"
                },
                {
                    "answer": "الأوروغواي ",
                    "state": false,
                    "_id": "6681bd84ab23c4c91c6c37aa"
                },
                {
                    "answer": "ألمانيا الغربية",
                    "state": true,
                    "_id": "6681bd84ab23c4c91c6c37ab"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T20:18:12.193Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698f282b22d8881b4cd6e81",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "عدد ألقاب الدوري الاسباني التي فاز بها نادي برشلونة حتى 2024 هو 26",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681a1a0ab23c4c91c5e0812",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c23593d7a4e225b9318"
            ],
            "user_ids": [
                "66811ee2593d7a4e225b947d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما اسم الدولة الافريقية التي حصلت على كأس امم افريقيا لثلاث سنوات على التوالي",
            "answers": [
                {
                    "answer": "الكاميرون",
                    "state": false,
                    "_id": "6681a1a0ab23c4c91c5e0813"
                },
                {
                    "answer": "السنغال",
                    "state": false,
                    "_id": "6681a1a0ab23c4c91c5e0814"
                },
                {
                    "answer": "مصر",
                    "state": true,
                    "_id": "6681a1a0ab23c4c91c5e0815"
                },
                {
                    "answer": "كينيا",
                    "state": false,
                    "_id": "6681a1a0ab23c4c91c5e0816"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T18:19:12.921Z",
            "updatedAt": "2024-10-03T16:51:28.533Z",
            "__v": 0,
            "check": false
        }
    ]


const arr2 = [
        {
            "_id": "66aab27ee5f2103ccfd5f486",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beece41a92db39752313a"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "حسن شحاتة هو الهداف التاريخي لنادي الزمالك؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6685c94b03d8da9b7b183916",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل الدوري السعودي لكرة القدم لموسم 2014-2015؟",
            "answers": [
                {
                    "answer": "الأهلي",
                    "state": false,
                    "_id": "6685c94b03d8da9b7b183917"
                },
                {
                    "answer": "الهلال",
                    "state": false,
                    "_id": "6685c94b03d8da9b7b183918"
                },
                {
                    "answer": "النصر",
                    "state": true,
                    "_id": "6685c94b03d8da9b7b183919"
                },
                {
                    "answer": "الاتحاد",
                    "state": false,
                    "_id": "6685c94b03d8da9b7b18391a"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T21:57:31.777Z",
            "updatedAt": "2024-10-03T16:51:53.961Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aea6c3e5f2103ccfe45262",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b94593d7a4e225b927c",
                "668bee4b41a92db3974e13cd",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722722077995.scaled_1000052331.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو هارڤي إليوت ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6683291dba38dd101b1df53c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c60593d7a4e225b93ae"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو أفضل مركز لكرواتيا في تاريخ كأس العالم لكرة السلة حتى 2024؟",
            "answers": [
                {
                    "answer": "المركز الأول",
                    "state": false,
                    "_id": "6683291dba38dd101b1df53d"
                },
                {
                    "answer": "المركز الثاني",
                    "state": false,
                    "_id": "6683291dba38dd101b1df53e"
                },
                {
                    "answer": "المركز الثالث",
                    "state": true,
                    "_id": "6683291dba38dd101b1df53f"
                },
                {
                    "answer": "المركز الرابع",
                    "state": false,
                    "_id": "6683291dba38dd101b1df540"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T22:09:33.402Z",
            "updatedAt": "2024-10-03T16:51:40.217Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668e9dbe90b4098abfe8007c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720622656732.scaled_1000059024.jpg",
            "type": "true-false",
            "text": "شعار نادي أتلتيك بلباو ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66812e7e593d7a4e225b964e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811890593d7a4e225b921b",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811ba1593d7a4e225b928c",
                "66811bc5593d7a4e225b92af",
                "66811c53593d7a4e225b9394"
            ],
            "user_ids": [
                "66810829593d7a4e225b918b"
            ],
            "picture": "uploads/questions/1719742197369.scaled_1000055217.jpg",
            "type": "normal",
            "text": "ما هو الاسم الأول للاعب ميسي؟",
            "answers": [
                {
                    "answer": "ليونيل",
                    "state": true,
                    "_id": "66812e7e593d7a4e225b964f"
                },
                {
                    "answer": "كريستيانو",
                    "state": false,
                    "_id": "66812e7e593d7a4e225b9650"
                },
                {
                    "answer": "كارلوس",
                    "state": false,
                    "_id": "66812e7e593d7a4e225b9651"
                },
                {
                    "answer": "سيمون",
                    "state": false,
                    "_id": "66812e7e593d7a4e225b9652"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T10:07:58.318Z",
            "updatedAt": "2024-10-03T16:51:28.506Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66c6dbace5f2103ccf0e7403",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1724308463670.scaled_1000174915.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو جيريمي سانمينتو ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66834bda42cb22569b276498",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668999e9eb9dbb91091c6122"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هي الرياضة الوطنية في تشيلي؟",
            "answers": [
                {
                    "answer": "باتو",
                    "state": false,
                    "_id": "66834bda42cb22569b276499"
                },
                {
                    "answer": "رعاة البقر",
                    "state": true,
                    "_id": "66834bda42cb22569b27649a"
                },
                {
                    "answer": "التنس",
                    "state": false,
                    "_id": "66834bda42cb22569b27649b"
                },
                {
                    "answer": "كرة السلة ",
                    "state": false,
                    "_id": "66834bda42cb22569b27649c"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T00:37:46.999Z",
            "updatedAt": "2024-10-03T16:51:40.219Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669a6f83b22d8881b4d4fa22",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721397254812.scaled_1000062856.jpg",
            "type": "true-false",
            "text": "شعار نادي بريستول سيتي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681e3da844d311d791d23ed",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل بكأس العالم لكرة القدم عام 2018؟",
            "answers": [
                {
                    "answer": "كرواتيا ",
                    "state": false,
                    "_id": "6681e3da844d311d791d23ee"
                },
                {
                    "answer": "فرنسا ",
                    "state": true,
                    "_id": "6681e3da844d311d791d23ef"
                },
                {
                    "answer": "بلجيكا ",
                    "state": false,
                    "_id": "6681e3da844d311d791d23f0"
                },
                {
                    "answer": "إنجلترا",
                    "state": false,
                    "_id": "6681e3da844d311d791d23f1"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:01:46.500Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66980ce1b22d8881b4c7fbda",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "داني ألفيس هو اللاعب الأكثر حصولًا على الألقاب في تاريخ برشلونة",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66812192593d7a4e225b950d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bfd593d7a4e225b92eb"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719738878861.scaled_1000224281.jpg",
            "type": "normal",
            "text": "من توج ببطولة دوري أبطال أفريقيا موسم 2023-2024؟",
            "answers": [
                {
                    "answer": "الوداد المغربي",
                    "state": false,
                    "_id": "66812192593d7a4e225b950e"
                },
                {
                    "answer": "الترجي التونسي",
                    "state": false,
                    "_id": "66812192593d7a4e225b950f"
                },
                {
                    "answer": "الأهلي المصري ",
                    "state": true,
                    "_id": "66812192593d7a4e225b9510"
                },
                {
                    "answer": "صن داونز الحنوب أفريقي",
                    "state": false,
                    "_id": "66812192593d7a4e225b9511"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T09:12:50.445Z",
            "updatedAt": "2024-10-03T16:51:28.506Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668cf60690b4098abfdf2db5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720514100861.scaled_1000058640.jpg",
            "type": "true-false",
            "text": "شعار نادي أتلتيكو مدريد ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a0f530b22d8881b4f94506",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811c0c593d7a4e225b9301"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721824707342.scaled_1000078362.jpg",
            "type": "normal",
            "text": "ما هو النادي القطري الذي لعب معه بيب غوارديولا ؟",
            "answers": [
                {
                    "answer": "الأهلي",
                    "state": true,
                    "_id": "66a0f530b22d8881b4f94507"
                },
                {
                    "answer": "السد",
                    "state": false,
                    "_id": "66a0f530b22d8881b4f94508"
                },
                {
                    "answer": "العربي",
                    "state": false,
                    "_id": "66a0f530b22d8881b4f94509"
                },
                {
                    "answer": "الدحيل",
                    "state": false,
                    "_id": "66a0f530b22d8881b4f9450a"
                }
            ],
            "active": true,
            "createdAt": "2024-07-24T12:36:00.691Z",
            "updatedAt": "2024-10-03T16:53:05.026Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668d499c90b4098abfe19b58",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720535562813.scaled_1000058795.jpg",
            "type": "true-false",
            "text": "شعار نادي أجاكس ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a42cbdb22d8881b40750de",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811ba1593d7a4e225b928c",
                "66811bc5593d7a4e225b92af",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1722035563721.scaled_1000168393.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "امبابى ",
                    "state": true,
                    "_id": "66a42cbdb22d8881b40750df"
                },
                {
                    "answer": "خوليان الفريز ",
                    "state": false,
                    "_id": "66a42cbdb22d8881b40750e0"
                },
                {
                    "answer": "هالاند ",
                    "state": false,
                    "_id": "66a42cbdb22d8881b40750e1"
                },
                {
                    "answer": "هنري",
                    "state": false,
                    "_id": "66a42cbdb22d8881b40750e2"
                }
            ],
            "active": true,
            "createdAt": "2024-07-26T23:09:49.923Z",
            "updatedAt": "2024-10-03T16:53:08.524Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66c7179be5f2103ccf0e8afe",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1724323760229.scaled_1000174923.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو جاك ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681ad07ab23c4c91c62f6b1",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "6681a14eab23c4c91c5de595",
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1719774636594.scaled_1000855432.jpg",
            "type": "normal",
            "text": "من هو الهداف التاريخي للدوري الاسباني ",
            "answers": [
                {
                    "answer": "ليونيل ميسي ",
                    "state": true,
                    "_id": "6696f782079f88fa2a426e11"
                },
                {
                    "answer": "كريستيانو رونالدو ",
                    "state": false,
                    "_id": "6696f782079f88fa2a426e12"
                },
                {
                    "answer": "كريم بنزيما",
                    "state": false,
                    "_id": "6696f782079f88fa2a426e13"
                },
                {
                    "answer": "سواريز",
                    "state": false,
                    "_id": "6696f782079f88fa2a426e14"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T19:07:51.522Z",
            "updatedAt": "2024-10-03T16:51:28.536Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c2aa041a92db3975eb8ff",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720462113379.scaled_1000058469.png",
            "type": "true-false",
            "text": "شعار نادي بروسيا دورتموند ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66817347593d7a4e225ff2fc",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759800231.scaled_1000224304.jpg",
            "type": "normal",
            "text": "كانت هناك بطولتان لكأس العالم لكرة القدم، فما اسم البطولة الاولى؟",
            "answers": [
                {
                    "answer": "كأس الدول لكرة القدم",
                    "state": false,
                    "_id": "66817347593d7a4e225ff2fd"
                },
                {
                    "answer": "كأس الأفرو أسيوية",
                    "state": false,
                    "_id": "66817347593d7a4e225ff2fe"
                },
                {
                    "answer": "كأس جول ريميه",
                    "state": true,
                    "_id": "66817347593d7a4e225ff2ff"
                },
                {
                    "answer": "كأس المنتخبات لكرة القدم ",
                    "state": false,
                    "_id": "66817347593d7a4e225ff300"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:01:27.948Z",
            "updatedAt": "2024-10-03T16:51:28.522Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66c0807ee5f2103ccf0b0c75",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b94593d7a4e225b927c",
                "668beff141a92db39764c4ee",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1723892000387.scaled_1000172925.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره مركزه مهاجم ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668178ef593d7a4e22616a5b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719761314448.scaled_1000224304.jpg",
            "type": "normal",
            "text": "من كان وصيف كأس العالم لكرة القدم عام 1978؟",
            "answers": [
                {
                    "answer": "البرازيل",
                    "state": false,
                    "_id": "668178ef593d7a4e22616a5c"
                },
                {
                    "answer": "الأرجنتين ",
                    "state": false,
                    "_id": "668178ef593d7a4e22616a5d"
                },
                {
                    "answer": "إيطاليا",
                    "state": false,
                    "_id": "668178ef593d7a4e22616a5e"
                },
                {
                    "answer": "هولندا",
                    "state": true,
                    "_id": "668178ef593d7a4e22616a5f"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:25:35.743Z",
            "updatedAt": "2024-10-03T16:51:28.525Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698d6ddb22d8881b4ccc204",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b6f593d7a4e225b925f",
                "66811b7f593d7a4e225b926d",
                "66811ba1593d7a4e225b928c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721292577366.scaled_1000060682.jpg",
            "type": "true-false",
            "text": "شعار نادي غرناطة ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668173b5593d7a4e22602873",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759936099.scaled_1000224304.jpg",
            "type": "normal",
            "text": "كم مرة تجاوزت اسكتلندا دور المجموعات في كأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "مرة واحدة",
                    "state": false,
                    "_id": "668173b5593d7a4e22602874"
                },
                {
                    "answer": "مرتان",
                    "state": false,
                    "_id": "668173b5593d7a4e22602875"
                },
                {
                    "answer": "ثلاث مرات",
                    "state": false,
                    "_id": "668173b5593d7a4e22602876"
                },
                {
                    "answer": "لم تتأهل من الأساس",
                    "state": true,
                    "_id": "668173b5593d7a4e22602877"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:03:17.315Z",
            "updatedAt": "2024-10-03T16:51:28.523Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b7e5a1e5f2103ccffb62fd",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1723328027247.scaled_Picsart_24-07-28_00-08-58-302.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع ناديه بايرن ميونيخ بكأس السوبر الاوروبي 2020؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681e3b5844d311d791ce9cf",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل بكأس العالم لكرة القدم عام 2014؟",
            "answers": [
                {
                    "answer": "هولندا",
                    "state": false,
                    "_id": "6681e3b5844d311d791ce9d0"
                },
                {
                    "answer": "البرازيل",
                    "state": false,
                    "_id": "6681e3b5844d311d791ce9d1"
                },
                {
                    "answer": "الأرجنتين ",
                    "state": false,
                    "_id": "6681e3b5844d311d791ce9d2"
                },
                {
                    "answer": "ألمانيا",
                    "state": true,
                    "_id": "6681e3b5844d311d791ce9d3"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:01:09.016Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b7e093e5f2103ccffb4985",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1723326728549.scaled_Picsart_24-07-27_23-10-34-747.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع ناديه بايرن ميونيخ بدوري ابطال اوروبا موسم 2019-2020؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66be23a5e5f2103ccf058b19",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c53593d7a4e225b9394"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو المنتخب الوصيف لكأس أمريكا الجنوبية لكرة القدم عام ١٩٦٣؟",
            "answers": [
                {
                    "answer": "تشيلي ",
                    "state": false,
                    "_id": "66be23b5e5f2103ccf058ce2"
                },
                {
                    "answer": "البرازيل ",
                    "state": false,
                    "_id": "66be23b5e5f2103ccf058ce3"
                },
                {
                    "answer": "الأرجنتين ",
                    "state": false,
                    "_id": "66be23b5e5f2103ccf058ce4"
                },
                {
                    "answer": "باراغواي ",
                    "state": true,
                    "_id": "66be23b5e5f2103ccf058ce5"
                }
            ],
            "active": true,
            "createdAt": "2024-08-15T15:49:57.555Z",
            "updatedAt": "2024-10-03T16:53:36.190Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c2ace41a92db397678486",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720462156232.scaled_1000058469.png",
            "type": "true-false",
            "text": "شعار نادي بايرن ميونيخ ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6685ce3203d8da9b7b78d1a8",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "متى حقق الشباب أول لقب له في الدوري السعودي لكرة القدم؟",
            "answers": [
                {
                    "answer": "موسم 1988-1989",
                    "state": false,
                    "_id": "6685ce3203d8da9b7b78d1a9"
                },
                {
                    "answer": "موسم 1989-1990",
                    "state": false,
                    "_id": "6685ce3203d8da9b7b78d1aa"
                },
                {
                    "answer": "موسم 1990-1991",
                    "state": true,
                    "_id": "6685ce3203d8da9b7b78d1ab"
                },
                {
                    "answer": "موسم 1991-1992",
                    "state": false,
                    "_id": "6685ce3203d8da9b7b78d1ac"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T22:18:26.102Z",
            "updatedAt": "2024-10-03T16:51:53.961Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669e741cb22d8881b4eaee2f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "كيليان مبابي  هو صاحب جائزة أفضل لاعب شاب فى كأس العالم٢٠١٤ ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6689a99deb9dbb9109f5fe65",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bed593d7a4e225b92d6"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من حصل على لقب الدوري المصري لكرة القدم موسم 1993-1994؟",
            "answers": [
                {
                    "answer": "الاهلي",
                    "state": true,
                    "_id": "6689a99deb9dbb9109f5fe66"
                },
                {
                    "answer": "الزمالك",
                    "state": false,
                    "_id": "6689a99deb9dbb9109f5fe67"
                },
                {
                    "answer": "الترسانة",
                    "state": false,
                    "_id": "6689a99deb9dbb9109f5fe68"
                },
                {
                    "answer": "الأولمبي",
                    "state": false,
                    "_id": "6689a99deb9dbb9109f5fe69"
                }
            ],
            "active": true,
            "createdAt": "2024-07-06T20:31:25.167Z",
            "updatedAt": "2024-10-03T16:52:12.113Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66979cc5079f88fa2a4704e3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b6f593d7a4e225b925f",
                "66811ba1593d7a4e225b928c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721212174780.scaled_1000060707.jpg",
            "type": "true-false",
            "text": "شعار نادي فالنسيا ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66817289593d7a4e225fd458",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759598333.scaled_1000224304.jpg",
            "type": "normal",
            "text": "كأس العالم لكرة القدم يقام كل كم عام؟",
            "answers": [
                {
                    "answer": "عامين",
                    "state": false,
                    "_id": "66817289593d7a4e225fd459"
                },
                {
                    "answer": "3 أعوام",
                    "state": false,
                    "_id": "66817289593d7a4e225fd45a"
                },
                {
                    "answer": "4 أعوام",
                    "state": true,
                    "_id": "66817289593d7a4e225fd45b"
                },
                {
                    "answer": "6 أعوام",
                    "state": false,
                    "_id": "66817289593d7a4e225fd45c"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T14:58:17.947Z",
            "updatedAt": "2024-10-03T16:51:28.522Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ad52d4e5f2103ccfdc91cb",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722635066587.scaled_3d4818210f859950963f49c601f0ff1e.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو ديمبيلي؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6697b14c079f88fa2a47a016",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "66811bc5593d7a4e225b92af",
                "66811c53593d7a4e225b9394",
                "668bef7d41a92db3975e55be",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721217439068.scaled_1000052560.jpg",
            "type": "normal",
            "text": "ما هي جنسية اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "برازيلي ",
                    "state": true,
                    "_id": "6697b14c079f88fa2a47a017"
                },
                {
                    "answer": "أرجنتيني ",
                    "state": false,
                    "_id": "6697b14c079f88fa2a47a018"
                },
                {
                    "answer": "مكسيكي ",
                    "state": false,
                    "_id": "6697b14c079f88fa2a47a019"
                },
                {
                    "answer": "اكوادوري ",
                    "state": false,
                    "_id": "6697b14c079f88fa2a47a01a"
                }
            ],
            "active": true,
            "createdAt": "2024-07-17T11:55:56.013Z",
            "updatedAt": "2024-10-03T16:52:42.364Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668eac4790b4098abfe872bf",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720626400977.scaled_1000059313.png",
            "type": "true-false",
            "text": "شعار نادي غلطة سراي",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668173f0593d7a4e226053b7",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759878781.scaled_1000224304.jpg",
            "type": "normal",
            "text": "في مونديال 1958، من هو المنتخب الوحيد الذي لم يفز عليه البرازيل؟",
            "answers": [
                {
                    "answer": "الأرجنتين",
                    "state": false,
                    "_id": "668173f0593d7a4e226053b8"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "668173f0593d7a4e226053b9"
                },
                {
                    "answer": "إسبانيا",
                    "state": false,
                    "_id": "668173f0593d7a4e226053ba"
                },
                {
                    "answer": "إنجلترا",
                    "state": true,
                    "_id": "668173f0593d7a4e226053bb"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:04:16.561Z",
            "updatedAt": "2024-10-03T16:51:28.523Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b110f2e5f2103ccff4c35a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722880377509.scaled_Picsart_24-07-28_01-25-07-006.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع ناديه بايرن ميونيخ بكأس المانيا موسم 2023-2024؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66853d9803d8da9b7b2a1bf1",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "66814fc6593d7a4e225bbcc2",
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720008185168.scaled_Ù¢Ù Ù¢Ù¤Ù Ù§Ù Ù¢_Ù¢Ù¢Ù¡Ù¥Ù Ù¡.jpg",
            "type": "normal",
            "text": "كم عدد مرات فوز ريال سرقسطة بلقب الدوري الإسباني حتى عام 2024؟",
            "answers": [
                {
                    "answer": "1 مرة",
                    "state": false,
                    "_id": "6685429703d8da9b7b30535e"
                },
                {
                    "answer": "2 مرة",
                    "state": false,
                    "_id": "6685429703d8da9b7b30535f"
                },
                {
                    "answer": "3 مرات",
                    "state": false,
                    "_id": "6685429703d8da9b7b305360"
                },
                {
                    "answer": "لم يفز باللقب",
                    "state": true,
                    "_id": "6685429703d8da9b7b305361"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T12:01:28.109Z",
            "updatedAt": "2024-10-03T16:51:49.847Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66942a1df45a05d62e71993e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b6f593d7a4e225b925f",
                "66811b7f593d7a4e225b926d",
                "6682a392844d311d79ef37a7",
                "668f815390b4098abfebed7a"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720986198603.scaled_1000060845.jpg",
            "type": "true-false",
            "text": "شعار نادي مونزا ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681e603844d311d79205231",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هي أول نسخة من كأس العالم لكرة القدم تفوز بها الأرجنتين؟",
            "answers": [
                {
                    "answer": "1954",
                    "state": false,
                    "_id": "6681e603844d311d79205232"
                },
                {
                    "answer": "1978",
                    "state": true,
                    "_id": "6681e603844d311d79205233"
                },
                {
                    "answer": "1986",
                    "state": false,
                    "_id": "6681e603844d311d79205234"
                },
                {
                    "answer": "2022",
                    "state": false,
                    "_id": "6681e603844d311d79205235"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:10:59.055Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6697f850b22d8881b4c74fd5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "الملعب الرئيسي لنادي برشلونة هو كامب نو",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66817378593d7a4e22600d76",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759831040.scaled_1000224304.jpg",
            "type": "normal",
            "text": "كم مرة سرق كأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "مرة واحدة",
                    "state": false,
                    "_id": "66817378593d7a4e22600d77"
                },
                {
                    "answer": "مرتان",
                    "state": true,
                    "_id": "66817378593d7a4e22600d78"
                },
                {
                    "answer": "ثلاث مرات",
                    "state": false,
                    "_id": "66817378593d7a4e22600d79"
                },
                {
                    "answer": "أربع مرات",
                    "state": false,
                    "_id": "66817378593d7a4e22600d7a"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:02:16.291Z",
            "updatedAt": "2024-10-03T16:51:28.522Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66afb8eae5f2103ccff127cf",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beeec41a92db3975259eb"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "تولى عبد الإله أكرم رئاسة نادي الوداد الرياضي في الفترة 2007 - 2014؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "669ccb99b22d8881b4e02899",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت المباراة النهائية لكأس العالم لكرة القدم عام١٩٧٨ ؟ ",
            "answers": [
                {
                    "answer": "ملعب ماراكانا ",
                    "state": false,
                    "_id": "669cd354b22d8881b4e0680e"
                },
                {
                    "answer": "الملعب الأوليمبي ",
                    "state": false,
                    "_id": "669cd354b22d8881b4e0680f"
                },
                {
                    "answer": "ملعب وانكدورف ",
                    "state": false,
                    "_id": "669cd354b22d8881b4e06810"
                },
                {
                    "answer": "ملعب أنتونيو فسيبوكيو ",
                    "state": true,
                    "_id": "669cd354b22d8881b4e06811"
                }
            ],
            "active": true,
            "createdAt": "2024-07-21T08:49:29.360Z",
            "updatedAt": "2024-10-03T16:52:55.985Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669ea880b22d8881b4ecb100",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bd6593d7a4e225b92c2",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721673960268.scaled_1000066021.jpg",
            "type": "true-false",
            "text": "شعار نادي الوحدة السعودي",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "669e4d69b22d8881b4e8e2ce",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bc5593d7a4e225b92af",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721650649761.scaled_1000054366.jpg",
            "type": "normal",
            "text": "ما هي جنسية اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "فرنسي ",
                    "state": true,
                    "_id": "669e4d69b22d8881b4e8e2cf"
                },
                {
                    "answer": "سنغالي ",
                    "state": false,
                    "_id": "669e4d69b22d8881b4e8e2d0"
                },
                {
                    "answer": "ايطالي ",
                    "state": false,
                    "_id": "669e4d69b22d8881b4e8e2d1"
                },
                {
                    "answer": "اسباني ",
                    "state": false,
                    "_id": "669e4d69b22d8881b4e8e2d2"
                }
            ],
            "active": true,
            "createdAt": "2024-07-22T12:15:37.499Z",
            "updatedAt": "2024-10-03T16:53:01.889Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c374541a92db397220c1c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720465313071.scaled_1000058648.jpg",
            "type": "true-false",
            "text": "شعار نادي تورينو ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6685fde503d8da9b7b63b370",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حتى عام 2024، كم مرة حقق النصر لقب كأس خادم الحرمين الشريفين السعودي؟",
            "answers": [
                {
                    "answer": "4 مرات",
                    "state": false,
                    "_id": "6685fde503d8da9b7b63b371"
                },
                {
                    "answer": "5 مرات",
                    "state": false,
                    "_id": "6685fde503d8da9b7b63b372"
                },
                {
                    "answer": "6 مرات",
                    "state": true,
                    "_id": "6685fde503d8da9b7b63b373"
                },
                {
                    "answer": "7 مرات",
                    "state": false,
                    "_id": "6685fde503d8da9b7b63b374"
                }
            ],
            "active": true,
            "createdAt": "2024-07-04T01:41:57.259Z",
            "updatedAt": "2024-10-03T16:51:53.963Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c352741a92db39706d7fd",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720464795009.scaled_1000058646.jpg",
            "type": "true-false",
            "text": "شعار نادي تشيلسي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681e934844d311d7924d9a7",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو أفضل إنجاز للنمسا في كأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "المركز الأول",
                    "state": false,
                    "_id": "6681e934844d311d7924d9a8"
                },
                {
                    "answer": "المركز الثاني",
                    "state": false,
                    "_id": "6681e934844d311d7924d9a9"
                },
                {
                    "answer": "المركز الثالث",
                    "state": true,
                    "_id": "6681e934844d311d7924d9aa"
                },
                {
                    "answer": "المركز الرابع",
                    "state": false,
                    "_id": "6681e934844d311d7924d9ab"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:24:36.009Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c2afa41a92db3976d8f26",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720462118905.scaled_1000058656.jpg",
            "type": "true-false",
            "text": "شعار نادي اي سي ميلان ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668453f142cb22569bdd14eb",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت دورة الألعاب الأولمبية 1968؟",
            "answers": [
                {
                    "answer": "طوكيو",
                    "state": false,
                    "_id": "668453f142cb22569bdd14ec"
                },
                {
                    "answer": "ملبورن ",
                    "state": false,
                    "_id": "668453f142cb22569bdd14ed"
                },
                {
                    "answer": "روما",
                    "state": false,
                    "_id": "668453f142cb22569bdd14ee"
                },
                {
                    "answer": "مكسيكو سيتي",
                    "state": true,
                    "_id": "668453f142cb22569bdd14ef"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T19:24:33.648Z",
            "updatedAt": "2024-10-03T16:51:44.815Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aadddbe5f2103ccfd789fe",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722474027389.scaled_62d1ee123a68fe992142b57e5fd9296e.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو باو كوبارسي؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668172d3593d7a4e225fe893",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759750305.scaled_1000224304.jpg",
            "type": "normal",
            "text": "متى بدأت أول بطولة لكأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "1926",
                    "state": false,
                    "_id": "668172d3593d7a4e225fe894"
                },
                {
                    "answer": "1930",
                    "state": true,
                    "_id": "668172d3593d7a4e225fe895"
                },
                {
                    "answer": "1934",
                    "state": false,
                    "_id": "668172d3593d7a4e225fe896"
                },
                {
                    "answer": "1938",
                    "state": false,
                    "_id": "668172d3593d7a4e225fe897"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T14:59:31.569Z",
            "updatedAt": "2024-10-03T16:51:28.522Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6697ff37b22d8881b4c78610",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "تم تأسيس نادي برشلونة بجهود مشتركة من لاعبين من سويسرا واسبانيا وبريطانيا",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681ab23ab23c4c91c625c4a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811890593d7a4e225b921b",
                "66827f03844d311d798c6347"
            ],
            "user_ids": [
                "6681a14eab23c4c91c5de595"
            ],
            "picture": "uploads/questions/1719774021552.scaled_1000855432.jpg",
            "type": "normal",
            "text": "كم مرة فاز ميسي بجائزة الكرة الذهبية ؟",
            "answers": [
                {
                    "answer": "2",
                    "state": false,
                    "_id": "6696f96d079f88fa2a429dff"
                },
                {
                    "answer": "4",
                    "state": false,
                    "_id": "6696f96d079f88fa2a429e00"
                },
                {
                    "answer": "5",
                    "state": false,
                    "_id": "6696f96d079f88fa2a429e01"
                },
                {
                    "answer": "8",
                    "state": true,
                    "_id": "6696f96d079f88fa2a429e02"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T18:59:47.333Z",
            "updatedAt": "2024-10-03T16:51:28.536Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c34a541a92db397ff1533",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720464622188.scaled_1000058652.jpg",
            "type": "true-false",
            "text": "شعار نادي مانشستر سيتي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66826708844d311d7964f3bb",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "الحكم الإماراتي علي بوجسيم حكم كم مبارة في كأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "5 مباريات",
                    "state": false,
                    "_id": "66826708844d311d7964f3bc"
                },
                {
                    "answer": "6 مباريات",
                    "state": false,
                    "_id": "66826708844d311d7964f3bd"
                },
                {
                    "answer": "7 مباريات",
                    "state": true,
                    "_id": "66826708844d311d7964f3be"
                },
                {
                    "answer": "8 مباريات",
                    "state": false,
                    "_id": "66826708844d311d7964f3bf"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T08:21:28.731Z",
            "updatedAt": "2024-10-03T16:51:28.562Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668cf82d90b4098abfdf476c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720514721605.scaled_1000058636.jpg",
            "type": "true-false",
            "text": "شعار نادي ليفربول ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668179ab593d7a4e2261ab1c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719761466814.scaled_1000224304.jpg",
            "type": "normal",
            "text": "متى أقيمت أخر نسخة لكأس العالم للقارات لكرة القدم؟",
            "answers": [
                {
                    "answer": "2009",
                    "state": false,
                    "_id": "668179ab593d7a4e2261ab1d"
                },
                {
                    "answer": "2013",
                    "state": false,
                    "_id": "668179ab593d7a4e2261ab1e"
                },
                {
                    "answer": "2017",
                    "state": true,
                    "_id": "668179ab593d7a4e2261ab1f"
                },
                {
                    "answer": "2021",
                    "state": false,
                    "_id": "668179ab593d7a4e2261ab20"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:28:43.987Z",
            "updatedAt": "2024-10-03T16:51:28.525Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b9484ee5f2103ccffd6071",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1723418811673.scaled_Picsart_24-07-28_01-28-39-487.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع ناديه بايرن ميونيخ بالدوري الالماني موسم 2017-2018؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6684546642cb22569be005b8",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت دورة الألعاب الأولمبية 1984؟",
            "answers": [
                {
                    "answer": "موسكو",
                    "state": false,
                    "_id": "6684546642cb22569be005b9"
                },
                {
                    "answer": "لوس أنجلوس ",
                    "state": true,
                    "_id": "6684546642cb22569be005ba"
                },
                {
                    "answer": "سيدني",
                    "state": false,
                    "_id": "6684546642cb22569be005bb"
                },
                {
                    "answer": "روما",
                    "state": false,
                    "_id": "6684546642cb22569be005bc"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T19:26:30.176Z",
            "updatedAt": "2024-10-03T16:51:44.815Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66bbc558e5f2103ccf029f85",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beef741a92db3975282a5"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "من ألفاب نادي الرجاء الرياضي \"القلعة الحمراء\"؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668327adba38dd101b181b7e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c60593d7a4e225b93ae"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من فاز ببطولة كأس العالم لكرة السلة عام 1998؟",
            "answers": [
                {
                    "answer": "روسيا",
                    "state": false,
                    "_id": "668327adba38dd101b181b7f"
                },
                {
                    "answer": "الولايات المتحدة الأمريكية ",
                    "state": false,
                    "_id": "668327adba38dd101b181b80"
                },
                {
                    "answer": "صربيا والجبل الأسود",
                    "state": true,
                    "_id": "668327adba38dd101b181b81"
                },
                {
                    "answer": "اليونان",
                    "state": false,
                    "_id": "668327adba38dd101b181b82"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T22:03:25.126Z",
            "updatedAt": "2024-10-03T16:51:40.217Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669a6f55b22d8881b4d4f92d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721397183284.scaled_1000062856.jpg",
            "type": "true-false",
            "text": "شعار نادي ديربي كاونتي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "669d98b4b22d8881b4e5d042",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bc5593d7a4e225b92af",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721604390714.scaled_1000054451.jpg",
            "type": "normal",
            "text": "ما هي جنسية اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "مالي",
                    "state": true,
                    "_id": "669d98b4b22d8881b4e5d043"
                },
                {
                    "answer": "ايطالي",
                    "state": false,
                    "_id": "669d98b4b22d8881b4e5d044"
                },
                {
                    "answer": "نمساوي ",
                    "state": false,
                    "_id": "669d98b4b22d8881b4e5d045"
                },
                {
                    "answer": "روسي",
                    "state": false,
                    "_id": "669d98b4b22d8881b4e5d046"
                }
            ],
            "active": true,
            "createdAt": "2024-07-21T23:24:36.736Z",
            "updatedAt": "2024-10-03T16:52:58.895Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db3eb90b4098abfe4c38f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562778543.scaled_1000058823.jpg",
            "type": "true-false",
            "text": "شعار نادي إشبيلية ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66a36e14b22d8881b4024e08",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c23593d7a4e225b9318"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو المنتخب الحائز على كأس الأمم الإفريقية عام ١٩٧٠؟",
            "answers": [
                {
                    "answer": "أثيوبيا ",
                    "state": false,
                    "_id": "66a36e1fb22d8881b4025081"
                },
                {
                    "answer": "الكونغو ",
                    "state": false,
                    "_id": "66a36e1fb22d8881b4025082"
                },
                {
                    "answer": "غانا ",
                    "state": false,
                    "_id": "66a36e1fb22d8881b4025083"
                },
                {
                    "answer": "السودان ",
                    "state": true,
                    "_id": "66a36e1fb22d8881b4025084"
                }
            ],
            "active": true,
            "createdAt": "2024-07-26T09:36:20.520Z",
            "updatedAt": "2024-10-03T16:53:08.521Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b36dc1e5f2103ccff8948c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1723035165575.scaled_Picsart_24-07-28_01-20-48-337.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع ناديه بايرن ميونيخ بالدوري الالماني موسم 2023-2024؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6692873390b4098abf00c9ef",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bed593d7a4e225b92d6",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1720879066011.scaled_1000051723.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "يوسف اسامة",
                    "state": true,
                    "_id": "6692873390b4098abf00c9f0"
                },
                {
                    "answer": "ابراهيم عادل",
                    "state": false,
                    "_id": "6692873390b4098abf00c9f1"
                },
                {
                    "answer": "ترفيز موتيابا ",
                    "state": false,
                    "_id": "6692873390b4098abf00c9f2"
                },
                {
                    "answer": "رأفت خليل",
                    "state": false,
                    "_id": "6692873390b4098abf00c9f3"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T13:54:59.070Z",
            "updatedAt": "2024-10-03T16:52:26.916Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66a7bfe7e5f2103ccfc6fd5b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668118a4593d7a4e225b9225",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628",
                "668f815390b4098abfebed7a",
                "668f826190b4098abfec02f9",
                "66962eb6079f88fa2a39563a"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1722269753153.scaled_1000167207.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو مارادونا ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66817751593d7a4e2261204b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719760830490.scaled_1000224304.jpg",
            "type": "normal",
            "text": "من المنتخب الوحيد الذي لم يفشل على الإطلاق في التأهل لكأس العالم لكرة القدم حتى الآن؟",
            "answers": [
                {
                    "answer": "ألمانيا",
                    "state": false,
                    "_id": "66817751593d7a4e2261204c"
                },
                {
                    "answer": "الأرجنتين",
                    "state": false,
                    "_id": "66817751593d7a4e2261204d"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "66817751593d7a4e2261204e"
                },
                {
                    "answer": "البرازيل",
                    "state": true,
                    "_id": "66817751593d7a4e2261204f"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:18:41.125Z",
            "updatedAt": "2024-10-03T16:51:28.524Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668ea59a90b4098abfe84022",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720624652540.scaled_1000059026.jpg",
            "type": "true-false",
            "text": "شعار نادي استون فيلا ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66835b7742cb22569b613b77",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "6682a3cf844d311d79ef83f6"
            ],
            "picture": "uploads/questions/1719884703570.scaled_1000225358.jpg",
            "type": "normal",
            "text": "ما اسم هذا النادي؟",
            "answers": [
                {
                    "answer": "بروسيا دورتموند",
                    "state": false,
                    "_id": "66835b7742cb22569b613b78"
                },
                {
                    "answer": "لايبزغ",
                    "state": false,
                    "_id": "66835b7742cb22569b613b79"
                },
                {
                    "answer": "شتوتغارت ",
                    "state": true,
                    "_id": "66835b7742cb22569b613b7a"
                },
                {
                    "answer": "كوبنهاغن ",
                    "state": false,
                    "_id": "66835b7742cb22569b613b7b"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T01:44:23.691Z",
            "updatedAt": "2024-10-03T16:51:40.220Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ab8f70e5f2103ccfda53c4",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1722519569042.scaled_1000167278.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو فان ستروي؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668e4cb090b4098abfe67e73",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "668a74f58502e7f890fb0ecf"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من هو الرياضي الأكبر سنا الذي فاز بميدالية اولمبية؟",
            "answers": [
                {
                    "answer": "اوسكار سوان",
                    "state": true,
                    "_id": "668e4cb090b4098abfe67e74"
                },
                {
                    "answer": "ليدا بيرون",
                    "state": false,
                    "_id": "668e4cb090b4098abfe67e75"
                },
                {
                    "answer": "ارثو فون",
                    "state": false,
                    "_id": "668e4cb090b4098abfe67e76"
                },
                {
                    "answer": "جون نوردن",
                    "state": false,
                    "_id": "668e4cb090b4098abfe67e77"
                }
            ],
            "active": true,
            "createdAt": "2024-07-10T08:56:16.034Z",
            "updatedAt": "2024-10-03T16:52:20.910Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66a6248be5f2103ccfb265ce",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "668bee4b41a92db3974e13cd",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1722164509674.scaled_1000167755.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو بيرلو ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66845a6142cb22569b177c68",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827e9b844d311d798b9c57"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حتى عام 2022، كم ميدالية ذهبية حصلت عليها سوريا في دورة الألعاب الأولمبية؟",
            "answers": [
                {
                    "answer": "ميدالية واحدة ",
                    "state": true,
                    "_id": "66845a6142cb22569b177c69"
                },
                {
                    "answer": "2 ميدالية ",
                    "state": false,
                    "_id": "66845a6142cb22569b177c6a"
                },
                {
                    "answer": "3 ميداليات ",
                    "state": false,
                    "_id": "66845a6142cb22569b177c6b"
                },
                {
                    "answer": "4 ميداليات ",
                    "state": false,
                    "_id": "66845a6142cb22569b177c6c"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T19:52:01.784Z",
            "updatedAt": "2024-10-03T16:51:44.815Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668cf80d90b4098abfdf467f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720514694120.scaled_1000058636.jpg",
            "type": "true-false",
            "text": "شعار نادي ريال مدريد ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6684a98d42cb22569b62f2ea",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حصل هاري كين على لقب هداف الدوري الإنجليزي في موسم 2020-2021، كم هدف أحرزه؟",
            "answers": [
                {
                    "answer": "20 هدف",
                    "state": false,
                    "_id": "6684a98d42cb22569b62f2eb"
                },
                {
                    "answer": "21 هدف",
                    "state": false,
                    "_id": "6684a98d42cb22569b62f2ec"
                },
                {
                    "answer": "22 هدف",
                    "state": false,
                    "_id": "6684a98d42cb22569b62f2ed"
                },
                {
                    "answer": "23 هدف",
                    "state": true,
                    "_id": "6684a98d42cb22569b62f2ee"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T01:29:49.797Z",
            "updatedAt": "2024-10-03T16:51:49.845Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668ec69090b4098abfe90b6c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720633033354.scaled_1000059355.png",
            "type": "true-false",
            "text": "شعار نادي اينتراخت فرانكفورت ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681bd84ab23c4c91c6c37a7",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل بكأس العالم لكرة القدم عام 1954؟",
            "answers": [
                {
                    "answer": "المجر",
                    "state": false,
                    "_id": "6681bd84ab23c4c91c6c37a8"
                },
                {
                    "answer": "النمسا",
                    "state": false,
                    "_id": "6681bd84ab23c4c91c6c37a9"
                },
                {
                    "answer": "الأوروغواي ",
                    "state": false,
                    "_id": "6681bd84ab23c4c91c6c37aa"
                },
                {
                    "answer": "ألمانيا الغربية",
                    "state": true,
                    "_id": "6681bd84ab23c4c91c6c37ab"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T20:18:12.193Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ad5e41e5f2103ccfdd03d9",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722637913077.scaled_cd86fdf5eeeb1b028ed8158feb557094.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو بيريز؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66832ac8ba38dd101b25cf87",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c60593d7a4e225b93ae"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "متى تأسست رابطة كرة السلة الأمريكية؟",
            "answers": [
                {
                    "answer": "1944",
                    "state": false,
                    "_id": "66832ac8ba38dd101b25cf88"
                },
                {
                    "answer": "1945",
                    "state": false,
                    "_id": "66832ac8ba38dd101b25cf89"
                },
                {
                    "answer": "1946",
                    "state": true,
                    "_id": "66832ac8ba38dd101b25cf8a"
                },
                {
                    "answer": "1947",
                    "state": false,
                    "_id": "66832ac8ba38dd101b25cf8b"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T22:16:40.189Z",
            "updatedAt": "2024-10-03T16:51:40.217Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db2c090b4098abfe4bba1",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562464683.scaled_1000058819.jpg",
            "type": "true-false",
            "text": "شعار نادي إشبيلية ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66817456593d7a4e22608225",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719759999360.scaled_1000224304.jpg",
            "type": "normal",
            "text": "مالدولة التي حققت الرقم القياسي في تسجيل الأهداف في نهائيات كأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "الأرجنتين",
                    "state": false,
                    "_id": "66817456593d7a4e22608226"
                },
                {
                    "answer": "البرازيل",
                    "state": true,
                    "_id": "66817456593d7a4e22608227"
                },
                {
                    "answer": "إسبانيا",
                    "state": false,
                    "_id": "66817456593d7a4e22608228"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "66817456593d7a4e22608229"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:05:58.162Z",
            "updatedAt": "2024-10-03T16:51:28.523Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66a68c44e5f2103ccfb3daab",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c23593d7a4e225b9318"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "فازت تونس مرتين ببطولة كأس أمم إفريقيا ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668177c2593d7a4e22612c55",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719760847765.scaled_1000224304.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1950؟",
            "answers": [
                {
                    "answer": "البرازيل",
                    "state": true,
                    "_id": "668177c2593d7a4e22612c56"
                },
                {
                    "answer": "إيطاليا",
                    "state": false,
                    "_id": "668177c2593d7a4e22612c57"
                },
                {
                    "answer": "الأوروغواي",
                    "state": false,
                    "_id": "668177c2593d7a4e22612c58"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "668177c2593d7a4e22612c59"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:20:34.988Z",
            "updatedAt": "2024-10-03T16:51:28.524Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668d9da290b4098abfe42c90",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720557133199.scaled_1000058799.jpg",
            "type": "true-false",
            "text": "شعار نادي ليفربول ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668174cd593d7a4e2260a8cb",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719760189283.scaled_1000224304.jpg",
            "type": "normal",
            "text": "من اللاعب الذي فاز بكأس العالم لكرة القدم 3 مرات؟",
            "answers": [
                {
                    "answer": "رونالدو الظاهرة",
                    "state": false,
                    "_id": "668174cd593d7a4e2260a8cc"
                },
                {
                    "answer": "كافو",
                    "state": false,
                    "_id": "668174cd593d7a4e2260a8cd"
                },
                {
                    "answer": "روماريو",
                    "state": false,
                    "_id": "668174cd593d7a4e2260a8ce"
                },
                {
                    "answer": "بيليه",
                    "state": true,
                    "_id": "668174cd593d7a4e2260a8cf"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T15:07:57.762Z",
            "updatedAt": "2024-10-03T16:51:28.523Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668d8b6190b4098abfe3c805",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720552331592.scaled_1000058797.jpg",
            "type": "true-false",
            "text": "شعار نادي سبورتنج لشبونه ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66966015079f88fa2a3ab633",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b94593d7a4e225b927c",
                "66811bd6593d7a4e225b92c2",
                "668beff141a92db39764c4ee",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1721131093206.scaled_1000167644.jpg",
            "type": "normal",
            "text": "ما هي جنسية اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "جزائري ",
                    "state": true,
                    "_id": "66966015079f88fa2a3ab634"
                },
                {
                    "answer": "مصري",
                    "state": false,
                    "_id": "66966015079f88fa2a3ab635"
                },
                {
                    "answer": "الماني ",
                    "state": false,
                    "_id": "66966015079f88fa2a3ab636"
                },
                {
                    "answer": "الباني",
                    "state": false,
                    "_id": "66966015079f88fa2a3ab637"
                }
            ],
            "active": true,
            "createdAt": "2024-07-16T11:57:09.385Z",
            "updatedAt": "2024-10-03T16:52:38.324Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669d2c6bb22d8881b4e2bfad",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668f815390b4098abfebed7a"
            ],
            "user_ids": [
                "6695848cf45a05d62e8102b1"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "فاز فريق جنوى بالدوري الإيطالي 9 مرات في تاريخه؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66bf236ae5f2103ccf088185",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c53593d7a4e225b9394"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو المنتخب الفائز بالمركز الثالث ببطولة كوبا أمريكا عام ١٩٨٣ ؟",
            "answers": [
                {
                    "answer": "البرازيل ",
                    "state": false,
                    "_id": "66bf23e2e5f2103ccf0886dc"
                },
                {
                    "answer": "بيرو",
                    "state": true,
                    "_id": "66bf23e2e5f2103ccf0886dd"
                },
                {
                    "answer": "كولومبيا ",
                    "state": false,
                    "_id": "66bf23e2e5f2103ccf0886de"
                },
                {
                    "answer": "الأرجنتين ",
                    "state": false,
                    "_id": "66bf23e2e5f2103ccf0886df"
                }
            ],
            "active": true,
            "createdAt": "2024-08-16T10:01:14.511Z",
            "updatedAt": "2024-10-03T16:53:36.192Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669b96c8b22d8881b4d88a69",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bc5593d7a4e225b92af",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721472769478.scaled_1000063233.jpg",
            "type": "true-false",
            "text": "شعار نادي بريست",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6692f80f90b4098abf04fa11",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bed593d7a4e225b92d6",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1720907900567.scaled_1000051816.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "محمود جنش",
                    "state": true,
                    "_id": "6692f80f90b4098abf04fa12"
                },
                {
                    "answer": "محمد الشناوي ",
                    "state": false,
                    "_id": "6692f80f90b4098abf04fa13"
                },
                {
                    "answer": "احمد الشناوي ",
                    "state": false,
                    "_id": "6692f80f90b4098abf04fa14"
                },
                {
                    "answer": "شوبير",
                    "state": false,
                    "_id": "6692f80f90b4098abf04fa15"
                }
            ],
            "active": true,
            "createdAt": "2024-07-13T21:56:31.680Z",
            "updatedAt": "2024-10-03T16:52:29.916Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6699593fb22d8881b4cf6e6d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b7f593d7a4e225b926d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721326058640.scaled_1000062733.jpg",
            "type": "true-false",
            "text": "شعار نادي سامسون سبور ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6687226903d8da9b7ba7130d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c23593d7a4e225b9318"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حتى عام 2024.. كم عدد النسخ التي شاركت بها ليبيا في بطولة كأس الأمم الأفريقية؟",
            "answers": [
                {
                    "answer": "نسخة واحدة",
                    "state": false,
                    "_id": "6687226903d8da9b7ba7130e"
                },
                {
                    "answer": "نسختان",
                    "state": false,
                    "_id": "6687226903d8da9b7ba7130f"
                },
                {
                    "answer": "3 نسخ",
                    "state": true,
                    "_id": "6687226903d8da9b7ba71310"
                },
                {
                    "answer": "4 نسخ",
                    "state": false,
                    "_id": "6687226903d8da9b7ba71311"
                }
            ],
            "active": true,
            "createdAt": "2024-07-04T22:30:01.881Z",
            "updatedAt": "2024-10-03T16:52:02.310Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698f332b22d8881b4cd71cc",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "تاريخ أول لقب دوري أبطال أوروبا لنادي برشلونة كان في عام 1992",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681eb82844d311d7926bff2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو أفضل إنجاز للولايات المتحدة الأمريكية في كأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "المركز الأول ",
                    "state": false,
                    "_id": "6681eb82844d311d7926bff3"
                },
                {
                    "answer": "المركز الثاني ",
                    "state": false,
                    "_id": "6681eb82844d311d7926bff4"
                },
                {
                    "answer": "المركز الثالث ",
                    "state": true,
                    "_id": "6681eb82844d311d7926bff5"
                },
                {
                    "answer": "المركز الرابع ",
                    "state": false,
                    "_id": "6681eb82844d311d7926bff6"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:34:26.141Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668d9e9490b4098abfe43518",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720557307559.scaled_1000058803.jpg",
            "type": "true-false",
            "text": "شعار نادي ايفرتون ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6685bc6a03d8da9b7b40acb8",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66848e3542cb22569b964f92"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هي أقدم مسابقة كرة يد في العالم؟",
            "answers": [
                {
                    "answer": "الأولمبياد الصيفية",
                    "state": true,
                    "_id": "6685bc6a03d8da9b7b40acb9"
                },
                {
                    "answer": "الأولمبياد الشتوية",
                    "state": false,
                    "_id": "6685bc6a03d8da9b7b40acba"
                },
                {
                    "answer": "كأس العالم",
                    "state": false,
                    "_id": "6685bc6a03d8da9b7b40acbb"
                },
                {
                    "answer": "أمم أوروبا",
                    "state": false,
                    "_id": "6685bc6a03d8da9b7b40acbc"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T21:02:34.183Z",
            "updatedAt": "2024-10-03T16:51:53.960Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c344841a92db397f8da7f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720464476146.scaled_1000058652.jpg",
            "type": "true-false",
            "text": "شعار نادي مانشستر سيتي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6684ae3c42cb22569b87b586",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "هبط أستون فيلا من الدوري الإنجليزي إلى دوري الدرجة الثانية الإنجليزي في أي عام؟",
            "answers": [
                {
                    "answer": "2005",
                    "state": false,
                    "_id": "6684ae3c42cb22569b87b587"
                },
                {
                    "answer": "2010",
                    "state": false,
                    "_id": "6684ae3c42cb22569b87b588"
                },
                {
                    "answer": "2015",
                    "state": true,
                    "_id": "6684ae3c42cb22569b87b589"
                },
                {
                    "answer": "2020",
                    "state": false,
                    "_id": "6684ae3c42cb22569b87b58a"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T01:49:48.613Z",
            "updatedAt": "2024-10-03T16:51:49.845Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66afb6f9e5f2103ccff0f48d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "668f1ab590b4098abfeaa628",
                "668f815390b4098abfebed7a",
                "668f826190b4098abfec02f9",
                "66962ec6079f88fa2a395732"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722791852279.scaled_1000055361.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب بكأس العالم سنة ٢٠٠٢؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668f4ca490b4098abfeb193b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1720667403489.scaled_1000050615.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "لامين يامال ",
                    "state": true,
                    "_id": "668f890090b4098abfecaed3"
                },
                {
                    "answer": "نيكو ويليامز",
                    "state": false,
                    "_id": "668f890090b4098abfecaed4"
                },
                {
                    "answer": "جافي",
                    "state": false,
                    "_id": "668f890090b4098abfecaed5"
                },
                {
                    "answer": "بيدري",
                    "state": false,
                    "_id": "668f890090b4098abfecaed6"
                }
            ],
            "active": true,
            "createdAt": "2024-07-11T03:08:20.845Z",
            "updatedAt": "2024-10-03T16:52:20.921Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669d2e8bb22d8881b4e2d654",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668f815390b4098abfebed7a",
                "66962eb6079f88fa2a39563a"
            ],
            "user_ids": [
                "6695848cf45a05d62e8102b1"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "نادي تورينو كان يسمى سابقًا باسم \"يوفنتوس الثاني\"؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66832f8aba38dd101b43d05d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66827f03844d311d798c6347"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من الفائز بجائزة الكرة الذهبية لكرة القدم في عام 1971؟",
            "answers": [
                {
                    "answer": "جورج بست",
                    "state": false,
                    "_id": "66832f8aba38dd101b43d05e"
                },
                {
                    "answer": "ساندرو مازولا",
                    "state": false,
                    "_id": "66832f8aba38dd101b43d05f"
                },
                {
                    "answer": "لويجي ريفا ",
                    "state": false,
                    "_id": "66832f8aba38dd101b43d060"
                },
                {
                    "answer": "يوهان كرويف ",
                    "state": true,
                    "_id": "66832f8aba38dd101b43d061"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T22:36:58.672Z",
            "updatedAt": "2024-10-03T16:51:40.217Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ae733fe5f2103ccfe2f876",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "66811ba1593d7a4e225b928c",
                "66811bb3593d7a4e225b929d",
                "668bee5a41a92db3974e3c77",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722708887035.scaled_1000052462.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو مسعود اوزيل؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681bbdfab23c4c91c6aaf59",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من أول منتخب فاز بكأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "الأرجنتين",
                    "state": false,
                    "_id": "6681bbdfab23c4c91c6aaf5a"
                },
                {
                    "answer": "البرازيل",
                    "state": false,
                    "_id": "6681bbdfab23c4c91c6aaf5b"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "6681bbdfab23c4c91c6aaf5c"
                },
                {
                    "answer": "الأوروغواي ",
                    "state": true,
                    "_id": "6681bbdfab23c4c91c6aaf5d"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T20:11:11.462Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aba5e1e5f2103ccfdaffc5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1722525277107.scaled_1000167060.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو كوكوريلا؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a10fafb22d8881b4f9f09b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721831414287.scaled_Picsart_24-07-24_21-54-29-545.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "بيريز",
                    "state": false,
                    "_id": "66a10fafb22d8881b4f9f09c"
                },
                {
                    "answer": "جولير",
                    "state": false,
                    "_id": "66a10fafb22d8881b4f9f09d"
                },
                {
                    "answer": "اردا",
                    "state": false,
                    "_id": "66a10fafb22d8881b4f9f09e"
                },
                {
                    "answer": "كايار",
                    "state": true,
                    "_id": "66a10fafb22d8881b4f9f09f"
                }
            ],
            "active": true,
            "createdAt": "2024-07-24T14:29:03.297Z",
            "updatedAt": "2024-10-03T16:53:05.026Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aee152e5f2103ccfe8a2e0",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668bef9341a92db3975ea727"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "فاز الترجي بلقب كأس تونس لكرة القدم موسم 1990–91\tبعد الفوز على النادي الإفريقي؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "669e9e18b22d8881b4ec5efc",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721755464742.scaled_Picsart_24-07-24_00-17-02-470.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "بروما",
                    "state": false,
                    "_id": "669fe6d1b22d8881b4f3a637"
                },
                {
                    "answer": "برونو",
                    "state": false,
                    "_id": "669fe6d1b22d8881b4f3a638"
                },
                {
                    "answer": "دا سيلفا",
                    "state": true,
                    "_id": "669fe6d1b22d8881b4f3a639"
                },
                {
                    "answer": "بالدور",
                    "state": false,
                    "_id": "669fe6d1b22d8881b4f3a63a"
                }
            ],
            "active": true,
            "createdAt": "2024-07-22T17:59:52.662Z",
            "updatedAt": "2024-10-03T16:53:01.892Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aa3137e5f2103ccfd35634",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722429863498.scaled_Picsart_24-07-27_23-28-33-873.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو نيك بوب؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681b62eab23c4c91c664344",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1994؟",
            "answers": [
                {
                    "answer": "كوريا واليابان",
                    "state": false,
                    "_id": "6681b62eab23c4c91c664345"
                },
                {
                    "answer": "الولايات المتحدة الأمريكية ",
                    "state": true,
                    "_id": "6681b62eab23c4c91c664346"
                },
                {
                    "answer": "قطر",
                    "state": false,
                    "_id": "6681b62eab23c4c91c664347"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "6681b62eab23c4c91c664348"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T19:46:54.605Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66942865f45a05d62e7181a4",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7",
                "668f815390b4098abfebed7a"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720985797458.scaled_1000060842.jpg",
            "type": "true-false",
            "text": "شعار نادي امبولي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681e748844d311d7921c7af",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هي أول نسخة من كأس العالم لكرة القدم تفوز بها الأوروغواي؟",
            "answers": [
                {
                    "answer": "1930",
                    "state": true,
                    "_id": "6681e748844d311d7921c7b0"
                },
                {
                    "answer": "1934",
                    "state": false,
                    "_id": "6681e748844d311d7921c7b1"
                },
                {
                    "answer": "1938",
                    "state": false,
                    "_id": "6681e748844d311d7921c7b2"
                },
                {
                    "answer": "1950",
                    "state": false,
                    "_id": "6681e748844d311d7921c7b3"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:16:24.075Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6685486603d8da9b7b3a72ed",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720010957238.scaled_1000056607.jpg",
            "type": "true-false",
            "text": "الأوروغواي هي من أحرزت لقب كأس العالم سنة ١٩٣٠؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681bb3aab23c4c91c6a36b1",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1930؟",
            "answers": [
                {
                    "answer": "إيطاليا",
                    "state": false,
                    "_id": "6681bb3aab23c4c91c6a36b2"
                },
                {
                    "answer": "فرنسا",
                    "state": false,
                    "_id": "6681bb3aab23c4c91c6a36b3"
                },
                {
                    "answer": "البرازيل",
                    "state": false,
                    "_id": "6681bb3aab23c4c91c6a36b4"
                },
                {
                    "answer": "الأوروغواي",
                    "state": true,
                    "_id": "6681bb3aab23c4c91c6a36b5"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T20:08:26.699Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aed687e5f2103ccfe759e7",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668bef9341a92db3975ea727"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "حقق الترجي لقب الرابطة التونسية المحترفة الأولى لأول مرة في موسم 1941-42؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a0c80fb22d8881b4f822c4",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721813072811.scaled_Picsart_24-07-24_08-50-34-544.jpg",
            "type": "normal",
            "text": "ما هو الاسم الأول للاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "هاري",
                    "state": false,
                    "_id": "66a0cb31b22d8881b4f82e82"
                },
                {
                    "answer": "لوك",
                    "state": true,
                    "_id": "66a0cb31b22d8881b4f82e83"
                },
                {
                    "answer": "رونالد",
                    "state": false,
                    "_id": "66a0cb31b22d8881b4f82e84"
                },
                {
                    "answer": "جاك",
                    "state": false,
                    "_id": "66a0cb31b22d8881b4f82e85"
                }
            ],
            "active": true,
            "createdAt": "2024-07-24T09:23:27.221Z",
            "updatedAt": "2024-10-03T16:53:05.025Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668eca6090b4098abfe918cd",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720634021839.scaled_1000059356.png",
            "type": "true-false",
            "text": "شعار نادي مارسيليا ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66adbd61e5f2103ccfde84ff",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beece41a92db39752313a"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حقق الزمالك لقب كأس مصر لموسم 1937–38\tبعد فوزه على؟",
            "answers": [
                {
                    "answer": "الاتحاد السكندري",
                    "state": false,
                    "_id": "66adbd61e5f2103ccfde8500"
                },
                {
                    "answer": "نادي السكة الحديد",
                    "state": false,
                    "_id": "66adbd61e5f2103ccfde8501"
                },
                {
                    "answer": "النادي الأهلي",
                    "state": true,
                    "_id": "66adbd61e5f2103ccfde8502"
                },
                {
                    "answer": "النادي المصري",
                    "state": false,
                    "_id": "66adbd61e5f2103ccfde8503"
                }
            ],
            "active": true,
            "createdAt": "2024-08-03T05:17:21.205Z",
            "updatedAt": "2024-10-03T16:53:21.972Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66c75edfe5f2103ccf0f2a05",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1724342016019.scaled_1000175002.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو جابريال مجاليش ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668489cb42cb22569b736aa4",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو اسم كرة القدم في كأس العالم 1978؟",
            "answers": [
                {
                    "answer": "تيلستار دورلاست ",
                    "state": false,
                    "_id": "668489cb42cb22569b736aa5"
                },
                {
                    "answer": "تانجو",
                    "state": true,
                    "_id": "668489cb42cb22569b736aa6"
                },
                {
                    "answer": "تانجو إسبانا ",
                    "state": false,
                    "_id": "668489cb42cb22569b736aa7"
                },
                {
                    "answer": "شالنج 4 ستار ",
                    "state": false,
                    "_id": "668489cb42cb22569b736aa8"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T23:14:19.544Z",
            "updatedAt": "2024-10-03T16:51:49.844Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66afe53ce5f2103ccff26c83",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "668f1ab590b4098abfeaa628",
                "668f815390b4098abfebed7a",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722803608292.scaled_1000055340.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب بكأس العالم سنة ٢٠٠٢؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66a1186ab22d8881b4fa26d7",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bc5593d7a4e225b92af",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721833749455.scaled_1000055152.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "سيدورف",
                    "state": false,
                    "_id": "66a1186ab22d8881b4fa26d8"
                },
                {
                    "answer": "نيكولاس بالويس",
                    "state": true,
                    "_id": "66a1186ab22d8881b4fa26d9"
                },
                {
                    "answer": "باراديس",
                    "state": false,
                    "_id": "66a1186ab22d8881b4fa26da"
                },
                {
                    "answer": "ڤيرون",
                    "state": false,
                    "_id": "66a1186ab22d8881b4fa26db"
                }
            ],
            "active": true,
            "createdAt": "2024-07-24T15:06:18.900Z",
            "updatedAt": "2024-10-03T16:53:05.026Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698f6d8b22d8881b4cd7f0d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "تاريخ أول مباراة رسمية لنادي برشلونة كان عام 1902",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66819914ab23c4c91c5bde14",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1962؟",
            "answers": [
                {
                    "answer": "تشيلي",
                    "state": true,
                    "_id": "66819914ab23c4c91c5bde15"
                },
                {
                    "answer": "إنجلترا",
                    "state": false,
                    "_id": "66819914ab23c4c91c5bde16"
                },
                {
                    "answer": "السويد",
                    "state": false,
                    "_id": "66819914ab23c4c91c5bde17"
                },
                {
                    "answer": "سويسرا",
                    "state": false,
                    "_id": "66819914ab23c4c91c5bde18"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T17:42:44.202Z",
            "updatedAt": "2024-10-03T16:51:28.531Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aa38bbe5f2103ccfd3881f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722431741971.scaled_Picsart_24-07-27_23-26-07-307.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو سواريز؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6685ca2b03d8da9b7b2b6c99",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل الدوري السعودي لكرة القدم لموسم 2020-2021؟",
            "answers": [
                {
                    "answer": "الاتفاق",
                    "state": false,
                    "_id": "6685ca2b03d8da9b7b2b6c9a"
                },
                {
                    "answer": "النصر",
                    "state": false,
                    "_id": "6685ca2b03d8da9b7b2b6c9b"
                },
                {
                    "answer": "الهلال",
                    "state": true,
                    "_id": "6685ca2b03d8da9b7b2b6c9c"
                },
                {
                    "answer": "الأهلي",
                    "state": false,
                    "_id": "6685ca2b03d8da9b7b2b6c9d"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T22:01:15.896Z",
            "updatedAt": "2024-10-03T16:51:53.961Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db24a90b4098abfe4b738",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562328714.scaled_1000058817.jpg",
            "type": "true-false",
            "text": "شعار نادي ساوباولو ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a58477e5f2103ccfb1c112",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722123534517.scaled_Picsart_24-07-28_01-23-33-797.jpg",
            "type": "normal",
            "text": "ما هو الاسم الأول للاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "لوك",
                    "state": false,
                    "_id": "66a58477e5f2103ccfb1c113"
                },
                {
                    "answer": "كينجسلي",
                    "state": true,
                    "_id": "66a58477e5f2103ccfb1c114"
                },
                {
                    "answer": "كيليان",
                    "state": false,
                    "_id": "66a58477e5f2103ccfb1c115"
                },
                {
                    "answer": "انتوني",
                    "state": false,
                    "_id": "66a58477e5f2103ccfb1c116"
                }
            ],
            "active": true,
            "createdAt": "2024-07-27T23:36:23.959Z",
            "updatedAt": "2024-10-03T16:53:11.444Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b79327e5f2103ccffae6c2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811ba1593d7a4e225b928c",
                "668c216841a92db39792f39f",
                "668f1ab590b4098abfeaa628",
                "668f815390b4098abfebed7a"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1723306893485.scaled_1000168700.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره مركزه مدافع ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66848f6142cb22569ba4dbb8",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حتى عام 2024، كم مرة حقق توتنهام هوتسبير لقب الدوري الإنجليزي؟",
            "answers": [
                {
                    "answer": "مرة واحدة ",
                    "state": false,
                    "_id": "66848f6142cb22569ba4dbb9"
                },
                {
                    "answer": "مرتان ",
                    "state": true,
                    "_id": "66848f6142cb22569ba4dbba"
                },
                {
                    "answer": "3 مرات ",
                    "state": false,
                    "_id": "66848f6142cb22569ba4dbbb"
                },
                {
                    "answer": "4 مرات ",
                    "state": false,
                    "_id": "66848f6142cb22569ba4dbbc"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T23:38:09.151Z",
            "updatedAt": "2024-10-03T16:51:49.844Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668cf71b90b4098abfdf3948",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720514381539.scaled_1000058629.jpg",
            "type": "true-false",
            "text": "شعار نادي انتر ميامي",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681abddab23c4c91c628f51",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811890593d7a4e225b921b",
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "6681a14eab23c4c91c5de595"
            ],
            "picture": "uploads/questions/1719774294830.scaled_1000855432.jpg",
            "type": "normal",
            "text": "كم مرة فاز ميسي بكأس العالم ",
            "answers": [
                {
                    "answer": "2",
                    "state": false,
                    "_id": "6696f90c079f88fa2a4297a4"
                },
                {
                    "answer": "1",
                    "state": true,
                    "_id": "6696f90c079f88fa2a4297a5"
                },
                {
                    "answer": "3",
                    "state": false,
                    "_id": "6696f90c079f88fa2a4297a6"
                },
                {
                    "answer": "5",
                    "state": false,
                    "_id": "6696f90c079f88fa2a4297a7"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T19:02:53.589Z",
            "updatedAt": "2024-10-03T16:51:28.536Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aa2704e5f2103ccfd31094",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b94593d7a4e225b927c",
                "66811bd6593d7a4e225b92c2",
                "668beff141a92db39764c4ee",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1722427262839.scaled_1000167560.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو محرز ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66adc1fde5f2103ccfdeea28",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beece41a92db39752313a"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "خسر الزمالك لقب كأس مصر لموسم 1952–53 على يد نادي؟",
            "answers": [
                {
                    "answer": "الاتحاد السكندري\t",
                    "state": false,
                    "_id": "66adc1fde5f2103ccfdeea29"
                },
                {
                    "answer": "النادي الأهلي\t",
                    "state": true,
                    "_id": "66adc1fde5f2103ccfdeea2a"
                },
                {
                    "answer": "نادي الترسانة\t",
                    "state": false,
                    "_id": "66adc1fde5f2103ccfdeea2b"
                },
                {
                    "answer": "النادي الأوليمبي\t",
                    "state": false,
                    "_id": "66adc1fde5f2103ccfdeea2c"
                }
            ],
            "active": true,
            "createdAt": "2024-08-03T05:37:01.844Z",
            "updatedAt": "2024-10-03T16:53:21.972Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c348341a92db397fa70a3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720464635208.scaled_1000058652.jpg",
            "type": "true-false",
            "text": "شعار نادي ليفربول ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681e826844d311d79232ed5",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هي أول نسخة من كأس العالم لكرة القدم تفوز بها إسبانيا؟",
            "answers": [
                {
                    "answer": "2002",
                    "state": false,
                    "_id": "6681e826844d311d79232ed6"
                },
                {
                    "answer": "2006",
                    "state": false,
                    "_id": "6681e826844d311d79232ed7"
                },
                {
                    "answer": "2010",
                    "state": true,
                    "_id": "6681e826844d311d79232ed8"
                },
                {
                    "answer": "2014",
                    "state": false,
                    "_id": "6681e826844d311d79232ed9"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:20:06.796Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669ae3f2b22d8881b4d6f2f2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721427029727.scaled_1000062864.jpg",
            "type": "true-false",
            "text": "شعار نادي هال سيتي ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681a0abab23c4c91c5dc33b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت كأس العالم لكرة القدم عام 1970؟",
            "answers": [
                {
                    "answer": "المكسيك ",
                    "state": true,
                    "_id": "6681a0abab23c4c91c5dc33c"
                },
                {
                    "answer": "إسبانيا",
                    "state": false,
                    "_id": "6681a0abab23c4c91c5dc33d"
                },
                {
                    "answer": "الولايات المتحدة الأمريكية",
                    "state": false,
                    "_id": "6681a0abab23c4c91c5dc33e"
                },
                {
                    "answer": "إيطاليا",
                    "state": false,
                    "_id": "6681a0abab23c4c91c5dc33f"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T18:15:07.120Z",
            "updatedAt": "2024-10-03T16:51:28.532Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66a9e693e5f2103ccfd2844d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "668f1ab590b4098abfeaa628",
                "668f815390b4098abfebed7a",
                "668f826190b4098abfec02f9",
                "66962eb6079f88fa2a39563a"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722410724052.scaled_1000055364.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو ڤيكتور بايا ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66832758ba38dd101b162f0c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c60593d7a4e225b93ae"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من فاز ببطولة كأس العالم لكرة السلة عام 1990؟",
            "answers": [
                {
                    "answer": "يوغوسلافيا ",
                    "state": true,
                    "_id": "66832758ba38dd101b162f0d"
                },
                {
                    "answer": "الاتحاد السوفيتي ",
                    "state": false,
                    "_id": "66832758ba38dd101b162f0e"
                },
                {
                    "answer": "الولايات المتحدة الأمريكية ",
                    "state": false,
                    "_id": "66832758ba38dd101b162f0f"
                },
                {
                    "answer": "بورتوريكو ",
                    "state": false,
                    "_id": "66832758ba38dd101b162f10"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T22:02:00.076Z",
            "updatedAt": "2024-10-03T16:51:40.217Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66a98325e5f2103ccfd0fdf6",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722385260313.scaled_Picsart_24-07-28_00-06-23-867.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو اكي؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "668ac8be41a92db397ffd2b1",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668aa5e241a92db397651b27"
            ],
            "user_ids": [
                "668ab1a241a92db39761283d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هو الفريق الفائز بال NBA عام ١٩٩١",
            "answers": [
                {
                    "answer": "بوسطن سيلتكس ",
                    "state": false,
                    "_id": "668ac8be41a92db397ffd2b2"
                },
                {
                    "answer": "لوس أنجلوس ليكرز ",
                    "state": false,
                    "_id": "668ac8be41a92db397ffd2b3"
                },
                {
                    "answer": "شيكاغو بولز",
                    "state": true,
                    "_id": "668ac8be41a92db397ffd2b4"
                },
                {
                    "answer": "فيلادلفيا سفنتي ",
                    "state": false,
                    "_id": "668ac8be41a92db397ffd2b5"
                }
            ],
            "active": true,
            "createdAt": "2024-07-07T16:56:30.560Z",
            "updatedAt": "2024-10-03T16:52:15.077Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6685489d03d8da9b7b3b0190",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720011045257.scaled_1000056607.jpg",
            "type": "true-false",
            "text": "ايطاليا هي من أحرزت لقب كأس العالم سنة ١٩٣٠؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6696a908079f88fa2a3d75f8",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b94593d7a4e225b927c",
                "668bee3a41a92db3974deb24",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721149807511.scaled_1000052772.jpg",
            "type": "normal",
            "text": "ما هي جنسية اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "إيرلاندي",
                    "state": true,
                    "_id": "6696a908079f88fa2a3d75f9"
                },
                {
                    "answer": "نرويجي ",
                    "state": false,
                    "_id": "6696a908079f88fa2a3d75fa"
                },
                {
                    "answer": "هولاندي",
                    "state": false,
                    "_id": "6696a908079f88fa2a3d75fb"
                },
                {
                    "answer": "اسباني ",
                    "state": false,
                    "_id": "6696a908079f88fa2a3d75fc"
                }
            ],
            "active": true,
            "createdAt": "2024-07-16T17:08:24.951Z",
            "updatedAt": "2024-10-03T16:52:38.326Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66ae5538e5f2103ccfe2817b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beec341a92db39752088a",
                "668beece41a92db39752313a"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "خسر النادي الأهلي كأس مصر أمام الزمالك في موسم 1958-1959",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a583e9e5f2103ccfb1bb82",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722123288864.scaled_Picsart_24-07-28_01-25-07-006.jpg",
            "type": "normal",
            "text": "ما هو الاسم الأول للاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "شينجي",
                    "state": false,
                    "_id": "66a583e9e5f2103ccfb1bb83"
                },
                {
                    "answer": "نيكاراجو",
                    "state": false,
                    "_id": "66a583e9e5f2103ccfb1bb84"
                },
                {
                    "answer": "هيروشي",
                    "state": false,
                    "_id": "66a583e9e5f2103ccfb1bb85"
                },
                {
                    "answer": "هيروكي",
                    "state": true,
                    "_id": "66a583e9e5f2103ccfb1bb86"
                }
            ],
            "active": true,
            "createdAt": "2024-07-27T23:34:01.475Z",
            "updatedAt": "2024-10-03T16:53:11.444Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66997fa2b22d8881b4d07940",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "فاز نادي برشلونة بلقب الدوري الاسباني للمرة العاشرة في تاريخه في موسم 1981-1980",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66935c5190b4098abf072bc2",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bed593d7a4e225b92d6",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1720933475039.scaled_1000051868.jpg",
            "type": "normal",
            "text": "من هو اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "محمد شكري ",
                    "state": true,
                    "_id": "66935c5190b4098abf072bc3"
                },
                {
                    "answer": "عبد الواحد السيد",
                    "state": false,
                    "_id": "66935c5190b4098abf072bc4"
                },
                {
                    "answer": "عمرو السولية ",
                    "state": false,
                    "_id": "66935c5190b4098abf072bc5"
                },
                {
                    "answer": "امام عاشور ",
                    "state": false,
                    "_id": "66935c5190b4098abf072bc6"
                }
            ],
            "active": true,
            "createdAt": "2024-07-14T05:04:17.027Z",
            "updatedAt": "2024-10-03T16:52:29.918Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db26b90b4098abfe4b898",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562363241.scaled_1000058817.jpg",
            "type": "true-false",
            "text": "شعار نادي سانتوس",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "669d906eb22d8881b4e5aa19",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bc5593d7a4e225b92af",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721602221265.scaled_1000054435.jpg",
            "type": "normal",
            "text": "ما هو الاسم الأول للاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "كاسيميرو ",
                    "state": false,
                    "_id": "669d906eb22d8881b4e5aa1a"
                },
                {
                    "answer": "ايدن",
                    "state": true,
                    "_id": "669d906eb22d8881b4e5aa1b"
                },
                {
                    "answer": "هويلاند",
                    "state": false,
                    "_id": "669d906eb22d8881b4e5aa1c"
                },
                {
                    "answer": "ديمبلي ",
                    "state": false,
                    "_id": "669d906eb22d8881b4e5aa1d"
                }
            ],
            "active": true,
            "createdAt": "2024-07-21T22:49:18.787Z",
            "updatedAt": "2024-10-03T16:52:58.895Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669d2982b22d8881b4e2a6cb",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668f815390b4098abfebed7a"
            ],
            "user_ids": [
                "6695848cf45a05d62e8102b1"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "يعد فرانشيسكو توتي الهداف التاريخي لنادي روما؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66818376587e55d06194700a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719763957238.scaled_1000224304.jpg",
            "type": "normal",
            "text": "من حصل على القفاز الذهبي في كأس العالم للقارات لكرة القدم في 2009؟",
            "answers": [
                {
                    "answer": "عصام الحضري",
                    "state": false,
                    "_id": "66818376587e55d06194700b"
                },
                {
                    "answer": "بوفون",
                    "state": false,
                    "_id": "66818376587e55d06194700c"
                },
                {
                    "answer": "جوليو سيزار",
                    "state": false,
                    "_id": "66818376587e55d06194700d"
                },
                {
                    "answer": "تيم هاوارد",
                    "state": true,
                    "_id": "66818376587e55d06194700e"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T16:10:30.353Z",
            "updatedAt": "2024-10-03T16:51:28.529Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66a7a8f0e5f2103ccfc5c766",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c23593d7a4e225b9318"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "فاز منتخب نيجيريا بالمركز الثالث بكأس أمم إفريقيا ١٩٩٢",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a57d0ae5f2103ccfb19f2d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722121554369.scaled_Picsart_24-07-27_23-15-24-586.jpg",
            "type": "normal",
            "text": "ما هي جنسية اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "انجليزي",
                    "state": false,
                    "_id": "66a57d0ae5f2103ccfb19f2e"
                },
                {
                    "answer": "سنغالي",
                    "state": true,
                    "_id": "66a57d0ae5f2103ccfb19f2f"
                },
                {
                    "answer": "ايفواري",
                    "state": false,
                    "_id": "66a57d0ae5f2103ccfb19f30"
                },
                {
                    "answer": "الماني",
                    "state": false,
                    "_id": "66a57d0ae5f2103ccfb19f31"
                }
            ],
            "active": true,
            "createdAt": "2024-07-27T23:04:42.083Z",
            "updatedAt": "2024-10-03T16:53:11.444Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66997cfbb22d8881b4d03d22",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811b38593d7a4e225b9246",
                "66811ba1593d7a4e225b928c",
                "668bee3a41a92db3974deb24"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "في موسم 2011-2010، فاز نادي برشلونة بلقب دوري الأبطال على حساب مانشستر يونايتد",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668268fc844d311d79684114",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من هو أول لاعب مغربي سجل في كأس العالم لكرة القدم؟",
            "answers": [
                {
                    "answer": "عبدالرزاق خيري",
                    "state": true,
                    "_id": "668268fc844d311d79684115"
                },
                {
                    "answer": "موهوب الغزواني",
                    "state": false,
                    "_id": "668268fc844d311d79684116"
                },
                {
                    "answer": "عبدالكريم ميري ",
                    "state": false,
                    "_id": "668268fc844d311d79684117"
                },
                {
                    "answer": "حسين ناظر",
                    "state": false,
                    "_id": "668268fc844d311d79684118"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T08:29:48.301Z",
            "updatedAt": "2024-10-03T16:51:28.562Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66a7d255e5f2103ccfc7aec6",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668118a4593d7a4e225b9225",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "66811ba1593d7a4e225b928c",
                "66811bd6593d7a4e225b92c2",
                "668f1ab590b4098abfeaa628",
                "668f815390b4098abfebed7a",
                "668f826190b4098abfec02f9",
                "66962eb6079f88fa2a39563a"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1722274449773.scaled_1000168798.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو ياشين؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6681bcbfab23c4c91c6b8be3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d",
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "من بطل كأس العالم لكرة القدم عام 1930؟",
            "answers": [
                {
                    "answer": "الأرجنتين",
                    "state": false,
                    "_id": "6681e25f844d311d791af8c9"
                },
                {
                    "answer": "الولايات المتحدة الأمريكية ",
                    "state": false,
                    "_id": "6681e25f844d311d791af8ca"
                },
                {
                    "answer": "يوغوسلافيا ",
                    "state": false,
                    "_id": "6681e25f844d311d791af8cb"
                },
                {
                    "answer": "الأوروغواي",
                    "state": true,
                    "_id": "6681e25f844d311d791af8cc"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T20:14:55.204Z",
            "updatedAt": "2024-10-03T16:51:28.557Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6698fe4fb22d8881b4cdc426",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "6681187a593d7a4e225b9212",
                "66811890593d7a4e225b921b",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "669561fdf45a05d62e7efd7f"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "ليونيل ميسي سجل هدفه ال 500 مع برشلونة في مباراة الكلاسيكو ضد ريال مدريد",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "668451de42cb22569bcfa35f",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681187a593d7a4e225b9212",
                "66811ba1593d7a4e225b928c"
            ],
            "user_ids": [
                "66814fc6593d7a4e225bbcc2"
            ],
            "picture": "uploads/questions/1719947877080.scaled_Ù¢Ù Ù¢Ù¤Ù Ù§Ù Ù¢_Ù¢Ù¢Ù¡Ù¥Ù Ù¡.jpg",
            "type": "normal",
            "text": "من هو أكثر لاعب فاز بجائزة بيتشيتشي الذهبية في تاريخ الدوري الإسباني؟",
            "answers": [
                {
                    "answer": "أنخيل دي ماريا",
                    "state": false,
                    "_id": "6696f7fd079f88fa2a4277c4"
                },
                {
                    "answer": "ليونيل ميسي",
                    "state": true,
                    "_id": "6696f7fd079f88fa2a4277c5"
                },
                {
                    "answer": " كريستيانو رونالدو",
                    "state": false,
                    "_id": "6696f7fd079f88fa2a4277c6"
                },
                {
                    "answer": "سيرجيو راموس",
                    "state": false,
                    "_id": "6696f7fd079f88fa2a4277c7"
                }
            ],
            "active": true,
            "createdAt": "2024-07-02T19:15:42.969Z",
            "updatedAt": "2024-10-03T16:51:44.815Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669be61cb22d8881b4da69d7",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b6f593d7a4e225b925f",
                "66811b7f593d7a4e225b926d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721493125672.scaled_1000063416.jpg",
            "type": "true-false",
            "text": "شعار نادي فيزيلا",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6685fead03d8da9b7b6ac7ee",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حتى عام 2024، كم مرة حقق الفيصلي لقب كأس خادم الحرمين الشريفين السعودي؟",
            "answers": [
                {
                    "answer": "مرة واحدة",
                    "state": true,
                    "_id": "6685fead03d8da9b7b6ac7ef"
                },
                {
                    "answer": "مرتان",
                    "state": false,
                    "_id": "6685fead03d8da9b7b6ac7f0"
                },
                {
                    "answer": "3 مرات ",
                    "state": false,
                    "_id": "6685fead03d8da9b7b6ac7f1"
                },
                {
                    "answer": "4 مرات",
                    "state": false,
                    "_id": "6685fead03d8da9b7b6ac7f2"
                }
            ],
            "active": true,
            "createdAt": "2024-07-04T01:45:17.252Z",
            "updatedAt": "2024-10-03T16:51:53.963Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66aad050e5f2103ccfd6e43c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beec341a92db39752088a"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "true-false",
            "text": "فاز النادي الأهلي المصري بكأس مصر موسم 1948-1949 بالفوز على الزمالك",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66bb98d1e5f2103ccf0167f9",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "668beeec41a92db3975259eb"
            ],
            "user_ids": [
                "6695624ef45a05d62e7eff14"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "في كأس العرش المغربي 1978، حصد الوداد الرياضي المركز؟",
            "answers": [
                {
                    "answer": "الأول",
                    "state": true,
                    "_id": "66bb98d1e5f2103ccf0167fa"
                },
                {
                    "answer": "الثاني",
                    "state": false,
                    "_id": "66bb98d1e5f2103ccf0167fb"
                },
                {
                    "answer": "الثالث",
                    "state": false,
                    "_id": "66bb98d1e5f2103ccf0167fc"
                },
                {
                    "answer": "الرابع",
                    "state": false,
                    "_id": "66bb98d1e5f2103ccf0167fd"
                }
            ],
            "active": true,
            "createdAt": "2024-08-13T17:33:05.434Z",
            "updatedAt": "2024-10-03T16:53:36.188Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db1d290b4098abfe4b458",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562233774.scaled_1000058815.jpg",
            "type": "true-false",
            "text": "شعار نادي روما",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66981304b22d8881b4c8501a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "66811b38593d7a4e225b9246",
                "66811b94593d7a4e225b927c",
                "66811ba1593d7a4e225b928c",
                "668bef7d41a92db3975e55be",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1721242444443.scaled_1000167054.jpg",
            "type": "normal",
            "text": "ما هو الاسم الأول لهذا اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "ادين ",
                    "state": true,
                    "_id": "66981304b22d8881b4c8501b"
                },
                {
                    "answer": "نيكو",
                    "state": false,
                    "_id": "66981304b22d8881b4c8501c"
                },
                {
                    "answer": "جيرارد ",
                    "state": false,
                    "_id": "66981304b22d8881b4c8501d"
                },
                {
                    "answer": "ليونيل ",
                    "state": false,
                    "_id": "66981304b22d8881b4c8501e"
                }
            ],
            "active": true,
            "createdAt": "2024-07-17T18:52:52.895Z",
            "updatedAt": "2024-10-03T16:52:42.367Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b38a6de5f2103ccff8bd14",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "668f1ab590b4098abfeaa628",
                "668f815390b4098abfebed7a",
                "66962ed4079f88fa2a395880"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1723042530739.scaled_1000168500.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب بكأس العالم سنة ٢٠٢٢؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6684ac8642cb22569b79b42c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811b94593d7a4e225b927c"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "يتأهل من الدوري الإنجليزي إلى دوري أبطال أوروبا؟",
            "answers": [
                {
                    "answer": "بطل الدوري والكأس",
                    "state": false,
                    "_id": "6684ac8642cb22569b79b42d"
                },
                {
                    "answer": "بطل ووصيف الدوري",
                    "state": false,
                    "_id": "6684ac8642cb22569b79b42e"
                },
                {
                    "answer": "الأول للثالث بالدوري",
                    "state": false,
                    "_id": "6684ac8642cb22569b79b42f"
                },
                {
                    "answer": "الأول للرابع بالدوري",
                    "state": true,
                    "_id": "6684ac8642cb22569b79b430"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T01:42:30.022Z",
            "updatedAt": "2024-10-03T16:51:49.845Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db10390b4098abfe4b067",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720561986343.scaled_1000058813.jpg",
            "type": "true-false",
            "text": "شعار نادي بوكاجونيورز ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6684a7c942cb22569b5456a3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "في أي موسم حقق أرسنال لقب الدوري الإنجليزي الممتاز لأول مرة؟",
            "answers": [
                {
                    "answer": "موسم 1995-1996",
                    "state": false,
                    "_id": "6684a7c942cb22569b5456a4"
                },
                {
                    "answer": "موسم 1996-1997",
                    "state": false,
                    "_id": "6684a7c942cb22569b5456a5"
                },
                {
                    "answer": "موسم 1997-1998",
                    "state": true,
                    "_id": "6684a7c942cb22569b5456a6"
                },
                {
                    "answer": "موسم 1998-1999",
                    "state": false,
                    "_id": "6684a7c942cb22569b5456a7"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T01:22:17.142Z",
            "updatedAt": "2024-10-03T16:51:49.845Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668db34890b4098abfe4be78",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720562572074.scaled_1000058821.jpg",
            "type": "true-false",
            "text": "شعار نادي اشبيلية",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "6684a8cc42cb22569b5dfce1",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "حصل هاري كين على لقب هداف الدوري الإنجليزي في موسم 2015-2016، كم هدف أحرزه؟",
            "answers": [
                {
                    "answer": "24 هدف",
                    "state": false,
                    "_id": "6684a8cc42cb22569b5dfce2"
                },
                {
                    "answer": "25 هدف",
                    "state": false,
                    "_id": "6684a8cc42cb22569b5dfce3"
                },
                {
                    "answer": "26 هدف",
                    "state": true,
                    "_id": "6684a8cc42cb22569b5dfce4"
                },
                {
                    "answer": "27 هدف",
                    "state": false,
                    "_id": "6684a8cc42cb22569b5dfce5"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T01:26:36.884Z",
            "updatedAt": "2024-10-03T16:51:49.845Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669baa9eb22d8881b4d8f6b7",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bc5593d7a4e225b92af",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721477809370.scaled_1000063229.jpg",
            "type": "true-false",
            "text": "شعار نادي مونبيلييه",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66a41a28b22d8881b4070eb3",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b38593d7a4e225b9246",
                "66811ba1593d7a4e225b928c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722030709047.scaled_1000055426.jpg",
            "type": "normal",
            "text": "ما هي جنسية اللاعب الظاهر في الصورة ؟",
            "answers": [
                {
                    "answer": "فرنسي ",
                    "state": true,
                    "_id": "66a41a28b22d8881b4070eb4"
                },
                {
                    "answer": "هولاندي",
                    "state": false,
                    "_id": "66a41a28b22d8881b4070eb5"
                },
                {
                    "answer": "اسكوتلاندي ",
                    "state": false,
                    "_id": "66a41a28b22d8881b4070eb6"
                },
                {
                    "answer": "صربي",
                    "state": false,
                    "_id": "66a41a28b22d8881b4070eb7"
                }
            ],
            "active": true,
            "createdAt": "2024-07-26T21:50:32.148Z",
            "updatedAt": "2024-10-03T16:53:08.524Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668ecbd590b4098abfe9230a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720634422209.scaled_1000059358.png",
            "type": "true-false",
            "text": "شعار نادي شالكه ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6681e6ca844d311d792128f6",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هي أول نسخة من كأس العالم لكرة القدم تفوز بها فرنسا؟",
            "answers": [
                {
                    "answer": "1934",
                    "state": false,
                    "_id": "6681e6ca844d311d792128f7"
                },
                {
                    "answer": "1954",
                    "state": false,
                    "_id": "6681e6ca844d311d792128f8"
                },
                {
                    "answer": "1998",
                    "state": true,
                    "_id": "6681e6ca844d311d792128f9"
                },
                {
                    "answer": "2018",
                    "state": false,
                    "_id": "6681e6ca844d311d792128fa"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T23:14:18.635Z",
            "updatedAt": "2024-10-03T16:51:28.559Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "669abd74b22d8881b4d603dc",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1721417206126.scaled_1000062862.jpg",
            "type": "true-false",
            "text": "شعار نادي ميلوول ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66a56d24e5f2103ccfb173f1",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1722117509463.scaled_Picsart_24-07-27_23-24-25-142.jpg",
            "type": "normal",
            "text": "ما هي جنسية اللاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "الماني",
                    "state": false,
                    "_id": "66a56d24e5f2103ccfb173f2"
                },
                {
                    "answer": "اسباني",
                    "state": false,
                    "_id": "66a56d24e5f2103ccfb173f3"
                },
                {
                    "answer": "فرنسي",
                    "state": false,
                    "_id": "66a56d24e5f2103ccfb173f4"
                },
                {
                    "answer": "نمساوي",
                    "state": true,
                    "_id": "66a56d24e5f2103ccfb173f5"
                }
            ],
            "active": true,
            "createdAt": "2024-07-27T21:56:52.679Z",
            "updatedAt": "2024-10-03T16:53:11.443Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668c2b4841a92db397782f76",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720462283431.scaled_1000058658.jpg",
            "type": "true-false",
            "text": "شعار نادي باريس سان جيرمان ",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6685b9cd03d8da9b7b081eb8",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66848dd542cb22569b922f83"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "ما هي الرياضة التي تستخدم فيها الشبكة والمضرب وكرة الريشة؟",
            "answers": [
                {
                    "answer": "كرة التنس",
                    "state": false,
                    "_id": "6685b9cd03d8da9b7b081eb9"
                },
                {
                    "answer": "كرة الريشة",
                    "state": true,
                    "_id": "6685b9cd03d8da9b7b081eba"
                },
                {
                    "answer": "الإسكواش",
                    "state": false,
                    "_id": "6685b9cd03d8da9b7b081ebb"
                },
                {
                    "answer": "البادل",
                    "state": false,
                    "_id": "6685b9cd03d8da9b7b081ebc"
                }
            ],
            "active": true,
            "createdAt": "2024-07-03T20:51:25.346Z",
            "updatedAt": "2024-10-03T16:51:53.960Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6692be2f90b4098abf038283",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720893044780.scaled_1000060938.jpg",
            "type": "true-false",
            "text": "هل هذا شعار نادي هوفنهايم ؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "6685f2b203d8da9b7b0f3a2a",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "كم مرة حقق النصر المركز الثاني في السوبر السعودي لكرة القدم حتى عام 2023؟",
            "answers": [
                {
                    "answer": "مرة واحدة",
                    "state": false,
                    "_id": "6685f2b203d8da9b7b0f3a2b"
                },
                {
                    "answer": "مرتان",
                    "state": true,
                    "_id": "6685f2b203d8da9b7b0f3a2c"
                },
                {
                    "answer": "3 مرات",
                    "state": false,
                    "_id": "6685f2b203d8da9b7b0f3a2d"
                },
                {
                    "answer": "4 مرات",
                    "state": false,
                    "_id": "6685f2b203d8da9b7b0f3a2e"
                }
            ],
            "active": true,
            "createdAt": "2024-07-04T00:54:10.782Z",
            "updatedAt": "2024-10-03T16:51:53.963Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66accb75e5f2103ccfdc2683",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "66811ba1593d7a4e225b928c",
                "66811bc5593d7a4e225b92af",
                "668bee3a41a92db3974deb24",
                "668f1ab590b4098abfeaa628",
                "668f826190b4098abfec02f9"
            ],
            "user_ids": [
                "66956971f45a05d62e7f49dd"
            ],
            "picture": "uploads/questions/1722600437321.scaled_1000166990.jpg",
            "type": "true-false",
            "text": "اللاعب الظاهر في الصوره هو بيكيه؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "669d641fb22d8881b4e4475c",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b94593d7a4e225b927c",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1721590978980.scaled_Picsart_24-07-21_10-10-29-909.jpg",
            "type": "normal",
            "text": "ما هو الاسم الأول للاعب الظاهر في الصورة؟",
            "answers": [
                {
                    "answer": "جوليو",
                    "state": true,
                    "_id": "669d641fb22d8881b4e4475d"
                },
                {
                    "answer": "جوليان",
                    "state": false,
                    "_id": "669d641fb22d8881b4e4475e"
                },
                {
                    "answer": "البيرتو",
                    "state": false,
                    "_id": "669d641fb22d8881b4e4475f"
                },
                {
                    "answer": "ريكو",
                    "state": false,
                    "_id": "669d641fb22d8881b4e44760"
                }
            ],
            "active": true,
            "createdAt": "2024-07-21T19:40:15.446Z",
            "updatedAt": "2024-10-03T16:52:58.893Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b51b41e5f2103ccffa1995",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1723145059459.scaled_Picsart_24-07-27_23-44-03-572.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع ناديه بايرن ميونيخ بالدوري الالماني موسم 2013-2014؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": false
                },
                {
                    "answer": "صح",
                    "state": true
                }
            ]
        },
        {
            "_id": "66bcf177e5f2103ccf03c23d",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c53593d7a4e225b9394"
            ],
            "user_ids": [
                "6695846bf45a05d62e810217"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت بطولة كوبا أمريكا عام ٢٠١١ ؟",
            "answers": [
                {
                    "answer": "كولومبيا ",
                    "state": false,
                    "_id": "66bcf177e5f2103ccf03c23e"
                },
                {
                    "answer": "بيرو",
                    "state": false,
                    "_id": "66bcf177e5f2103ccf03c23f"
                },
                {
                    "answer": "فنزويلا ",
                    "state": false,
                    "_id": "66bcf177e5f2103ccf03c240"
                },
                {
                    "answer": "الأرجنتين ",
                    "state": true,
                    "_id": "66bcf177e5f2103ccf03c241"
                }
            ],
            "active": true,
            "createdAt": "2024-08-14T18:03:35.155Z",
            "updatedAt": "2024-10-03T16:53:36.189Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "66b7d9b4e5f2103ccffb2d5b",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811bb3593d7a4e225b929d",
                "668f1ab590b4098abfeaa628"
            ],
            "user_ids": [
                "668f1af090b4098abfeaa873"
            ],
            "picture": "uploads/questions/1723324939312.scaled_Picsart_24-07-28_01-29-51-666.jpg",
            "type": "true-false",
            "text": "فاز هذا اللاعب مع ناديه بايرن ميونيخ بكأس السوبر الاوروبي 2020؟",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66812ee6593d7a4e225b96ac",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6681186f593d7a4e225b920a",
                "668118a4593d7a4e225b9225",
                "66811b38593d7a4e225b9246",
                "66811b4a593d7a4e225b9252",
                "66811b94593d7a4e225b927c",
                "66811ba1593d7a4e225b928c",
                "66811bd6593d7a4e225b92c2"
            ],
            "user_ids": [
                "66810829593d7a4e225b918b"
            ],
            "picture": "uploads/questions/1719742300122.scaled_1000055218.png",
            "type": "normal",
            "text": "ما الإسم الأول للاعب رونالدو؟",
            "answers": [
                {
                    "answer": "كريستيانو ",
                    "state": true,
                    "_id": "6690304490b4098abff25e20"
                },
                {
                    "answer": "ليونيل",
                    "state": false,
                    "_id": "6690304490b4098abff25e21"
                },
                {
                    "answer": "باولو",
                    "state": false,
                    "_id": "6690304490b4098abff25e22"
                },
                {
                    "answer": "لويس",
                    "state": false,
                    "_id": "6690304490b4098abff25e23"
                }
            ],
            "active": true,
            "createdAt": "2024-06-30T10:09:42.686Z",
            "updatedAt": "2024-10-03T16:51:28.506Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "668d9fe090b4098abfe44007",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "6682a392844d311d79ef37a7"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720557557931.scaled_1000058807.jpg",
            "type": "true-false",
            "text": "شعار نادي مونبيلييه",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66827096844d311d7974827e",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c60593d7a4e225b93ae"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "أين أقيمت بطولة كأس العالم لكرة السلة عام 1970؟",
            "answers": [
                {
                    "answer": "يوغوسلافيا ",
                    "state": true,
                    "_id": "66827096844d311d7974827f"
                },
                {
                    "answer": "بورتوريكو ",
                    "state": false,
                    "_id": "66827096844d311d79748280"
                },
                {
                    "answer": "الفلبين ",
                    "state": false,
                    "_id": "66827096844d311d79748281"
                },
                {
                    "answer": "إسبانيا ",
                    "state": false,
                    "_id": "66827096844d311d79748282"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T09:02:14.625Z",
            "updatedAt": "2024-10-03T16:51:28.562Z",
            "__v": 0,
            "check": false
        },
        {
            "_id": "6685670d03d8da9b7bfde116",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811b4a593d7a4e225b9252"
            ],
            "user_ids": [
                "667f5db1528b9ae4c2ef7af3"
            ],
            "picture": "uploads/questions/1720018802128.scaled_1000056607.jpg",
            "type": "true-false",
            "text": "فرنسا هي المنتخب الفائز بكأس العالم لكرة القدم ١٩٣٤",
            "answers": [
                {
                    "answer": "خطأ",
                    "state": true
                },
                {
                    "answer": "صح",
                    "state": false
                }
            ]
        },
        {
            "_id": "66826db6844d311d797010d8",
            "section_id": "6681024c593d7a4e225b913b",
            "category_ids": [
                "66811c60593d7a4e225b93ae"
            ],
            "user_ids": [
                "66811df2593d7a4e225b944d"
            ],
            "picture": "uploads/questions/1719757257722.Default-Question-Image-Quiz-App.jpg",
            "type": "normal",
            "text": "يقام كأس العالم لكرة السلة كل كم عام؟",
            "answers": [
                {
                    "answer": "عام واحد ",
                    "state": false,
                    "_id": "66826db6844d311d797010d9"
                },
                {
                    "answer": "عامان",
                    "state": false,
                    "_id": "66826db6844d311d797010da"
                },
                {
                    "answer": "ثلاثة أعوام",
                    "state": false,
                    "_id": "66826db6844d311d797010db"
                },
                {
                    "answer": "أربعة أعوام",
                    "state": true,
                    "_id": "66826db6844d311d797010dc"
                }
            ],
            "active": true,
            "createdAt": "2024-07-01T08:49:58.876Z",
            "updatedAt": "2024-10-03T16:51:28.562Z",
            "__v": 0,
            "check": false
        }
    ]

check(arr1, arr2)