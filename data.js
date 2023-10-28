const data = [
    {
        name: "GOAL 1",
        parent: "null",
        children: [
          {
            name: "Target 1.1",
            parent: "GOAL 1",
            children: [
              {
                name: "Target 1.1.1",
                parent: "Target 1.1",
              },
              {
                name: "Target 1.1.2",
                parent: "Target 1.1",
              },
            ],
          },
          {
            name: "Target 1.2",
            parent: "GOAL 1",
            children: [
              {
                name: "Target 1.2.1",
                parent: "1.2",
              },
              {
                name: "Target 1.2.2",
                parent: "Target 1.2",
              },
            ],
          },
          {
            name: "Target 1.3",
            parent: "GOAL 1",
            children: [
              {
                name: "Target 1.3.1",
                parent: "Target 1.3",
                children: [
                  {
                    name: "Target 1.3.1.1",
                    parent: "Target 1.3.1",
                    children: [
                      {
                        name: "Target 1.3.1.1.1",
                        parent: "Target 1.3.1.1",
                      },
                      {
                        name: "Target 1.3.1.1.2",
                        parent: "Target 1.3.1.1",
                      },
                    ],
                  },
                  {
                    name: "Target 1.3.2",
                    parent: "Target 1.3",
                    children: [
                      {
                        name: "Target 1.3.2.1",
                        parent: "Target 1.3.2",
                      },
                      {
                        name: "Target 1.3.2.2",
                        parent: "Target 1.3.2",
                      },
                    ],
                  },
                ],
              },
              {
                name: "Target 1.3.2",
                parent: "Target 1.3",
              },
            ],
          },
          {
            name: "Target 1.4",
            parent: "GOAL 1",
            children: [
              {
                name: "Target 1.4.1",
                parent: "Target 1.4",
              },
              {
                name: "Target 1.4.2",
                parent: "Target 1.4",
                children: [
                  {
                    name: "Target 1.4.2.1",
                    parent: "Target 1.4.2",
                    children: [
                      {
                        name: "Target 1.4.2.1.1",
                        parent: "Target 1.4.2.1",
                      },
                      {
                        name: "Target 1.4.2.1.2",
                        parent: "Target 1.4.2.1",
                      },
                    ],
                  },
                  {
                    name: "Target 1.4.2.2",
                    parent: "Target 1.4.2",
                    children: [
                      {
                        name: "Target 1.4.2.2.1",
                        parent: "Target 1.4.2.2",
                      },
                      {
                        name: "Target 1.4.2.2.2",
                        parent: "Target 1.4.2.2",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            name: "Target 1.5",
            parent: "GOAL 1",
            children: [
              {
                name: "Target 1.5.1",
                parent: "Target 1.5",
              },
              {
                name: "Target 1.5.2",
                parent: "Target 1.5",
              },
            ],
          },
          {
            name: "Target 1.6",
            parent: "GOAL 1",
            children: [
              {
                name: "Target 1.6.1",
                parent: "Target 1.6",
              },
              {
                name: "Target 1.6.2",
                parent: "Target 1.6",
              },
            ],
          },
        ],
      },

]
for(let content of data){
    console.log(content)
}