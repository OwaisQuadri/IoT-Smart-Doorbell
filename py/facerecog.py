# facial recognition implementation
import face_recognition as fr
from PIL import Image
import os
# face_recognition --tolderance .40 ./known ./input

# initialize recognized
recognized = ""
# load image to save

knownPics = os.listdir("./known/")
# get faces of random pic input
input_image = fr.load_image_file("./input.png")
# get faces from input
input_locations = fr.face_locations(input_image)
numOfInputs = len(input_locations)
count = 0
for input in input_locations:
    count += 1
    top, right, bottom, left = input
    face_input = input_image[top:bottom, left:right]
    pil_image = Image.fromarray(face_input)
    # pil_image.show()
    pil_image.save(f'./input/input{count}.png')
# get face encoding of knowns
for f in knownPics:
    name_of_known = f[:-4]
    print(name_of_known)
    image_of_known = fr.load_image_file(f'./known/{f}')
    known_face_encoding = fr.face_encodings(image_of_known)[0]

    # compare current known against inputs
    inputLocation = os.listdir("./input/")
    for i in inputLocation:
        print(i)
        img = fr.load_image_file(f'./input/{i}')
        face_encoding = fr.face_encodings(img)
        match = fr.compare_faces(known_face_encoding, face_encoding)[0]
        input_name = "Unknown Individual"
        if match == True:
            recognized = name_of_known
            print(f'{recognized} was recognized')


#numOfFaces = len(facelocations)
# if(numOfFaces > 1):
#   print(f'there are {numOfFaces} faces in this image')
# loop through face locations


# recieves a picture with a mode [save, predict]

# if save, save picture to the 'known' folder
# else save to 'input' folder and run facialrecog against the picture in comparison to the known folder
